import React, { useEffect } from 'react'
import { useState } from 'react'
import RestaurantCards from './RestaurantCards'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RestaureantList() {
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
    },[])
    return (
      <Row>{
        allRestaureants.map(item=> (
        
          // <h1>{item.name}</h1>
        <Col>
            <RestaurantCards restaurant={item} />
        </Col>
        ))              
      }
    </Row>
  )
}

export default RestaureantList