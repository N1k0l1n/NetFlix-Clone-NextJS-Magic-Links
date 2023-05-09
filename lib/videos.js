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
      console.log({ id: item.id });
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
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