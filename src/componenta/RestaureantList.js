import React, { useEffect } from 'react'
import { useState } from 'react'
import RestaurantCards from './RestaurantCards'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RestaurantListAction } from '../Action/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';
function RestaureantList() {
    // for hold value 
    const [allRestaureants,setRestaureants]=useState([]) // array is using for json data tranfer to this
 //Function to api to get all restaureants item from resturenat.json
  //   const getRestaurants = async () => {
  //       await fetch('/restaurants.json')
  //         .then((data) => {
  //           data.json()
  //             .then((result) => {
  //               setRestaureants(result.restaurants);//it coverys arry
  //               console.log(result);
  //           })
          
  //       })
  // }
  const dispatch = useDispatch()
  const result = useSelector(state => state.restaurantReducer)
  console.log(result);
  const {restaurantList}=result

  //  console.log(allRestaureants);
    useEffect(() => {
      // getRestaurants()
     dispatch(RestaurantListAction())
    },[])
    return (
      <Row>
        {
          restaurantList.map((item) => (
          // <h1>{item.name}</h1>
          <Col sm={12} md={6} lg={4} xl={3}>
            <RestaurantCards restaurant={item} />
          </Col>
        ))}
      </Row>
    );
}

export default RestaureantList