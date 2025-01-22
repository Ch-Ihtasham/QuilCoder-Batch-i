import { useState } from 'react'
import React, { Component } from 'react'

// function App(props) {
// const [count, setCount] = useState(0)

//   return (
//     <div>
//       Hello World {props.name} {props.age}

//     </div>
//   )
// }

// --------------- arrow function 

const App = ({ name, age }) => {
  let [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      hello world {name} {age}
      <button onClick={increment}>Number{count}</button>

    </div>
  )

  // return React.createElement('div',{id:'amara', className:'saeed'},React.createElement('h1',null,'Hello World'))
}

// ----------------class base components 

// class App extends Component {
//   render() {
//     return (
//       <div> hello world to {this.props.name}</div>
//     )
//   }
// }


export default App
