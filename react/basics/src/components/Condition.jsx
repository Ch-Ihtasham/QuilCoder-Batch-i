import React, { Component } from 'react'

export class Condition extends Component {
    constructor() {
        super()
        this.state = {
            value: false
        }

    }
    render() {
        // if (this.state.value) {
        //     return <button>True</button>
        // } else {
        //     return <button>False</button>
        // }
        let message
        if (this.state.value) {
            message = <button>True Value</button>
        }
        else {
            message = <button>False Value</button>
        }
        return (
            <div>
                <div>
                    {/* <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    {message} */}
                    {/* {this.state.value ? (
                        <div>
                            <div>Your Value is true</div>
                        </div>
                    )
                        : <div>Your Value is False</div>} */}
                    {this.state.value && <div>value is ture</div>}

                </div>
            </div>
        )
    }
}

export default Condition
