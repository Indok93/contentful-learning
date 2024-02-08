import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { useEffect, useState } from 'react'
import useContentful from '../../useContentful'
import { AuthorCard } from '../../Components/AuthorCard/AuthorCard'

export const Celebrities = () => {
    const [authors, setAuthors] = useState([])
    const { getAuthors } = useContentful()
  
    useEffect(() => {
      getAuthors().then((response) => setAuthors(response))
    })

  return (
    <ContentWrapper title="Celebrities">
        {authors && authors.map((author, index) => (
          <AuthorCard key={index} author={author} />
        ))}
    </ContentWrapper>
  )
}