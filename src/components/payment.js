import React from 'react'



export default class payment extends React.Component {
    state = {
        price:this.props.amount
    }
    render() {
        return (
            <div>
            <div className='display-1 text-center'>
                Functionality yet to be added
            </div>
            <div  style={{position:'absolute',right:'35%',bottom:'30%'}}>
                <img src='https://cdn1.iconfinder.com/data/icons/industrial-and-construction-1-2/49/72-512.png' />
            </div>
            </div>
        )
    }
}