
import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import Restoperation from "./Restoperation";
import Restreview from "./Restreview";
function Viewresturent() {
    const params = useParams()
    console.log(params.id);
   
    // for hold value 
    const [allRestaureants,setRestaureants]=useState([]) // array is using for json data tranfer to this
 //Function to api to get all restaureants item from resturenat.json
    const getRestaurants = async () => {
        await fetch('/restaurants.json')
          .then((data) => {
            data.json()
              .then((result) => {
                setRestaureants(result.restaurants);//it coverys arry
                // console.log(result);
            })
          
        })
  }
  //  console.log(allRestaureants);
    useEffect(() => {
   getRestaurants()
    }, [])
        
        console.log(allRestaureants);
       
        const viewrest = allRestaureants.find(item=>item.id == params.id)
        console.log(viewrest);
        return (
          <>
            {viewrest ? (
              <Row>
                <Col>
                  <Image src={viewrest.photograph} fluid />
                </Col>
                <Col>
                  <p>ID:{viewrest.id}</p>
                  <h3> Name:{viewrest.name}</h3>
                  <h5>Neighborhood: {viewrest.neighborhood}</h5>
                  <h5>Address: {viewrest.address}</h5>
                  <h5>Cuisine Type: {viewrest.cuisine_type}</h5>
                            <Restoperation operate={viewrest.operating_hours} />
                            <Restreview review={viewrest.reviews}/>
                </Col>
              </Row>
            ) : (
              "null"
            )}
          </>
        );
}

export default Viewresturent