import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import '../index.css'
import SearchResults from "./SearchResults";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const[filter,setFilter]=useState("in");
  const[search,setSearch]=useState("")


  useEffect(() => {
    axios.get("http://localhost:8080/news").then((data) => {
      setData(data?.data);
    });
  }, []);  
  
  const onFilterChange =(el)=>{
    setFilter(el)
  }
  const onSearch = (el)=>{
    setSearch(el.target.velue)
  }
  const searchData = (item)=>{
   return item?.filter(el=>el.category.toLowerCase()  === search)
  }
  return (
    <div>
      <Navbar 
      onSearch={onSearch}
      />
     {search == "" && <h3>Top headlines </h3>}
      <div className = "dashboard_news" >      
        <Sidebar 
        onFilterChange={onFilterChange}
        />
        {search == "" ?
          <div style = {{textAlign: "left", marginBottom: "30px",marginLeft:'100px'}}  >
          {
            data?.map((item, i) => 
            <div key={i}>
            {item.country === filter  && search == "" &&
            <>
               <h5 className = "name" >{item.name} </h5>
               <div className = "description" >{item.description} </div>
              </>
            }
          </div>           
          )}          
        </div>
        :
        <SearchResults 
        search={search}
        data={searchData(data)}
        
        />}
      </div>
    </div>
  )
}