import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css';
import SignIn from './Components/SignIn';
import Menu from './Components/Menu';
import { useEffect, useState } from 'react';
import Home from './Components/Home';

function App() {

  const [data, setData] = useState([
    { location: 'London', locationColor: 'red', description: 'kjash dgftew klsbc,mdsa', friends: ['Gilad', 'Nadia'] },
    { location: 'France', locationColor: 'blue', description: 'nncidow kjdoc,mdsa', friends: ['Gilad', 'Yalin'] },
    { location: 'Tel Aviv', locationColor: 'green', description: 'lljdhjdhdhd cmkdbc,mdsa', friends: ['Milen', 'Nadia'] }
  ])

  const nav = useNavigate()
  const location = useLocation()
  const [btnsAllFlag, setAllBtnFlag] = useState(true)
  const [btnsLoginFlag, setLoginBtnFlag] = useState(false)

  //functions

  const checkUser = (u, p) => {
    // debugger
    if (u === '1' || p === '1') {
      nav('/home')
    }
    else alert('enter user and password!')
  }


  const allData = {
    btnsAllFlag: btnsAllFlag,
    setAllBtnFlag: setAllBtnFlag,
    btnsLoginFlag: btnsLoginFlag,
    setLoginBtnFlag: setLoginBtnFlag,
    checkUser: checkUser,
    data: data,
    setData: setData
  }


  // check buttons state
  useEffect(() => {

    if (location.pathname !== '/') {
      setAllBtnFlag(false);
      setLoginBtnFlag(true)
    }
    if (location.pathname === '/') {
      setAllBtnFlag(true);
      setLoginBtnFlag(false)
    }


  }, [location])



  return (

    <div className="App">
      <div className='menuAppDiv'>
        <Menu allData={allData} />
      </div>
      <div className='routesDiv'>
        <Routes>
          <Route path='/' element={<SignIn allData={allData} />} />
          <Route path='/home' element={<Home allData={allData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
