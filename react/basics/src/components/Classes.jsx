import React, { Component, useState } from "react";
import ChildProps from "./ChildProps";

class Classes extends Component {
    constructor() {
        super()
        this.state = {
            name: 'amara',
            no: 0
        }
        this.incrementFive = this.incrementFive.bind(this)
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
    // incrementFive = () => {
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    funsix(ans) {
        alert(`this alert from ${ans}`)
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
                {/* <button onClick={() => this.increment()}>Add Up</button> step 1
                <button onClick={this.incrementFive}>Five</button> step 2*/ }
                {/* <button onClick={this.incrementFive.bind(this)}>Five</button> step 3 */}
                <button onClick={this.incrementFive}>Five</button>
                <ChildProps funFive={this.incrementFive} funj={this.funsix} />

            </div>
        )
    }
}
export default Classes



