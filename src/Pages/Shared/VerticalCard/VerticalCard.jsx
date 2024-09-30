import Button from "../Button/Button";


const VerticalCard = ({data}) => {
    const {name, image, details, recipe} = data;
    (data);
  return (
    <div className="card glass">
      <figure>
        <img
        className="w-full h-full object-cover"
          src={image}
          alt="menu image!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details ? details : recipe}</p>
        <div className="card-actions justify-end">
          <Button info={'view more'}></Button>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
