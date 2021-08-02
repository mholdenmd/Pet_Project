import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const OnePet = (props) => {

    const [individualPet, setIndividualPet] = useState({})
    
    const [deleteHit, setDeleteHit] = useState(false)


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${props.petid}`)
            .then(res=>{
                console.log("response after trying to get ONE Product", res)
                setIndividualPet(res.data.results)
            })
            .catch(err=> console.log(err))
    },[])


    const deletePet = (e, petid)=> {
        console.log("trying to delete it", petid)
        axios.delete(`http://localhost:8000/api/pet/delete/${props.petid}`)
        .then(res =>{
            console.log("sent a delete request")
            console.log(res)
            setDeleteHit(!deleteHit)
                navigate("/")
            })
            .catch(err=> console.log(err))

    }
    return (
        <div className="card">
            
            <div>
                
                <h1 className="card-title">{individualPet.name}</h1>
                {individualPet==null? <h1>no matching pet found</h1>:
                <> 
                <p className="card-text">Type: {individualPet.type}</p>
                <p className="card-text">Description: {individualPet.description}</p>
                <p className="card-text">Skill 1: {individualPet.skill1}</p>
                <p className="card-text">Skill 2: {individualPet.skill2}</p>
                <p className="card-text">Skill 3: {individualPet.skill3}</p>

                <button className="btn-danger" onClick={(e)=> deletePet(e, individualPet._id)}>Adpot pet</button>
                

                </>}

                
            </div>
        </div>
    );
};


export default OnePet;