import * as React from "react"
import { useState } from "react"
import "./Orders/Orders.css"

export default function OrderSearch(props) {
    const [term, setTerm] = useState("")

    const handleChange = (e) => {
        props.setCopy([...props.purchases])
        setTerm(e.target.value)
        props.setCopy((arr)=>arr.filter((item)=>{return item.email.toLowerCase().includes(e.target.value)}))
    }

    return(
        <div className="order-search-bar">
            <form >
                <div className="order-search" >
                    <input id="order-search-input" type="text" value={term} placeholder="Type email address..." 
                    onChange={handleChange} required />
                </div>
            </form>
        </div>
    )
}