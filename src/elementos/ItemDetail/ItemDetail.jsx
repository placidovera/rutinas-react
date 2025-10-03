import "./ItemDetail.css"

const ItemDetail = ({ id, nombre, objetivo, metodo, semana }) => {
  return (
    <div className="item-detail">
      <h2>{nombre}</h2>
      <p><strong>Objetivo:</strong> {objetivo}</p>
      <p><strong>Método:</strong> {metodo}</p>

      {semana && semana.map((dia, index) => (
        <div key={index} className="dia-rutina">
          <h3>{dia.dia}</h3>

          {dia.bloques && dia.bloques.map((bloque, bIndex) => (
            <div key={bIndex}>
              <h4>{bloque.musculos.join(", ")}</h4>
              <table className="tabla-rutina">
                <thead>
                  <tr>
                    <th>Ejercicio</th>
                    <th>Series</th>
                    <th>Carga</th>
                  </tr>
                </thead>
                <tbody>
                  {bloque.ejercicios.map((ej, i) => (
                    <tr key={i}>
                      <td>{ej.nombre}</td>
                      <td>{ej.series}</td>
                      <td>{ej.carga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        </div>
      ))}
    </div>
  )
}

export default ItemDetail
