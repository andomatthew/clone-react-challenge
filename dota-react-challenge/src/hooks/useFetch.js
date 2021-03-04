import { useState, useEffect } from 'react'

export default function useFetch() {
  //2
  const [data, setHeroes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  //3
  useEffect(() => {
    setLoading(true)
    fetch('https://api.opendota.com/api/heroes')
    .then(response => {
      if(!response.ok) {
        setError('Error Not Found')
      }
      else {
        return response.json()
      }
    })
    .then(data => {
      setHeroes(data)
    })
    .catch(error => {
      setError(error)
    })
    .finally(_ => {
      console.log('masuk finally')
      setLoading(false)
    })
  }, [])

  return [data, error, loading]
}