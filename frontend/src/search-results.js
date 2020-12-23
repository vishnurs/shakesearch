import React from 'react'
import shakespeare from './shakespeare.jpg'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.hireMe())
  }
  render() {
    return (
      <div>
      {!this.props.searchTerm &&
      <div className="image-box">
        <img src={shakespeare} className="image" />
      </div>
      }
      {this.props.searchTerm && 
      <div className="result-box">
        <div className="result-header">
        Showing Results for {this.props.searchTerm}
        <span className="total-result">
          Total Results {this.props.results.length}
        </span>
        </div>
        <div className="result-content">
          {this.props.results.length > 0 &&
            <div className="note">Note: Act and Scene are not 100% accurate</div>
          }
          {this.props.results.map((value, index) => {
            return (
              <div className="single-result" key={index}>
                  <div className="result-title">Title: {value.Play}</div>
                  {value.Act && 
                    <div className="act">{value.Act}</div>
                  }
                  {value.Scene && 
                    <div className="scene">{value.Scene}</div>
                  }
                  <div className="result-content">
                    {value.Content}
                  </div>
              </div>
            )
          })}
        </div>
      </div>
      } 
      </div>
    )
  }

 hireMe() {
    console.log(`%cHey, I am Vishnu, I have around 8 years of experience in software development. 
I am still learning new things and enjoying my every day at work. I love to be a part of a great
team that ships great products and also where I can learn and grow. Looking forward to talking to you!
    `, "color: blue; font-size:18px")
  }
}