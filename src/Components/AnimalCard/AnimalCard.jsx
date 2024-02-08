import styles from "./AnimalCard.module.scss"

export const AnimalCard = ({animal}) => {

  return (
    <div className={styles.gridItem} style={{ backgroundImage: `url(${animal.avatar.file.url})` }}>
      <h2 className={styles.title}>{animal.name}</h2>
      <p className={styles.description}>{animal.description}</p>
    </div>
  )
}