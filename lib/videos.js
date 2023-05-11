import videoData from "../data/videos.json";

//Mappin Video object, bcs all the data from json is not needed
export const getCommonVideos = async (url) => {
  //const YOUTUBE_API_KEY = process.env.API_KEY;
  try {
    const BASE_URL = "youtube.googleapis.com/youtube/v3";
    const YOUTUBE_API_KEY = "AIzaSyBeY8mqAZwnCI1LJZzm_s0qVCDFcTUXCB4";
    const response = await fetch(
      `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
    );

    const data = await response.json();

    if (data?.error) {
      console.error("Utube Api Error", data.error);
      return [];
    }

    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id;
      const snippet = item.snippet;
      return {
        title: snippet?.title,
        imgUrl: snippet.thumbnails.high.url,
        id,
        description : snippet.description,
        publishTime : snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        statistics: item.statistics ? item.statistics : {viewCount:0},
      };
    });
  } catch (error) {
    console.error("Something Went Worng With Video Library", error);
    return [];
  }
};

export const getVideos = (searchQuery) => {
  const URL = `search?part=snippet%20&q=${searchQuery}`;
  return getCommonVideos(URL);
};

export const getPopularVideos = () =>{
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`;
  return getCommonVideos(URL);
}

export const getYoutubeVideoById = (videoId) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
  return getCommonVideos(URL);
};