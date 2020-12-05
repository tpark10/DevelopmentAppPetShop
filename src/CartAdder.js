import React, {Component} from 'react'

import {FormControl, Input} from '@material-ui/core'



export default class CardAdder extends Component  {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <FormControl margin="normal">
                <form onSubmit={this.props.addItem}>
                    <Input />
                    <Button color="primary" variant="contained">Add To Cart</Button>
                </form>
            </FormControl>
        )
    }
}