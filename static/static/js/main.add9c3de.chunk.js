(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var r=s(0),a=s(1),n=s.n(a),c=s(8),i=s.n(c),h=(s(14),s(2)),o=s(3),l=s(5),u=s(4),d=(s(15),s.p+"static/media/shakespeare.e938dc71.jpg"),j=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(h.a)(this,s),r=t.call(this,e),console.log(r.hireMe()),r}return Object(o.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[!this.props.searchTerm&&Object(r.jsx)("div",{className:"image-box",children:Object(r.jsx)("img",{src:d,className:"image"})}),this.props.searchTerm&&Object(r.jsxs)("div",{className:"result-box",children:[Object(r.jsxs)("div",{className:"result-header",children:["Showing Results for ",this.props.searchTerm,Object(r.jsxs)("span",{className:"total-result",children:["Total Results ",this.props.results.length]})]}),Object(r.jsxs)("div",{className:"result-content",children:[this.props.results.length>0&&Object(r.jsx)("div",{className:"note",children:"Note: Act and Scene are not 100% accurate"}),this.props.results.map((function(e,t){return Object(r.jsxs)("div",{className:"single-result",children:[Object(r.jsxs)("div",{className:"result-title",children:["Title: ",e.Play]}),e.Act&&Object(r.jsx)("div",{className:"act",children:e.Act}),e.Scene&&Object(r.jsx)("div",{className:"scene",children:e.Scene}),Object(r.jsx)("div",{className:"result-content",children:e.Content})]},t)}))]})]})]})}},{key:"hireMe",value:function(){console.log("%cHey, I am Vishnu, I have around 8 years of experience in software development. \nI am still learning new things and enjoying my every day at work. I love to be a part of a great\nteam that ships great products and also where I can learn and grow. Looking forward to talking to you!\n    ","color: blue; font-size:18px")}}]),s}(n.a.Component),m=s(6),b=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(h.a)(this,s),(r=t.call(this,e)).state={query:"",errorMsg:""},r.search=r.search.bind(Object(m.a)(r)),r.handleChange=r.handleChange.bind(Object(m.a)(r)),r}return Object(o.a)(s,[{key:"handleChange",value:function(e){this.setState({query:e.target.value})}},{key:"search",value:function(){var e=this;this.setState({errorMsg:""}),this.state.query?this.state.query.length<4?this.setState({errorMsg:"Please enter a search query with more than 3 characters"}):(this.props.mutateSearchTerm(this.state.query),fetch("https://vishnu-shksearch.herokuapp.com/search?q=".concat(this.state.query)).then((function(e){return e.json()})).then((function(t){e.props.mutateResult(t)})).catch((function(e){console.error("Error while sending request",e)}))):this.setState({errorMsg:"Search query cannot be empty"})}},{key:"render",value:function(){return Object(r.jsxs)("div",{id:"search-container",children:[Object(r.jsx)("div",{className:"search-icon"}),Object(r.jsx)("input",{type:"text",value:this.state.query,onChange:this.handleChange,placeholder:"What are thee looking f'r?"}),Object(r.jsx)("button",{onClick:this.search,className:"go-icon"}),Object(r.jsx)("div",{class:"error-msg",children:this.state.errorMsg})]})}}]),s}(n.a.Component),p=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(h.a)(this,s),(r=t.call(this,e)).state={results:[],searchTerm:""},r}return Object(o.a)(s,[{key:"mutateResult",value:function(e){this.setState({results:e})}},{key:"mutateSearchTerm",value:function(e){this.setState({searchTerm:e})}},{key:"render",value:function(){return Object(r.jsxs)("div",{id:"container",children:[Object(r.jsx)(b,{mutateResult:this.mutateResult.bind(this),mutateSearchTerm:this.mutateSearchTerm.bind(this)}),Object(r.jsx)(j,{results:this.state.results,searchTerm:this.state.searchTerm})]})}}]),s}(n.a.Component),g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),r(e),a(e),n(e),c(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.add9c3de.chunk.js.map