import { useState, useEffect } from 'react'

export default function HeroesList(api) {
  //2
  const [data, setHeroes] = useState([])
  const [error, setError] = useState(null)
  //3
  useEffect(() => {
    fetch(api)
    .then(response => {
      if(!response.ok) {
        console.log(response, 'ini response')
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
      console.log(error, 'ini error')
      setError(error)
    })
  }, [api])

  return [data, error]
}