import React, { useState } from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

const AddStudent = () => {

    let [state,setState]=useState({
        name:"",
        email:"",
        department:""
    })

    console.log();
    

    function handleChange(e){
        let {name,value}=e.target
        setState({...state,[name]:value})
        
    }

    
    async function abc(newData){
        let response = await axios.post("https://6ad078d6addc5b5cb141cc82.mockapi.io/students",newData)
        return response.data
    }
    let mutation = useMutation({
        mutationFn:abc,
        onSuccess:()=>{
            console.log("data created sucessfully");
            setState({name:"", email:"",department:""})
        },
        onError:()=>{
            console.log("data not added");
            
        }
    })
    async function handleSubmit(e){
        e.preventDefault()
        mutation.mutate(state)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='name' value={state.name} placeholder='name...' onChange={handleChange}/>
        <input type="email" name='email' value={state.email} placeholder='email...'  onChange={handleChange} />
        <select name="department" id="" value={state.department} onChange={handleChange}>
            <option value=""hidden>select department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="MEACH">MECH</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="AUTO">AUTO</option>
            <option value="CIVIL">CIVIL</option>
        </select>
        <button disabled={state.name && state.email && state.department? false:true}>Add user</button>
      </form>
    </div>
  )
}

export default AddStudent