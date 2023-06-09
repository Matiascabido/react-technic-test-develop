import { useState, useEffect } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_RANDOM_IMAGES = 'https://cataas.com/cat/says/'
const CAT_BASE_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    fetch(`${CAT_ENDPOINT_RANDOM_IMAGES}/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [])

  return (
    <main>
      <h1> App de Gatitos </h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img
        src={`${CAT_BASE_IMAGE_URL}${imageUrl}`} alt={
          `Image extracted using the first trhee words for ${fact}`
        }
                   />}
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img
          src={`${CAT_BASE_IMAGE_URL}${imageUrl}`} alt={
          `Image extracted using the first trhee words for ${fact}`
        }
                     />}
      </section>
    </main>
  )
}
