import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { useEffect, useState } from 'react'
import useContentful from '../../useContentful'
import { AnimalCard } from "../../Components/AnimalCard/AnimalCard"
import styles from "./Animals.module.scss"
export const Animals = () => {
  const [animals, setAnimals] = useState([])
  const { getAnimals } = useContentful()

  useEffect(() => {
    getAnimals().then((response) => setAnimals(response))
  })
  return (
    <ContentWrapper title="Animals">
      <div className={styles.wrapper}>
        {animals && animals.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
    </ContentWrapper>
  )
}
