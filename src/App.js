import './App.css';
import Navigate from './navigation';
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import axios from "axios";
import { API_URI } from "./constants/apiUrl.constant";

import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from './state';

function App() {

  const state = useSelector(s => s)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onBoarding, setIsOnBoarding] = useState(true)


  const dispatch = useDispatch()

  const { setUser } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    let uid = Cookies.get('uid');

    if (uid != null) {
      axios.get(`${API_URI}/auth/getUser/${uid}`)
        .then(res => {
          console.log(res.data)
          setUser(res.data.data)
        }).catch(err => {
          console.log(err)
        })
    }

  }, [])

  useEffect(() => {
    console.log("Redux State", state)
    if (state.user != null) {
      setIsLoggedIn(true)
      const userId = state.user.id;
      if (userId === null) {
        setIsOnBoarding(true)
      } else {
        setIsOnBoarding(false)
      }
    }
    else {
      setIsLoggedIn(false)
      setIsOnBoarding(false)
    }
  }, [state])

  return (
    <div className="App">
      <Navigate isLoggedIn={isLoggedIn} onBoarding={onBoarding} />
      <Toaster position="top-right"
        toastOptions={{
          style: {
            width: "20vw",
            border: '1px solid #000000',
            padding: '16px',
            color: '#000000',
            duration: 10000,
          },
        }} />
    </div>
  );
}

export default App;
