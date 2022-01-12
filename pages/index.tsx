import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { CryptoData } from '../type'
import styles from '../styles/Home.module.scss'
import TestCard from '../components/TestCard'
import Layout from '../components/Layout'


const Home:NextPage<{data: CryptoData[]}> = ({data}) => {
  console.log(data)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Bitdash
        </h1>
        <div className={styles.cardContainer}>
          {data.map((crypto: CryptoData) => (
          <TestCard key={crypto.id} crypto={crypto}/>
        ))}
        </div>
        
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr')
  const data: CryptoData[] = await res.json()

  return {
    props: {
      data
    }
  }
}
