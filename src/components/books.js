import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import "../App.css";
import axios from 'axios'


const url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json"
class books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: this.props.searchText,
            books: [],
            sortType: this.props.sortType,
            bookID: "visible",
            title: "visible",
            average_rating: "visible",
            isbn: "visible",
            language_code: "visible",
            price: "visible",
            ratings_count: "visible",
            title: "visible",
            authors: "visible",
            cart:[]

        }

    }
    
    componentDidMount() {
        
        axios.get(url)
            .then(response => {
                this.setState({ books: response.data })
            }).catch(error => {
                if (error.response) {
                    this.setState({ errorMessage: error.response.data.message })
                }
                else {
                    this.setState({ errorMessage: "Server error" })
                }
            })
    }
    
    addtocart=(id)=>{
        var item=this.state.cart
        var added=false
        this.state.cart.map(singleitem=>{
            if(singleitem.bookID===id.bookID){
                alert('Item is already added into the cart')
                added=true
            }
           
        })
        if(added==true){
            console.log('true')
            return 
        }
        else{
            item.push(id)
            console.log('item added',item)
            this.props.addcart(this.state.cart)
            return this.setState({cart:item})
            
        }

 
    }

    displaybooks = () => {
        return (
            <div>
                <div className="checkboxes" >
                    <input defaultChecked={true} type="checkbox" onChange={() => {
                        if (this.state.bookID == "visible") {
                            this.setState({ bookID: "hidden" })
                        }
                        else {
                            this.setState({ bookID: "visible" })
                        }
                    }} /><label>Book ID</label>
                    <input defaultChecked={true} type="checkbox" onChange={() => {
                        if (this.state.title == "visible") {
                            this.setState({ title: "hidden" })
                        }
                        else {
                            this.setState({ title: "visible" })
                        }
                    }} /><label>Title</label>
                    <input defaultChecked={true} type="checkbox" onChange={() => {
                        if (this.state.authors == "visible") {
                            this.setState({ authors: "hidden" })
                        }
                        else {
                            this.setState({ authors: "visible" })
                        }
                    }} /><label>Authors</label>
                    <input defaultChecked={true} type="checkbox" onChange={() => {
                        if (this.state.isbn == "visible") {
                            this.setState({ isbn: "hidden" })
                        }
                        else {
                            this.setState({ isbn: "visible" })
                        }
                    }} /><label>ISBN</label>
                    <input defaultChecked={true} type="checkbox" onChange={() => {
                        if (this.state.language_code == "visible") {
                            this.setState({ language_code: "hidden" })
                        }
                        else {
                            this.setState({ language_code: "visible" })
                        }
                    }} /><label>Language</label>
                    <input defaultChecked={true} type="checkbox" onChange={() => {
                        if (this.state.price == "visible") {
                            this.setState({ price: "hidden" })

                        }
                        else {
                            this.setState({ price: "visible" })
                        }
                    }} /><label>Price</label>
                    <input defaultChecked={true} type="checkbox" onChange={() => {
                        if (this.state.average_rating == "visible") {
                            this.setState({ average_rating: "hidden" })
                        }
                        else {
                            this.setState({ average_rating: "visible" })
                        }
                    }} /><label>Rating</label>
                    <input defaultChecked={true} type="checkbox" onChange={() => {
                        if (this.state.ratings_count == "visible") {
                            this.setState({ ratings_count: "hidden" })
                        }
                        else {
                            this.setState({ ratings_count: "visible" })
                        }
                    }} /><label>Rating Count</label>
                </div>
                <div className="container-fluid" style={{ paddingTop: "50"}}>
                    <table className={'table-hover table-responsive'} style={{ width: "100%" }}>
                        <thead >
                            <tr >
                                <th scope="col" style={{ visibility: (this.state.bookID) }}>Book ID</th>
                                <th scope="col" style={{ visibility: (this.state.title) }}>Title</th>
                                <th scope="col" style={{ visibility: (this.state.authors) }}>Authors</th>
                                <th scope="col" style={{ visibility: (this.state.isbn) }}>ISBN</th>
                                <th scope="col" style={{ visibility: (this.state.language_code) }}>Language</th>
                                <th scope="col" style={{ visibility: (this.state.price) }}>Price</th>
                                <th scope="col" style={{ visibility: (this.state.average_rating) }}>Average Rating</th>
                                <th scope="col" style={{ visibility: (this.state.ratings_count) }}>Ratings Count</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            {this.state.books.filter((id) => {
                                if (id.title && typeof (id.title) == 'string' && id.authors && typeof (id.authors) == 'string' && id.bookID && typeof(id.bookID)=='number') {
                                    if (id.title.toLowerCase().includes(this.props.searchText.toLowerCase()) || id.authors.toLowerCase().includes(this.props.searchText.toLowerCase())|| id.bookID==(Number(this.props.searchText))) {
                                       
                                        return id
                                    }
                                }
                            }
                            ).sort((a, b) => {
                                    if (this.props.sortType == 'Rating')
                                        return (b.average_rating - a.average_rating)
                                    else return a.bookID - b.bookID
                                }).map((id, index) => {

                                    var rows = []
                                    var rating = Math.round(id.average_rating)
                                    if (rating == '1') {
                                        rows = ['⭐']
                                    }
                                    else if (rating == '2') {
                                        rows = ['⭐⭐']

                                    }
                                    else if (rating == '3') {
                                        rows = ['⭐⭐⭐']

                                    }
                                    else if (rating == '4') {
                                        rows = ['⭐⭐⭐⭐']

                                    }

                                    else if (rating == '5') {
                                        rows = ['⭐⭐⭐⭐⭐']

                                    }

                                    // for(var i = 1; i <Math.round(id.average_rating);i++){
                                    //     rows.push("⭐")
                                    // }
                                    return (
                                        <tr>
                                            <td style={{ visibility: (this.state.bookID),textAlign:'center' }}>{id.bookID}</td>
                                            <td style={{ visibility: (this.state.title) }}>{id.title}</td>
                                            <td style={{ visibility: (this.state.authors) }}>{id.authors}</td>
                                            <td style={{ visibility: (this.state.isbn),textAlign:'center' }}>{id.isbn}</td>
                                            <td style={{ visibility: (this.state.language_code),textAlign:'center' }}>{id.language_code}</td>
                                    <td style={{ visibility: (this.state.price),textAlign:'center' }}>
                                    <div>₹{id.price}</div><span><button onClick={()=>{this.addtocart(id)}}><img src='https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-part-1/33/add_cart-512.png' width='25' height='25'/></button></span>
                                        </td>
                                            <td style={{ visibility: (this.state.average_rating),textAlign:'center' }}>
                                                {/* <ReactStars
                                count={5}
                                value={id.average_rating}
                                size={10}
                                edit={false}
                                activeColor="#ffd700"/>  */}
                                                {rows}{<div>{id.average_rating}</div>}</td>
                                            <td style={{ visibility: (this.state.ratings_count),textAlign:'center' }}>{id.ratings_count}</td>
                                        </tr>
                                    )
                                }
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        )
    }

    render() {

        if (this.state.books != null) {
            return (
                <div>
                   
                    {this.displaybooks()}
                   
                </div>
            )
        }
        return

    }
}
export default books;