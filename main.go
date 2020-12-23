package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"pulley.com/shakesearch/search"
)

func main() {
	searcher := search.Searcher{
		Content:      make(map[string]string),
		SuffixArrays: make(search.SuffixArrays),
		Indices:      make(map[string]*search.Indices),
	}
	fmt.Println(searcher.Indices, "IND")
	err := searcher.Load()
	if err != nil {
		log.Fatal(err)
	}

	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", fs)

	http.HandleFunc("/search", handleSearch(searcher))

	port := os.Getenv("PORT")
	if port == "" {
		port = "3001"
	}

	fmt.Printf("Listening on port %s...", port)
	err = http.ListenAndServe(fmt.Sprintf(":%s", port), nil)
	if err != nil {
		log.Fatal(err)
	}
}

func handleSearch(searcher search.Searcher) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		query, ok := r.URL.Query()["q"]
		if !ok || len(query[0]) < 1 {
			w.WriteHeader(http.StatusBadRequest)
			w.Write([]byte("missing search query in URL params"))
			return
		}
		channel := make(chan []search.Result)
		go searcher.Search(query[0], channel)

		buf := &bytes.Buffer{}
		enc := json.NewEncoder(buf)
		err := enc.Encode(<-channel)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("encoding failure"))
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Write(buf.Bytes())
	}
}
