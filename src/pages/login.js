import Head from 'next/head'
import React from 'react'
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";



const login = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Netflix SignIn</title>
    </Head>

    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width="128px"
              height="34px"
            />
          </div>
        </a>
      </div>
    </header>

    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <h1 className={styles.signinHeader}>Sign In</h1>

        <input
          type="text"
          placeholder="Email address"
          className={styles.emailInput}
         
        />

        {/* <p className={styles.userMsg}>{userMsg}</p> */}
      </div>
    </main>
  </div>
  )
}

export default login
