import React from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css'
import clsx from 'classnames'
import {getYoutubeVideoById} from "../../../lib/videos"
import Navbar from "../../../components/nav/navbar";

Modal.setAppElement("#__next");

export async function getStaticProps(context){

    //data to fetch from api
     const videoId = context.params.videoId;

    const videoArray = await getYoutubeVideoById(videoId);

return{
    props:{
        video: videoArray.length > 0 ? videoArray[0] : {},
    },

    revalidate : 10,
}
}

export async function getStaticPaths() {
    const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];
    const paths = listOfVideos.map((videoId) => ({
      params: { videoId },
    }));
  
    return { paths, fallback: "blocking" };
  }

const Video = ({video}) => {
  const router = useRouter();
  
  const {title, publishTime, description, channelTitle, statistics: { viewCount } = { viewCount: 0 }, } = video;

  return (
    <div className={styles.container}>
        <Navbar/>
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
