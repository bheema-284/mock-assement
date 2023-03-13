import React from 'react'
import Dashboard from '../Components/Dashboard'
import SearchResults from '../Components/SearchResults'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function AllRoutes(props) {
    return (
        <div>                    
            <BrowserRouter>
            <Routes>
        <Route path="/" element={ <Dashboard/> }/>
        <Route path="/search" element={ <SearchResults  /> }/>
      </Routes>
      </BrowserRouter>
        </div>
    )
}