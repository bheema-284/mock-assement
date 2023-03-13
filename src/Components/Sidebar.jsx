import '../index.css'
export default function Sidebar(props) {
const{onFilterChange}=props
    return (
        <div className = "sidebar" >
            <div>
            <div onClick={()=>onFilterChange("in")}> India (in) </div>
            <div onClick={()=>onFilterChange("us")}> Usa  (us) </div>
            <div onClick={()=>onFilterChange("ca")}> Canada (ca) </div>
            <div onClick={()=>onFilterChange("au")}> Australia (au) </div>
            <div onClick={()=>onFilterChange("pk")}> Pakistan (pk) </div>
            </div>
            <hr />
        </div>
    )
}
