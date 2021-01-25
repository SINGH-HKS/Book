import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Payment from './payment'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

var price = 0
export default class checkout extends React.Component {
    state = {
        cart: this.props.cart,
        clicked: false
    }

    remove = (id) => {
        // console.log('checkout remove')
        // var item=[]

        // this.state.cart.map(singleitem=>{
        //     console.log('single item',singleitem)
        //     if(singleitem.bookID==id.bookID){
        //         console.log('matched')
        //     }
        //     else{
        //         item.push(id)

        //     }
        //     console.log('item',item)
        // }) 
        //     this.setState({cart:item})
        //     console.log('should update',this.state.cart)
        //     this.props.remove(this.state.cart)
        //     return
        this.setState({ cart: this.state.cart.filter((data) => data.bookID != id.bookID) })
        price = 0
    }
    browse = (item) => {
        window.open(`https://www.google.com/search?q=book+${item}`)
    }

    render() {
        if (this.state.clicked == true) {
            return <Payment amount={price} />
        }
        if ((this.state.cart).length == 0) {
            return (
                <BrowserRouter>
                    <div>
                       
                        <div className='jumbotron'>
                            {/* <div className='row'> */}
                            {/* <div className='col-mt-5 col-ml-20 '> */}
                            <h1 className='display-1' style={{ paddingLeft: '20%' }}> Sorry! nothing in the cart</h1>
                            {/* </div> */}
                            {/* </div> */}

                        </div>
                        <div className='row '>
                            <div className='col checkboxes'>
                                <button className='btn btn-primary col-lg-8 col-sm-12 ' onClick={event =>  window.location.href='/your-href'}>Home</button>
                            </div>
                        </div>

                    </div>
                </BrowserRouter>
            )
        }

        else {
            return (
                <div className={"container block-example " } style={{paddingBottom:'60px',border:'2px dot red'}}>
                    <div className="mt-5 ml-5 mr-5 mb-5  ">
                        <div className={"col-lg-6 col-12 "} >
                            {this.state.cart.map(item => {
                                price += item.price
                                
                                return (<div className="card mt-2" >
                                    <div className='card-header'>Book ID -{item.bookID} | ISBN -{item.isbn}</div>
                                    <div className="card-body bg-info">
                                        <h4 className="card-title">{item.title}</h4>
                                        <div ><div>Authors- {item.authors}
                                        </div>
                                            <div>Language- {item.language_code.toUpperCase()}</div>
                                            <div>Rating- {item.average_rating} ({item.ratings_count} votes)</div>
                                            <div>For more info please visit  <button className='btn btn-success' onClick={() => this.browse(item.title)}>Google Search</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-footer'>
                                        <div classname='row'>
                                            <div >Price- ₹{item.price}</div>
                                            <button onClick={() => { this.remove(item) }}><div> REMOVE </div></button>
                                        </div></div>
                                </div>)
                            })}

                        </div>
                        <div className='' style={{ position:'fixed',right:'20%',top:'50%' }} >
                            <div className='col-12 display-4' style={{ padding: 5,  borderRadius: 10 }}>
                                Total- ₹{price}
                            </div>
                            <div className='col-12 ' style={{ paddingTop: 5 }}>
                                <button onClick={() => { this.setState({ clicked: true }) }} className='btn-primary btn-block' style={{ borderRadius: 5,fontSize:'30px' }}>Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    }
}
