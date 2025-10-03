import "./Item.css"

const Item = ({metodo,objetivo,nombre}) => {
  return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="col-dos h-100 text-center">
        <h2>{nombre}</h2>
        <p>{objetivo}</p>
        <p>{metodo}</p>
    </div>
    </div>
  )
}

export default Item