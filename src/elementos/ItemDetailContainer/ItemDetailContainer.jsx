import { useEffect, useState } from "react"
import { getRutinaElegida } from "../../baseDeDatos"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [rutina, setRutina] = useState(null)

  useEffect(() => {
    getRutinaElegida(2)
      .then(res => setRutina(res))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      {rutina ? <ItemDetail {...rutina} /> : <p>Cargando rutina...</p>}
    </div>
  )
}

export default ItemDetailContainer
