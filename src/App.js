import React, { Component } from 'react'
import './App.css';
import Books from "./components/books"
import Checkout from './components/checkout';
import { BrowserRouter,Route, Switch, Redirect,Link } from "react-router-dom";
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
  count:''
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
    var count=items.length
    this.setState({cart:items,count:count})
    
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
        {this.state.cartclicked==true&& this.state.cart?
        <Redirect to="/books/checkout" ></Redirect>:<div>
          <Redirect to='/books'></Redirect><nav className="navbar navbar-light" style={{background:'#728a89'}}>
        <a className="navbar-brand" href="#">
          <img src="https://cdn0.iconfinder.com/data/icons/learning-icons-rounded/110/Books-512.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
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
    {this.state.count!=0?<button  style={{borderRadius:'100px',background:'#728a89',color:'white'}} onClick={()=>{this.setState({cartclicked:true})}} >
      <img src='https://cdn1.iconfinder.com/data/icons/ecommerce-free/96/Cart-512.png' width="40" height='40' className="d-inline-block align-top" />
      {this.state.count}
      </button>:<button style={{borderRadius:'100px',background:'#728a89'}} onClick={()=>{this.setState({cartclicked:true})}} >
      <img src='https://cdn1.iconfinder.com/data/icons/ecommerce-free/96/Cart-512.png' width="40" height='40' className="d-inline-block align-top" />
      
      </button>}
    
          
      </nav>
      </div>}
        

        
        
        
        <Switch>
          <Route exact path="/books/checkout" render={()=><Checkout cart={this.state.cart} />}/>
          <Route exact path="/payment" component={Payment} />
          <Route path="/books" render={()=><Books addcart={this.addcart} sortType={this.state.sortType} searchText={this.state.searchText}/>}/>
          {/* Add routes to navigate to appropriate components here */}
        </Switch>
        
        <div>
            <div style={phantom} />
            <div style={style}>
            © Copyright @Hitesh { }
            <a className='text-success' href='https://www.linkedin.com/in/hitesh-kumar-singh/' target='_blank'><img src='https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-512.png' height='25' width='25'/></a>
            </div>
        </div>
        </BrowserRouter>
        </div>
    )
  }
}
// }
