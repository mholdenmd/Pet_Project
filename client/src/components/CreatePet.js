import React, {useState} from 'react';
import {Link, navigate} from '@reach/router'
import axios from 'axios';


const CreatePet = ()=>{

    const [formInfo, setFormInfo] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    })
    
    const [error, setError] = useState({})
    
    const changeHandler = (e)=>{
        console.log("transforminggggg!")
        console.log(e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value


        })
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        console.log (" getting ready to submit this form ---->", formInfo)
        axios.post("http://localhost:8000/api/pet/create",formInfo)
            .then(res =>{
                console.log("*********  form api submission")
                console.log(res)
                if(res.data.error){
                    console.log (" Try again !  errors were made")
                    setError(res.data.error.errors)
                }
                else{
                navigate("/")
                }
            })
            .catch(err=> console.log("********* ERRORS FROM  API CALLLLLLLLL", err) )

    }

        return (
            <div>
                <Link to = "/">Home</Link>
                <h1>Create New Pet:</h1>
                <form onSubmit={submitHandler} className ="col-6 mx-auto">
                    <div>
                        <label htmlFor="">Name</label>
                        <input type = "text" name = "name" id =""onChange={changeHandler}/>
                        <p className ="text-danger">{error.name? error.name.message: ""}</p>
                    </div>
                    <div>
                        <label htmlFor="">Type</label>
                        <input type = "text" name = "type" id =""onChange={changeHandler}/>
                        <p className ="text-danger">{error.type? error.type.message: ""}</p>
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <input type = "text" name = "description" id =""onChange={changeHandler}/>
                        <p className ="text-danger">{error.description? error.description.message: ""}</p>
                    </div>
                    <div>
                        <label htmlFor="">Skill 1:</label>
                        <input type = "text" name = "skill1" id =""onChange={changeHandler}/>
                        <p className ="text-danger">{error.skill1? error.skill1.message: ""}</p>
                    </div>
                    <div>
                        <label htmlFor="">Skill 2:</label>
                        <input type = "text" name = "skill2" id =""onChange={changeHandler}/>
                        <p className ="text-danger">{error.skill2? error.skill2.message: ""}</p>
                    </div>
                    <div>
                        <label htmlFor="">Skill 3:</label>
                        <input type = "text" name = "skill3" id =""onChange={changeHandler}/>
                        <p className ="text-danger">{error.skill3? error.skill3.message: ""}</p>
                    </div>
                    <p><input type ="submit" value ="Add pet"/></p>
                    <Link to = "/pet/new"><p><input type ="submit" value ="Cancel"/></p></Link>
                </form>
            </div>
        );
    };


export default CreatePet;