import React, { useState, useEffect } from 'react'

import "./Resources.css"

import axios from "axios";

export const Resources = () => {

    const [resourceData, setResourceData] = useState(null)

    const fetchData = async() => {
        let tempData = {}
        await axios
            .get('https://reqres.in/api/unknown')
            .then((response) => {
                tempData = response.data.data;
                // console.log(response.data.data);
            })
            .catch((error) => console.log(error)) 

        setResourceData(tempData);
    }

    useEffect( () => {
        fetchData();
    }, [])

  return (
    <div className='body__resources-bg'>
        <div className='body__resources-container flex__center'>
                {resourceData?.map((entity, index) => {
                    return (
                        <div key={index} className='body__resources-entity'>
                            <h4>{entity.name} {entity.year}</h4>
                            <div style={{background: entity.color, height: '200px', width: '200px'}} />
                            <h6>{entity.pantone_value}</h6>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}
