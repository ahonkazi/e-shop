import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Auth, HomePage, ProductDetails, SearchResult } from './routes/route'
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product' element={<ProductDetails />} />
      <Route path='/search' element={<SearchResult />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  )
}

export default App
