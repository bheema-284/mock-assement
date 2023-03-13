import React from 'react'
import Dashboard from '../Components/Dashboard'
import Navbar from '../Components/Navbar'
import SearchResults from '../Components/SearchResults'
import Sidebar from '../Components/Sidebar'

export default function AllRoutes() {
    return (
        <div>
            <Dashboard/>
            <Navbar/>
            <SearchResults/>
            <Sidebar/>
        </div>
    )
}