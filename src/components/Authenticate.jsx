import { useState } from "react"
import styles from "./Authenticate.module.css";

export default function Authenticate ({token}){
const [authenticate, setauthenticate] = useState(null);
const  [successMessage, setSuccessMessage] = useState(null);
const [error, setError] = useState(null);
const [username, setUserName] = useState("");

async function handleAuthenticate (e) {
e.preventDefault();

try{
const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/authenticate', {
    method:  'GET',
    headers:{
        'content-Type' : 'application/json' ,
        'Authorization': `Bearer ${token}`
    }
});

if (!response.ok){
    throw new Error('Failed to authenticate token')
}
const result = await response.json();
setSuccessMessage(`Hello, ${result.data.username}! Authentication successful.`);
setUserName(result.data.username);



}catch(error){
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


