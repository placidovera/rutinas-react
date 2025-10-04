import { useEffect, useState } from "react"
import { getMisRutinas ,getCategoria} from "../../baseDeDatos"
import  ItemList  from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

const ItemlistContainer = () => {
const [rutinas,setRutinas]= useState([])
const {idCategoria}= useParams()

useEffect(()=>{
const funcionRutinas = idCategoria ? getCategoria : getMisRutinas;
  funcionRutinas(idCategoria)
  .then(res => setRutinas(res))
  .catch(error => console.log(error))

},[idCategoria])

  return (
    <div>
        <h1>Rutinas</h1>
        <ItemList rutinas={rutinas}/>
    </div>
  )
}

export default ItemlistContainer