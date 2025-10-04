import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ id, metodo, objetivo, nombre }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="col-dos h-100 text-center">
        <h2>{nombre}</h2>
        <p>{objetivo}</p>
        <p>{metodo}</p>
        <Link to={`/item/${id}`}>
          <button>apretar</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
