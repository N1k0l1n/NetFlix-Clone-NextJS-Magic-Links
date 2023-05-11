import React from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css'
import clsx from 'classnames'

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();

  const video = {
    title: 'isdgisrfdgis',
    publishTime : "1990-01-01",
    description: "ghiidrhfgidghighdifhgkidfhgdki",
    channelTitle: "ihgishgfisdhf",
    viewCount: 331361,
  }


  const {title, publishTime, description, channelTitle, viewCount} = video;

  return (
    <div className={styles.container}>
        <Modal
          isOpen={true}
          contentLabel="Watch the video"
          className={styles.modal}
          onRequestClose={() => router.back()}
          overlayClassName={styles.overlay}
        >
            <iframe 
                id="ytplayer"
                type="text/html"
                className={styles.videoPlayer}
                width="100%"
                height={360}
                src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&controls=0&rel=1`}
                border={0}
                allowFullScreen
                >
            </iframe>
            <div className={styles.modalBody}>
                <div className={styles.modalBodyContent}>
                    <div className={styles.col1}>
                        <p className={styles.publishTime}>{publishTime}</p>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.description}>{description}</p>
                    </div>
                    <div className={styles.col2}>
                    <p className={clsx (styles.subText, styles.subTextWrapper)}>
                        <span className={styles.textColor}>Cast: </span> 
                        <span className={styles.channelTitle}>{channelTitle}</span>    
                    </p>
                    <p className={clsx (styles.subText, styles.subTextWrapper)}>
                        <span className={styles.textColor}>View Count: </span> 
                        <span className={styles.channelTitle}>{viewCount}</span>    
                    </p>
                    </div>
                </div>
            </div>
        </Modal>
      </div>
  );
};

export default Video;
