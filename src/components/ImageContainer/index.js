import "./style.css";
export default function ImageContainer({data}){
    return (
        data && data.photos && data.photos.length > 0 ? 
        <div className="grid-container">

            {data.photos.map((photo)=>{
                return (
                  <div className="photo" key={photo.id}>
                    <img src={photo.src.large} alt={photo.alt} />
                  </div>
                );
            })}
        </div> 
        : null 
    );
}