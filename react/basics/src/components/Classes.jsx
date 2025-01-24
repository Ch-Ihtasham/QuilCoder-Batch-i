import React, { Component, useState } from "react";

class Classes extends Component {
    constructor() {
        super()
        this.state = {
            name: 'amara',
            no: 0
        }
    }
    changeName() {
        this.setState({
            name: 'Saeed'
        })
    }
    increment() {
        // this.state.no = this.state.no + 1
        // console.log(this.state.no)
        // this.setState({
        //     no: this.state.no + 1
        // }, () => console.log(this.state.no))
        // this.setState((pre) => {
        //     return {
        //         no: pre.no + 1
        //     }
        // })
        this.setState(pre => (
            {
                no: pre.no + 1
            }))

    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render() {
        return (
            <div>
                <div>
                    this is our Class where we use states {this.state.name}
                </div>
                <button onClick={() => this.changeName()}>Change Name</button>
                <div>
                    Number {this.state.no}
                </div>
                <button onClick={() => this.increment()}>Add Up</button>
                <button onClick={() => this.incrementFive()}>Five</button>

            </div>
        )
    }
}
export default Classes



