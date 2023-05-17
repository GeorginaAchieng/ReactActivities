import { useState } from "react";
const Form=()=>{
    const [firstName, setFirstName ] = useState("");
    // const [state, setState]= useState();

    // const students= [
    //     {Id:0, firstName:"Mary"},
    //     {Id:1, firstName:"June"},
    //     {Id:0, firstName:"Doe"},
    //     {Id:0, firstName:"Achieng"},
    // ];
     
    const click=()=>{
        console.log(`First Name: ${firstName}`)
       
    }
    const SubmitHandle=(event)=>{
        event.preventDefault()

    }
    
    return(
        <div>
            <h1>Get user input</h1>
            <form>
                <input type="text" placeholder="Enter your first name" name="firstName" value={firstName}
                onChange={event=> setFirstName(event.target.value)}
                onSubmit={SubmitHandle}/>
                <button onClick={()=>click({firstName})}>Click to Add</button>
            </form>
            
        </div>
    )
}
export default Form;