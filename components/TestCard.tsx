import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import type { CryptoData } from '../type'
import type { NextPage } from 'next'

const TestCard:NextPage<{crypto: CryptoData}> = ({crypto}) => {
    return (
        
        <div className={styles.card} key={crypto.id}>
              <Image
                src={crypto.image}
                alt={crypto.name}
                width={100}
                height={100}
              />
              <h2>{crypto.name}</h2> 
              <p>PRICE : {crypto.current_price.toLocaleString("en-IN", {style:'currency', currency: 'INR'})}</p> 
          </div>
    )
}

export default TestCard
