import { useState } from "react"
import styles from "./SignUpForm.module.css";


export default function SignUpForm({setToken,token}) {
    // State variables for form inputs and error handling
const [userName,setUserName] = useState("")
const [password, setPassword] =  useState("")
const [error, setError] = useState(null)

// Function to handle form submission
async function handleSubmit (e){
    e.preventDefault();
     setError(null); // Clear any previous validation errors

// Validate the username length (must be at least 8 characters)
    if (userName.length < 8) {
      setError("Username must be eight characters in length");
      return;
    }
    try{
    // Send a POST request to sign up the user
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',{
            method: 'POST',
             headers: {
          'Content-Type': 'application/json'},
             body: JSON.stringify({ username: userName, password })
        });

    // Check if the response is successful, otherwise throw an error
         if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      // Extract the token from the API response and update the state
        const result = await response.json()
        console.log('API RESULT', result)
        setToken(result.token);
    }catch(error){

        // Handle errors and display appropriate error message
        setError(error.message)
    }

}
return (
    // Start of the form element
<form onSubmit={handleSubmit} className={styles.form}>
<h2 className={styles.heading}> Sign Up!</h2>

{error && <p className ={styles.error}> {error}</p>}
<label className={styles.label}>
    Username: <input className={styles.input}value={userName} onChange={(e)=> setUserName(e.target.value)}/>
</label>
<label className={styles.label}>
    Password: <input className={styles.input}value={password} onChange={(e)=> setPassword(e.target.value)}/>
</label>
<label className={styles.label}>
    <button className={styles.button}> Submit</button>
</label>


</form>    
)
}