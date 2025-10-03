import Item from "../Item/Item";


const ItemList = ({ rutinas }) => {
  return (
    <div className="container">
      <div className="row">
        {rutinas.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
