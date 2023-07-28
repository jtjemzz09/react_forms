import { useState } from "react"


export default function SignUpForm() {
const [userName,setUserName] = useState("")
const [password, setPassword] =  useState("")
const [error, setError] = useState(null)

async function handleSubmit (e){
    e.preventDefault();
    try{
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',{
            method: 'POST',
             headers: {
          'Content-Type': 'application/json'},
             body: JSON.stringify({ username: userName, password })
        });
        const result = await response.json()
        console.log('API RESULT', result)
    }catch(error){
        setError(error.message)
    }

}
return (
<form onSubmit={handleSubmit}>
<h2> Sign Up!</h2>
{error && <p> {error}</p>}
<label>
    Username: <input value={userName} onChange={(e)=> setUserName(e.target.value)}/>
</label>
<label>
    Password: <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
</label>
<label>
    <button> Submit</button>
</label>


</form>    
)
}