import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './assets/index.css'
// import Store from './store/reducers/store'

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>,
)
// Store.subscribe(() => {
//   root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//   )
// })
