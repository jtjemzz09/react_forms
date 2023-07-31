// Import required modules and components
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import { useState } from 'react'


  // Main App component
function App() {
  // State variable to manage authentication token
  const [token,setToken] = useState(null);

  // Render the SignUpForm and Authenticate components

  return (
    <>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
