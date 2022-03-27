import React, { useState, useEffect } from 'react'

import "./Team.css"

import axios from "axios";


export const Team = () => {

    const [teamData, setTeamData] = useState(null)

    const fetchData = async() => {
        let tempData = {}
        await axios
            .get('https://reqres.in/api/users?page=2')
            .then((response) => {
                tempData = response.data.data;
            })
            .catch((error) => console.log(error)) 

        setTeamData(tempData);
    }

    useEffect( () => {
        fetchData();
    }, [])


    return (
        <div className='body__team-bg'>
            <div className='body__team-container flex__center'>
                {teamData?.map((entity, index) => {
                    return (
                        <div key={index} className='body__team-entity'>
                            <h4>{entity.first_name} {entity.last_name}</h4>
                            <img src={entity.avatar} alt="Photo" />
                            <h6>{entity.email}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
