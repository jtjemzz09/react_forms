import { useState } from "react"

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
setSuccessMessage(result.message);
setUserName(result.data.username);



}catch(error){
setError(error.message)

}


console.log("handleAuthenticate function fired!")

}

    return ( 
    <div><h2> Authenticate</h2>
    {successMessage && <p> {successMessage}</p>}
    {error&&<p>{error}</p>}
    <button onClick ={handleAuthenticate}> Authenticate Token</button>
    </div>
)}


