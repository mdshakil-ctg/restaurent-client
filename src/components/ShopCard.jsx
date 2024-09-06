import Button from './../Pages/Shared/Button/Button';
const ShopCard = ({ data }) => {
  const { name, image, recipe, price } = data;

  return (
    <div className="card glass">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>{price}</p>
        <div className="card-actions justify-center">
          <Button info={'add to cart'} ></Button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
