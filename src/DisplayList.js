import React, {Component} from 'react'
import CartAdder from './CartAdder'
import './App.css';




export default class DisplayList extends Component {

    constructor(props) {
        super(props)
    }

    //helper function to create each card
    createCard = item => {
        return(
                <div key={item.name} class = "eachcard">
                    <div >
                        <b>{item.name}</b>
                    </div>

                    <div class = "pic">
                        <img src ={item.img}/>
                    </div>

                    <div>
                        <b>Pet Type: </b> {item.type}
                    </div>

                    <div>
                        <b>Exotic Level: </b> {item.exotic}
                    </div>

                    <div>
                        <b>Token Price: </b> {item.price}
                    </div>

                    <center>
                        <button class="addcartbutton" >
                            Add To Cart
                        </button>
                    </center>
                </div>
        )
    }


    render() {
        //sorting options to get page back to default 
        if (this.props.sort === "All") {
            
        }
        //sorting option for highest price to lowest
        else if (this.props.sortCond === "High") {
            this.props.list.sort((a,b) => b.price - a.price)
        }
        //sorting option for lowest price to highest
        else if (this.props.sortCond === "Low") {
            this.props.list.sort((a,b) => a.price - b.price)

        }
        //displaying cards
        return (
            <div class = "cardcontainer">
                {this.props.list.map(this.createCard)}
            </div>
        )
    }
}



