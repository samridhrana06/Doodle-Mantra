import './App.css'
import Navbar from './Navbar'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import 'antd/dist/antd.css'; // Import Ant Design styles


function App() {
  return (
  <>  
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  </>
  )
}

export default App


