import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css"
import Head from "next/head";
import Banner from "../../components/banner"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
      </Head>
      <h1>Netflix</h1>

      <Banner 
      title="Spiderman: No Way Home"
      subTitle="A bad movie"
      imgUrl="/static/spiderman.jpg"
      />
{/* 

      <NavBar/>

      
      <Card/> */}

    </div>
  );
}
