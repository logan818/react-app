// * Import the React and ReactDOM libraries

import React from 'react'
import ReactDOM from 'react-dom'
import nodemon from 'nodemon'

// * Create a react component

const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style="background-color: blue; color: white;">Submit</button>
    </div>
  )
}

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'))
