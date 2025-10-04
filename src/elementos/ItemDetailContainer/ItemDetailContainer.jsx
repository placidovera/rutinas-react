import { useEffect, useState } from "react"
import { getRutinaElegida } from "../../baseDeDatos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [rutina, setRutina] = useState(null)
  const {idItem}=useParams()

  useEffect(() => {
    getRutinaElegida(idItem)
      .then(res => setRutina(res))
      .catch(error => console.log(error))
  }, [idItem])

  return (
    <div>
      {rutina ? <ItemDetail {...rutina} /> : <p>Cargando rutina...</p>}
    </div>
  )
}

export default ItemDetailContainer
