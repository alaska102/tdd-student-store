import * as React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import "./Orders.css"
import { Link } from "react-router-dom"
import OrderSearch from "../OrderSearch"

export default function Orders(props) {
    const [purchases, setPurchases] = useState([])
    const [copy, setCopy] = useState([])
    const [error, setError] = useState()

    async function getPurchases(){
        try{
            let json = await axios.get('http://localhost:3001/orders')
            console.log(json)
            setPurchases(json.data.purchases)
            setCopy(json.data.purchases)
          }
        catch(err){
          setError(err)
        }
      }

  useEffect(() => {
    getPurchases()
  }, []);

  return (
    <div className="orders">
        <OrderSearch purchases={purchases} copy={copy} setCopy={setCopy}/>
        {copy.map((purchase) => {return(
        <Link to={"/orders/"+purchase.id} className="purchase">
            <p>{purchase.name}</p>
            <p>{purchase.email}</p>
            <p>${purchase.total}</p>
            <p>{purchase.createdAt}</p>
        </Link>)})}
    </div>
  )
}