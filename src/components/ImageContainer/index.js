import "./style.css";
export default function ImageContainer({ data, type }) {
  console.log(data);
  let content = "";
  if (type === "Photos" && data && data.photos && data.photos.length > 0) {
    content =
      (
        <div className="grid-container">
          {data.photos.map((photo) => {
            return (
              <div className="photo" key={photo.id}>
                <img src={photo.src.large} alt={photo.alt} />
              </div>
            );
          })}
        </div>
      )
  }else if (type === "Videos" && data && data.videos && data.videos.length > 0) {
    content = (
      <div className="grid-container">
        {data.videos.map((video) => {
          return (
            <div className="Videos" key={video.id}>
              <video controls>
                <source src={video.video_files[0].link} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    );
  }

  return content;
}
