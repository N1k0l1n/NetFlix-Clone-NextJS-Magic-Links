import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css"
import Head from "next/head";
import Banner from "../../components/banner/banner"
import Navbar from "../../components/nav/navbar";
import Card from "../../components/card/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
      </Head>
      
      <Navbar username="user@23"/>
      <Banner 
      title="Spiderman: No Way Home"
      subTitle="A bad movie"
      imgUrl="/static/spiderman.jpg"
      />

      <Card imgUrl="/static/spiderman.jpg" size="large"/>
      <Card imgUrl="/static/spiderman.jpg" size="medium"/>
      <Card imgUrl="/static/spiderman.jpg" size="small"/>

    </div>
  );
}
