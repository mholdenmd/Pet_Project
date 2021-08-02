import React, {useEffect, useState}from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Allpets = ()=> {
    const [allPets, setAllPets] = useState([])

    const [deleteHit, setDeleteHit] = useState(false)
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets/all")
            .then(res =>{
                console.log("************")
                console.log(res)
                console.log("************")
                setAllPets(res.data.results)
            })
            .catch()
    }, [deleteHit])

    const deletePet= (e, petid) => {
        axios.delete(`http://localhost:8000/api/pet/delete/${petid}`)
        .then(res =>{
            console.log("sent a delete request")
            console.log(res)
            setDeleteHit(!deleteHit)
            
        })
        .catch(err=> console.log(err))

    }

        return (
            
            <div>
                <h2>All Pets:</h2>
                {
                    allPets.map((PetsObj, idx)=>{
                        return  <div  key ={idx} style = {{border:"2px solid blue"}}>
                            <h1><Link to = {`/api/pet/${PetsObj._id}`}>Name: {PetsObj.name}</Link></h1>
                            <p>Type: {PetsObj.type}</p>
                            <p>Description: {PetsObj.description}</p>

                            <button className = "btn-danger" onClick= {(e)=> deletePet(e, PetsObj._id)}>Adpot Pet</button>
                            
                            <button className = "btn-dark" ><Link to = {`/pet/edit/${PetsObj._id}`}>Edit Pets</Link></button>
                            

                        </div>
                
                    })
                }
            </div>
            
        );
    };


export default Allpets;  