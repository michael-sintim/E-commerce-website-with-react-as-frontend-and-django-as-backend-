import { Route,Routes } from 'react-router'
import Homepage from './pages/Homepage'
import OrdersPage from './pages/OrdersPage'
import Checkout from './pages/Checkout'
import Tracking from './pages/Tracking'
import './App.css'
import './index.css'

function App() {

  return (
    <>
    <Routes>
     <Route index element={<Homepage/>} /> 
     <Route path='checkout' element={<Checkout/>} />
     <Route path='orders' element={<OrdersPage/>} />
     <Route path='tracking' element={<Tracking/>} />
     

    
    </Routes>
        </>
  )
}
//path='/' or index
export default App
