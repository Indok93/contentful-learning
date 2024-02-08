import styles from "./AuthorCard.module.scss"

export const AuthorCard = ({author}) => {
  return (
    <div className={styles.wrapper}>
        <img src={author.avatar.file.url} alt={author.name} />
        <h2>{author.name}</h2>
        <p>{author.description}</p>
    </div>
  )
}
