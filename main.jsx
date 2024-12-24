import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// import './index.css'

function myApp(){
  return(
    <div>
      chai is ready
    </div>
  )
}
//👇 wrong syntax object


// const reactElement = {
//   type :  'a',            //type of element it is 'a' or 'p' etc
//   props:{
//       href: 'https://google.com',
//       target : '_blank'
//   },
//   children: 'click me to access google'
// }

 // 👇 right syntax object
// const anotherELement = (

//   <a href = "https://google.com" target = '_blank'>Visit google</a>

// )

// const anotheruser = "chai or react"
// //👇 React syntax

// const reactElement = React.createElement(
//   'a',  // para tag, or anchor tag etc
//   {href: 'https://google.com',target: '_blank'},    //
//   'click me to visit google',

//     anotheruser
// )


// createRoot(document.getElementById('root')).render(
// reactElement
// )