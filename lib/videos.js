import videoData from "../data/videos.json";



//Mappin Video object, bcs all the data from json is not needed  
export const getVideos = async (searchQuery) => {

  const YOUTUBE_API_KEY = process.env.API_KEY;

  
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet%20&maxResults=25&q=${searchQuery}&key=AIzaSyBeY8mqAZwnCI1LJZzm_s0qVCDFcTUXCB4`
  );

 const data = await response.json();

  return data?.items.map((item) =>{
    return{
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: item?.id?.videoId,
    }
  });
};
