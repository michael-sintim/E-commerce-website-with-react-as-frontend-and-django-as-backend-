import { Route,Routes } from 'react-router'
import Homepage from './pages/Homepage'
import './App.css'

function App() {

  return (
    <>
    <Routes>
     <Route index element={<Homepage/>} /> 
     <Route path='checkout' element={<Homepage/>} />

    
    </Routes>
        </>
  )
}
//path='/' or index
export default App
