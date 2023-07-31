import { useState } from "react"
import styles from "./Authenticate.module.css";

export default function Authenticate ({token}){
    // State variables to manage the authentication process
const [authenticate, setauthenticate] = useState(null);
const  [successMessage, setSuccessMessage] = useState(null);
const [error, setError] = useState(null);
const [username, setUserName] = useState("");

    // Function to handle the authentication process
async function handleAuthenticate (e) {
e.preventDefault();

try{
    // Fetch the authentication API endpoint
const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/authenticate', {
    method:  'GET',
    headers:{
        'content-Type' : 'application/json' ,
        'Authorization': `Bearer ${token}`
    }
});


      // Check if the response is successful, else throw an error
if (!response.ok){
    throw new Error('Failed to authenticate token')
}// Parse the response data
const result = await response.json();
 // Update the success message with the authenticated user's name
setSuccessMessage(`Hello, ${result.data.username}! Authentication successful.`);
// Update the username state with the authenticated user's name
setUserName(result.data.username);



}catch(error){
     // Handle errors and update the error state
setError(error.message)

}


console.log("handleAuthenticate function fired!")

}

    return ( 
    <div className={styles.authenticateContainer}><h2 className={styles.heading}> Authenticate</h2>
    {successMessage && <p className={styles.successMessage}> {successMessage}</p>}
    {error&&<p className={styles.errorMessage}>{error}</p>}
    <button className={styles.authenticateButton}onClick ={handleAuthenticate}> Authenticate Token</button>
    </div>
)}


