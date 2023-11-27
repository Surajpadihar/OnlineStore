import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import {Provider} from 'react-redux'
import {RouterProvider,createBrowserRouter,Route,createRoutesFromElements} from 'react-router-dom'
import Signup from './components/Auth/SignUp.jsx'
import Login from './components/Auth/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App/>}>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <React.StrictMode>
     <RouterProvider router = {router}/>
  </React.StrictMode> 

  </Provider>
)
