import React from 'react'
import './App.css';
import SearchResults from './search-results';
import Search from './search.js'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      results: [],
      searchTerm: ""
    }
  }

  mutateResult(results) {
    this.setState({results: results})
  }

  mutateSearchTerm(term) {
    this.setState({searchTerm: term})
  }

  render() {
    return (
      <div id="container">
        <Search mutateResult={this.mutateResult.bind(this)} mutateSearchTerm={this.mutateSearchTerm.bind(this)}></Search>
        <SearchResults results={this.state.results} searchTerm={this.state.searchTerm}></SearchResults>
      </div>
    );
  }
}

export default App;
