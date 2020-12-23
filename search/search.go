package search

import (
	"fmt"
	"index/suffixarray"
	"io/ioutil"
	"log"
	"regexp"
	"sort"
)

type SuffixArrays map[string]*suffixarray.Index

type Indices struct {
	ActIndex   [][]int
	SceneIndex [][]int
}

type Searcher struct {
	Content map[string]string
	SuffixArrays
	Indices map[string]*Indices
}
type Result struct {
	Play    string
	Content string
	PageNo  int
	Act     string
	Scene   string
}

func (s *Searcher) Load() error {
	files, err := ioutil.ReadDir("completeworks")
	if err != nil {
		log.Fatal(err)
	}
	for _, f := range files {
		fileName := f.Name()
		if fileName != "CONTENT NOTE" && fileName != "TITLE" {
			dat, err := ioutil.ReadFile("completeworks/" + fileName)
			if err != nil {
				return fmt.Errorf("Load: %w", err)
			}

			s.Content[fileName] = string(dat)
			s.SuffixArrays[fileName] = suffixarray.New(dat)
			s.LoadIndices(fileName)
		}
	}
	return nil
}

func (s *Searcher) Search(query string, channel chan []Result) {
	results := []Result{}
	for i, suffix := range s.SuffixArrays {
		idx := suffix.FindAllIndex(regexp.MustCompile("(?i)"+query), -1)
		if len(idx) > 0 {
			for _, id := range idx {
				actName := ""
				actIdx := sort.Search(len(s.Indices[i].ActIndex), func(itr int) bool { return s.Indices[i].ActIndex[itr][0] > id[0] })
				actIdx = actIdx - 1
				if actIdx > -1 {
					actName = s.Content[i][s.Indices[i].ActIndex[actIdx][0]:s.Indices[i].ActIndex[actIdx][1]]
				}

				sceneName := ""
				// sceneIdx := sort.Search(len(s.Indices[i].SceneIndex), func(itr int) bool { return s.Indices[i].SceneIndex[itr][0] > id[0] })
				// sceneIdx = sceneIdx - 1
				// if sceneIdx > -1 {
				// 	sceneName = s.Content[i][s.Indices[i].SceneIndex[actIdx][0]:s.Indices[i].SceneIndex[actIdx][1]]
				// }
				startIndex := id[0] - 50
				endIndex := id[1] + 50
				if startIndex < 0 {
					startIndex = id[0]
				}
				if endIndex > len(s.Content[i]) {
					endIndex = id[1]
				}
				results = append(results,
					Result{
						Play:    i,
						Content: s.Content[i][startIndex:endIndex],
						Act:     actName,
						Scene:   sceneName,
					},
				)
			}
		}
	}
	channel <- results
}

func (s *Searcher) LoadIndices(file string) {
	romanRegex := "M{0,4}(?:CM|CD|D?C{0,3})(?:XC|XL|L?X{0,3})(?:IX|IV|V?I{0,3})"
	actRegex := fmt.Sprintf(`ACT (%[1]s).*`, romanRegex)
	sceneRegex := fmt.Sprintf(`SCENE (%[1]s).*`, romanRegex)
	s.Indices[file] = &Indices{
		ActIndex:   s.SuffixArrays[file].FindAllIndex(regexp.MustCompile(actRegex), -1),
		SceneIndex: s.SuffixArrays[file].FindAllIndex(regexp.MustCompile(sceneRegex), -1),
	}
}
