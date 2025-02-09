import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get('http://localhost:8080/api/books')
            setData(response.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
  return (
    <div>
        home
      
    </div>
  )
}

export default Home
