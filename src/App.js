import './App.css';
import Navigate from './navigation';
import Cookies from 'js-cookie'

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import axios from "axios";
import { API_URI } from "./constants/apiUrl.constant";

import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from './state';

function App() {

  const state = useSelector(s=>s)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const dispatch = useDispatch()

  const { setUser } = bindActionCreators(actionCreators, dispatch);

  useEffect(()=>{
    let uid = Cookies.get('uid');
  
    if(uid != null){
      axios.get(`${API_URI}/auth/getUser/${uid}`)
        .then(res=>{
          console.log(res.data)
          setUser(res.data.data)
        }).catch(err=>{
          console.log(err)
        })
    }

  },[])

  useEffect(()=>{
    console.log("Redux State",state)
    if(state.user != null){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  },[state])

  return (
    <div className="App">
      <Navigate isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
