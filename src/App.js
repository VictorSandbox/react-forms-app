// As a way to simplify the distinction, we can say presentational components are concerned with the look, container components are concerned with making things work. On the other hand this is a container component. It manages and stores its own data, and uses the presentational component to display it
// UI logic  - presentational component - received props and display things correctly
// business logic - smart component, container component - maintain states, have methods that update states, etc

//https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-if-else
import React, { Component } from 'react'
import Form from './FormContainer'

// presentation that is why it uses function - state not used
function App () {
  return <Form />
}

export default App
