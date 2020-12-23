import React from 'react'
export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      errorMsg: ""
    }

    this.search = this.search.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({query: event.target.value});
  }
  search() {
    this.setState({errorMsg: ""})
    if (!this.state.query) {
      this.setState({errorMsg: "Search query cannot be empty"})
      return
    }

    if (this.state.query.length < 4) {
      this.setState({errorMsg: "Please enter a search query with more than 3 characters"})
      return
    }
    this.props.mutateSearchTerm(this.state.query)
    fetch(`https://vishnu-shksearch.herokuapp.com/search?q=${this.state.query}`)
      .then(res => res.json())
      .then(r => {
        this.props.mutateResult(r)
      })
      .catch(err => {
        console.error("Error while sending request", err)
      })
  }
  render() {
    return (
      <div id="search-container">
        <div className="search-icon"></div>
        <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="What are thee looking f'r?" />
        <button onClick={this.search} className="go-icon"></button>
        <div class="error-msg">{this.state.errorMsg}</div>
      </div>
    )
  }
}