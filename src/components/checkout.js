import React, { Component } from 'react';
import PropTypes from 'prop-types';
var price = 0
export default class checkout extends React.Component {
    state = {
        cart: this.props.cart
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
        window.location.href = (`https://www.google.com/search?q=${item}`)
    }
    render() {
        return (
            <div className={"container"}>
                <div className="row mt-5">
                    <div className={"col-lg-6 col-12"}>
                        {this.state.cart.map(item => {
                            price += item.price
                            console.log('price', price)
                            return (<div className="card mt-2" style={{ paddingTop: '10px' }}>
                                <div className='card-header'>Book ID -{item.bookID} | ISBN -{item.isbn}</div>
                                <div className="card-body bg-info" style={{ height: '1px' }}>
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
                    <div className='' style={{paddingLeft:'80%'}} >
                        <div className='' style={{padding:5,border: '2px solid red',borderRadius:10,fontSize:'40px'}}>
                            Total- {price}
                        </div>
                        <div style={{paddingTop:5,paddingLeft:50}}>
                        <button className='btn-primary' style={{height:'40px',width:'100px',borderRadius:5}}>Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
