import { useEffect, useState } from 'react'
import useContentful from '../../useContentful'
import { AuthorCard } from '../../Components/AuthorCard/AuthorCard'

export const Home = () => {
    const [authors, setAuthors] = useState([])
    const { getAuthors } = useContentful()
  
    useEffect(() => {
      getAuthors().then((response) => setAuthors(response))
    })

  return (
    <div>
        {authors && authors.map((author, index) => (
          <AuthorCard key={index} author={author} />
        ))}
    </div>
  )
}
