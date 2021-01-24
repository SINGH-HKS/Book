import React, { Component } from 'react'
import './App.css';
import Books from "./components/books"
import Checkout from './components/checkout';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sortType:"Default",
        searchText:"",
        cart:[],
        cartclicked:false
  
    }
}
handlechange=(event)=>{
  this.setState({searchText:event.target.value})
}
  addcart=(items)=>{
    this.setState({cart:items})
    
  }


  change=(event)=>{
    this.setState({sortType:event.target.value})
    
  }
  render() {
    if(this.state.cartclicked==true){
      console.log('clicked true')
      return <Checkout cart={this.state.cart} />
    }
    else{
    return (
      <div>
        {console.log('FALSE')}
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand" href="#">
            <img src="https://banner2.cleanpng.com/20190424/gal/kisspng-clip-art-book-discussion-club-portable-network-gra-cropped-2248-2-png-early-modern-printing-5cc003e0d150f2.7431060115560877768574.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
              Book Repo
         </a>
         <ul className="navbar-nav mr-auto">
         <select nameName="sort" onChange={this.change}>
           <option value='Default'>Default</option>
           <option value='Rating'>Rating</option>
         </select>
    
         </ul>
         <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
      <input className="form-control mr-sm-2" type="search" value={this.state.searchText} placeholder="Search" aria-label="Search" onChange={this.handlechange}/>
      
      </form>
      <button onClick={()=>{this.setState({cartclicked:true})}} ><img src='https://images.all-free-download.com/images/graphiclarge/green_shopping_cart_icon_vector_280755.jpg' width="50" height='50'/></button>
        </nav>

        
        <Books addcart={this.addcart} sortType={this.state.sortType} searchText={this.state.searchText}/>
        
        </div>
    )
  }
}
}
