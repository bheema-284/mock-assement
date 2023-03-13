import '../index.css'
export default function SearchResults(props) {
  const{data,search}=props
  console.log("data",data)
  return (
    <div>
        <h3>Top headlines for {search}</h3>
        <div className = "news_cont" >
            {/* Map the below div against your data */}

            <div style = {{textAlign: "left", marginBottom: "30px"}}  >
            {
         data &&  data.map((item, i) => <>           
          <h5 className = "name" >{item.name} </h5>
          <div className = "description" >{item.description} </div>
          </>           
          )}
            </div>
        </div>
    </div>
  )
}
