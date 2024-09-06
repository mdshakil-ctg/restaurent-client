import "./ShowCaseCard.css"

const ShowCaseCard = ({imgUrl, details, name}) => {

    const divStyle = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "572px",
      };


    return (
        <div style={divStyle} className="background-section max-w-screen-md md:max-w-screen-xl mx-auto mb-24">
      <div className="overlay">
        <h1 className="">{name}</h1>
        <p>
          {details}
        </p>
      </div>
    </div>
    );
};

export default ShowCaseCard;