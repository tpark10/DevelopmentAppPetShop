import React, {Component} from 'react'


export default class Cart extends Component {



    constructor(props) {
        super(props)
    }


    createCartCard = item => {
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

                    <div>
                        <b>Quantity: </b> {item.quantity}
                    </div>

                    <center>
                        <button class="removecartbutton">
                            Remove From Cart
                        </button>
                    </center>
                </div>
            
                
        )
    }

    render() {

        
        return (
           

            <div class="cartbox">

                <h1>Pet Cart</h1>

                <div>
                    Total Token Price: {this.props.aggregator}
                </div>

                <div>
                    {this.props.cartList.map(this.createCartCard)}
                </div>
            </div>

        )
    }
}



