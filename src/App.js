import React, { useState } from 'react'
import axios from 'axios'


const App = () => {
  const [activity, setActivity] = useState([])

//hämta aktivitet från api
  const getActivity = () => {
    axios({
      url: "https://www.boredapi.com/api/activity/",
      method: 'GET'
    })
      .then(res => {
        setActivity(res.data.activity)
        console.log(res.data.activity)
      })
      .catch()
  }


  return (
    <div className="box">
      <h1 className="headtitle">Slumpad aktivitetsapplikation</h1>
      <h3 className="subtitle">Är du uttråkad så klicka på knappen nedanför</h3>
      <button className="btn" onClick={() => getActivity()}>
        Slumpa aktivitet
      </button>
      <h2 className="activity">{activity}</h2>
    </div>
  )
}

export default App