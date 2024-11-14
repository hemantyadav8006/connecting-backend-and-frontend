import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get('/api/data')
    .then((response) => {
      setdata(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })


  return (
    <>
      <h1>Full Stack</h1>
      <p>Data: {data.length}</p>

      {
        data.map((data, index) => (
          <div key={data._id}>
            <p>IP: {data.ip}</p>
            <p>City: {data.city}</p>
            <p>Created_at: {data.created_at}</p>
            <p>AnonymityLevel: {data.anonymityLevel}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
