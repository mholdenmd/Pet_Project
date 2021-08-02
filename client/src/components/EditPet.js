import React, {useState, useEffect}from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios'



const EditPet = (props)=> {

    const [error, setError] = useState({})



    const [formInfo, setFormInfo] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    })
    

    useEffect(()=> {
        console.log(props.petid)
        axios.get(`http://localhost:8000/api/pet/${props.petid}`)
            .then(res =>{
                console.log(res.data)
                setFormInfo(res.data.results)

            })
            .catch(err => console.log("**********", err))
    },[props.petid])


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
        axios.put(`http://localhost:8000/api/pet/update/${props.petid}`,formInfo)
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
                navigate("/")
        
            })
            .catch(err=> console.log("********* ERRORS FROM  API CALLLLLLLLL", err) )

    }

    console.log(formInfo)
        return (
            <div>
                <Link to = "/">Home</Link>
            <h1>Update Pet: {props.petid}</h1>
            <form onSubmit={submitHandler}>
                    <p>Name: <input type = "text" name = "name" id ="name"onChange={changeHandler} value = {formInfo.name}/></p>
                    <p className ="text-danger">{error.name? error.name.message: ""}</p>
                    <p>Type: <input type = "text" name = "type" id ="type"onChange={changeHandler} value = {formInfo.type}/></p>
                    <p>Description : <input type = "text" name = "description" id =""onChange={changeHandler} value = {formInfo.description}/></p>
                    <p>Skill 1: <input type = "text" name = "skill1" id ="skill1"onChange={changeHandler} value = {formInfo.skill1}/></p>
                    <p>Skill 2: <input type = "text" name = "skill2" id ="skill2"onChange={changeHandler} value = {formInfo.skill2}/></p>
                    <p>Skill 3: <input type = "text" name = "skill3" id ="skill3"onChange={changeHandler} value = {formInfo.skill3}/></p>
                    <p><input type ="submit" value ="Update Pet Info"/></p>
                    <Link to = "/pet/new"><p><input type ="submit" value ="Cancel"/></p></Link>
                </form>
            </div>
        );
    }


export default EditPet;