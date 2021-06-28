// import React, {Component} from 'react';
// import {Input} from 'reactstrap';
 
// export default class SearchIndex extends Component() {
//   constructor() {
//     super()
//    this.state = {
//      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
//      search: '',
//      results: []
//    }
//  }
 
//  editSearch = (e) => {
//      this.setState({search: e.target.value});
//      this.searchFunction();
//     }
    
    
//     searchFunction = () => {
//         return this.state.things.filter((thing) => 
//         thing.includes(this.state.search))
//     }
    
//     render() {
//         return(
//             <div>
//        <Input placeholder='Search Here' type='text' value={this.state.search} onchange={this.editSearch} />
//        <h3>Results:</h3>
//        {this.state.search}
//        {this.state.things.map((thing) => <p>{thing}</p>)}
//        <p>{this.searchFunction()}</p>
       
//      </div>
//    )
// }
// }

import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component{
  constructor(){
    super()
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     search: ''
   } 
 } 
   
 searchFunction = (e) =>  {
    this.setState({search: e.target.value})
 }

    render(){
      let thingsArray = this.state.things.filter(things => {return(things == this.state.search)})
      return(
        <div>
          <Input placeholder='Search Here' type='text' onChange={this.searchFunction} />
          <h4>Results:</h4> 
          {thingsArray.map(e => 
            <p>
            {e}
            </p>
            )}
        </div>
        )
    }
}