import type { NextPage } from "next"
import Head from "next/head"
import styles from '../styles/Layout.module.scss'
import Navbar from "./Navbar"

const Layout:NextPage<{children}> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bitdash</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout