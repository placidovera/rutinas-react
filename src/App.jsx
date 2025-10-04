
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './elementos/ItemDetailContainer/ItemDetailContainer'
import ItemlistContainer from './elementos/ItemListContainer/ItemlistContainer'
import NavBar from './elementos/NavBar/NavBar'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
  <Routes>
  <Route path="/" element={<ItemlistContainer />} />
  <Route path="/item/:idItem" element={<ItemDetailContainer />} />
  <Route path="/categorias/:idCategoria" element={<ItemlistContainer />} />
</Routes>

    </BrowserRouter>
    </>
  )
}

export default App