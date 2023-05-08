import Card from "./card";
import Link from "next/link";
import clsx from "classnames";
import styles from "./section-cards.module.css";

const SectionCards = (props) => {
  const {
    title,
    imgUrl,
    videos = [],
    size,
    shouldWrap = false,
    shouldScale,
  } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, id) => {
          return <Card id={id} key={id} imgUrl={video.imgUrl} size={size} />;
        })}
      </div>  
    </section>
  );
};

export default SectionCards;
