import Link from 'next/link'
import styles from './NotFound.module.css'

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>404 - Not Found</h2>
      <p className={styles.message}>Could not find the requested resource.</p>
      <Link href="/" className={styles.link}>
       Return Home
      </Link>
    </div>
  )
}

export default NotFound
