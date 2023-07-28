import { useState } from "react"


export default function SignUpForm() {
const [userName,setUserName] = useState("")
const [password, setPassword] =  useState("")
const [error, setError] = useState(null)

async function handleSubmit (e){
    e.preventDefault();
    

}
return (
<form onSubmit={handleSubmit}>
<h2> Sign Up!</h2>
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