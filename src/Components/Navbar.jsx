import React from 'react'
import '../index.css'
export default function Navbar(props) {
    const{onSearch}=props
    return (
        <div className="container">
            <div > 
            <a className='dashboad' href='/'>Go To Dashboard!</a>
             </div>
            <input 
                type = "text" 
                placeholder = "Search by category" 
                className = "search_box"
                onChange={onSearch}
            />
        </div>
    )
}
