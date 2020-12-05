// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';



addItem(name, img, type, exotic, price, quantity) {

        
    if(this.state.cartList[name] == null) {
        this.state.currentItem = {name:name, img:img, type:type, exotic:exotic, price:price, quantity:quantity}
        const cartList = [...this.state.cartList, this.state.currentItem]
    } else{
        this.state.cartList[name].quantity +=1
    }

    this.setState({
        cartList:cart
    })
}


removeItem(name) {

    const cartList = this.state.cartList
    if(this.state.cartList[name].quantity == 1) {
        this.state.cartList[name] = null
    } else {
        this.state.cartList[name].quantity -=1 
    }

    this.setState({
        cartList:cartList
    })
}



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
                    <button class="addcartbutton" onSubmit={this.props.addItem(item.name, item.img, item.type, item.exotic, item.price)}>
                        Add To Cart
                    </button>
                </center>
            </div>
        
            
    )
}
