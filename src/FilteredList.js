import React, {Component} from 'react'
import DisplayList from './DisplayList'
import { Navbar, Nav, NavDropdown,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Cart from './Cart'

var cart=[]

export default class FilteredList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            exotic: "All",

            type: "All",

            sort: "All",

            cartPrice: 0,

            currentItem: {
                name: '',
                img: '',
                type: '',
                exotic: '',
                price: '',
                quantity: '',
                hi: ''
            }
        }
    }

    //helper functions to implement filter and sorts
    onSelectFilterType = event => {
        this.setState({
            type: event
        })
    }

    matchesFilterType = item => {
        if(this.state.type === "All") {
            return true
        } else if (this.state.type === item.type) {
            return true 
        } else {
            return false 
        }
    }

    onSelectFilterExotic = event => {
        this.setState({
            exotic: event
        })
    }

    matchesFilterExotic = item => {
        if(this.state.exotic === "All") {
            return true
        } else if (this.state.exotic === item.exotic) {
            return true 
        } else {
            return false 
        }
    }

    filterBoth = item => {
        return this.matchesFilterType(item) && this.matchesFilterExotic(item)
    }

    onSelectSortPrice = event => {
        this.setState({
            sort: event
        })
    }

    //helper function to aggregate cart 
    addItem (name, img, type, exotic, quantity) {

        cart.push({name:name, img:img, type:type, exotic:exotic, quantity:1})

   
    }
    
    render () {
        return (
            <div>

                <Navbar collapseOnSelect expand="lg" bg="red" variant="light">
            <Navbar.Brand href="#home">Pet-Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">

                  
                <NavDropdown title="Pet Type" id="collasible-nav-dropdown">

                  <NavDropdown.Item>
                      <Nav.Link eventKey="Mammal" onSelect={this.onSelectFilterType}>Mammal</Nav.Link>
                      </NavDropdown.Item>

                  <NavDropdown.Item>
                      <Nav.Link eventKey="Bird" onSelect={this.onSelectFilterType}>Bird</Nav.Link>
                      </NavDropdown.Item>

                  <NavDropdown.Item>
                      <Nav.Link eventKey="Fish" onSelect={this.onSelectFilterType}>Fish</Nav.Link>
                      </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item>
                      <Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>All</Nav.Link>
                      </NavDropdown.Item>

                </NavDropdown>

                <NavDropdown title="Exotic Level" id="collasible-nav-dropdown">

                  <NavDropdown.Item>
                    <Nav.Link eventKey="Low" onSelect={this.onSelectFilterExotic}>Low</Nav.Link>
                    </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Nav.Link eventKey="Medium" onSelect={this.onSelectFilterExotic}>Medium</Nav.Link>
                    </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Nav.Link eventKey="High" onSelect={this.onSelectFilterExotic}>High</Nav.Link>
                    </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item>
                    <Nav.Link eventKey="All" onSelect={this.onSelectFilterExotic}>All</Nav.Link>
                    </NavDropdown.Item>

                </NavDropdown>

                <NavDropdown title="Price" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Nav.Link eventKey="Low" onSelect={this.onSelectSortPrice}>Low to High
                    </Nav.Link>
                    </NavDropdown.Item>


                  <NavDropdown.Item>
                    <Nav.Link eventKey="High" onSelect={this.onSelectSortPrice}>High to Low
                    </Nav.Link>
                    </NavDropdown.Item>

                  <NavDropdown.Divider />
                  
                  <NavDropdown.Item>
                    <Nav.Link eventKey="All" onSelect={this.onSelectSortPrice}>Our Picks
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>


              </Nav>
            </Navbar.Collapse>
          </Navbar>

                <div class="maingrid">

                    <DisplayList list={this.props.list.filter(this.filterBoth)} sortCond={this.state.sort} addItem={this.addItem} />
                
                    <Cart cartList={cart} removeItem={this.removeItem} aggregator={this.state.cartPrice}/>

                </div>
            </div>
        )
    }
}
    

