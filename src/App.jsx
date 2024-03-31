import { useEffect, useState, useRef } from 'react'
import './App.css'
import Saved from './components/Saved'
import Navbar from './components/navbar'
import Input from './components/Input'
import Footer from './components/Footer'

import { UserContext } from './Usercontext'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  
  const [data, setdata] = useState(() => {
    const items = JSON.parse(localStorage.getItem('datas'));
    return items ? items : [];
  });

  const Disabled = useRef(true)
  const [temp, settemp] = useState(() => {
    const items = JSON.parse(localStorage.getItem('temp'));
    return items ? items : [];
  });

  useEffect(() => {
    toast("Message: Your passwords are secure and stored locally on your device, ensuring maximum privacy and security.")
  }, []);
  return (
    <>
      <div className=' min-h-screen bg-cyan-500' >

        <UserContext.Provider value={{ data, setdata, temp, settemp, Disabled }}>
          <Navbar />
          <Input />
          <Saved />
          <Footer />
          <ToastContainer />
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
