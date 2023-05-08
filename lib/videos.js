import videoData from "../data/videos.json";

//Mappin Video object, bcs all the data from json is not needed  
export const getVideos = () => {
  return videoData.items.map((item) =>{
    return{
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: item?.id?.videoId,
    }
  });
};
