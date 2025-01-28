import styles from './style.module.scss'

interface SavingsProps {
  number: number
  name: string
  rate?: number
  contents: string
  onClick?: () => void
}

const Savings = ({contents, rate, number, name, onClick}: SavingsProps) => {
  return <main className={styles.wrapper} onClick={onClick}>
    <section className={styles.headline}>
      <div className={styles.order}>{String(number).padStart(2, '0')}</div>
      <div className={styles.name}>{name}</div>
      {Boolean(rate) && <div className={styles.rate}>최고 연 {rate?.toFixed(1)}%</div>}
    </section>
    {contents.length > 0 && <section className={styles.sublime}>{contents}</section>}
  </main>
};

export default Savings;