import React, { Component } from 'react'
import './App.css';
import Books from "./components/books"
import Checkout from './components/checkout';
import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";
import Payment from './components/payment'
var style = {
  backgroundColor: "#728a89",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}
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
    // if(this.state.cartclicked==true&& this.state.cart){
    //   console.log('clicked true')
    //   console.log('app cart dta',this.state.cart)
    //   return <BrowserRouter><div><Redirect to='/books/checkout'></Redirect></div></BrowserRouter>
    // }
    // else{
    return (
      <div>
        <BrowserRouter>
        
        {console.log('FALSE')}
        {this.state.cartclicked==true&& this.state.cart?
        <Redirect to="/books/checkout" ></Redirect>:<div>
          <Redirect to='/books'></Redirect><nav className="navbar navbar-light" style={{background:'#728a89'}}>
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
      </div>}
        

        
        
        
        <Switch>
          <Route exact path="/books/checkout" render={()=><Checkout cart={this.state.cart} />}/>
          <Route exact path="/payment" component={Payment} />
          <Route path="/books" render={()=><Books addcart={this.addcart} sortType={this.state.sortType} searchText={this.state.searchText}/>}/>
          {/* Add routes to navigate to appropriate components here */}
        </Switch>
        </BrowserRouter>
        <div>
            <div style={phantom} />
            <div style={style}>
            
            © Copyright @Hitesh
            </div>
        </div>
        </div>
    )
  }
}
// }
