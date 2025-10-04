import { useEffect, useState } from "react"
import { getMisRutinas } from "../../baseDeDatos"
import  ItemList  from "../ItemList/ItemList"
import "./ItemListContainer.css"


const ItemlistContainer = () => {
const [rutinas,setRutinas]= useState([])

useEffect(()=>{
  getMisRutinas()
  .then(res => setRutinas(res))
  .catch(error => console.log(error))

},[])

  return (
    <div>
        <h1>Rutinas</h1>
        <ItemList rutinas={rutinas}/>
    </div>
  )
}

export default ItemlistContainer