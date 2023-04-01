import { useState, useEffect } from 'react'

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fact))
      .catch()
  }, [])
  return (
    <main>
      <h1> App de Gatitos </h1>
      <p>{fact}</p>
    </main>
  )
}
