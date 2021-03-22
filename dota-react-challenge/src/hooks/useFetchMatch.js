import { useState, useEffect } from 'react'

export default function useFetchMatch(id) {
  const [matchUp, setMatchUp] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.opendota.com/api/heroes/${id}/matchups`)
    .then(response => {
      if(!response.ok) {
        setError('Error not Found')
      } else {
        return response.json()
      }
    })
    .then(matchUp => {
      setMatchUp(matchUp)
    })
    .catch(error => {
      setError(error)
    })
  }, [id])

  return [matchUp, loading]
}