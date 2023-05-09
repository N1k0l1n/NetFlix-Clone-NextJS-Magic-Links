import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Banner from "../../components/banner/banner";
import Navbar from "../../components/nav/navbar";
import Card from "../../components/card/card";
import SectionCards from "../../components/card/section-cards";
import { getPopularVideos, getVideos } from "../../lib/videos";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("Productivity");
  const travelVideos = await getVideos("travel");
  const popularVideos = await getPopularVideos();
  return { props: { disneyVideos, productivityVideos, travelVideos, popularVideos } };
}

export default function Home({ disneyVideos, productivityVideos, travelVideos, popularVideos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Navbar username="user23@new.com" />
        <Banner
          videoId="4zH5iYM4wJo"
          title="Spiderman No Way Home"
          subTitle="a bad movie"
          imgUrl="/static/spiderman.jpg"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" size="large" videos={disneyVideos} />
          <SectionCards
            title="Watch it again"
            size="small"
            videos={disneyVideos}
          />
          <SectionCards title="Travel" size="small" videos={travelVideos} />
          <SectionCards title="Productivity" size="medium" videos={productivityVideos} />
          <SectionCards title="Popular" size="small" videos={popularVideos} />
        </div>
      </div>
    </div>
  );
}
