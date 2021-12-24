import ErrorAlert from "../Aditionals/Error";
import "./viewCard.css";

const ViewCard = ({ categorys, isFirstLoading }) => {
  const Cards = () => {
    return (
      <div className="card_box">
        <div className="gallery-container">
          {categorys.map((gif) => {
            return (
              <a key={gif.id} href={gif.url}>
                <img
                  className="gallery__Images"
                  src={gif.images?.downsized.url}
                  alt="gifs"
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        {isFirstLoading || categorys.length > 0 ? <Cards /> : <ErrorAlert />}
      </div>
    </>
  );
};

export default ViewCard;
