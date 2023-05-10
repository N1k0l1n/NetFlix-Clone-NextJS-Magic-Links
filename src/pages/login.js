import Head from "next/head";
import React , {useState} from "react";
import Image from "next/legacy/image";
import styles from "../styles/Login.module.css";
import { useRouter } from 'next/router';
import {magic} from '../../lib/magic-client'


const login = () => {

  const [userMsg, setuserMsg] = useState("")
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleOnChangeEmail = (e) =>{
    setuserMsg("")
    console.log("event", e);
    const email = e.target.value;
    setEmail(email);
  }

  const handleLoginWithEmail = async(e) =>{
    if(email){
      if(email === "nikolinandoni80@gmail.com "){

        try{
          const didToken = await magic.auth.loginWithMagicLink({
            email,
          });
          console.log({didToken})
        }catch(error){
          //Handle Error if required
          console.error("Something went Wrong", error)
        }
        router.push('/')
      }else{
        setuserMsg("Something went wrong logging in");
      }
    }else{
      setuserMsg("Enter a valid email address")
    }
  };

  
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
            onChange={handleOnChangeEmail}
          />
          <p className={styles.userMsg}>{userMsg}</p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default login;
 