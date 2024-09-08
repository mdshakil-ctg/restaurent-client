import Button from './../Pages/Shared/Button/Button';
const ShopCard = ({ data }) => {
  const { name, image, recipe, price } = data;

  return (
    <div className="card bg-base-100 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="bg-slate-700 text-white p-1 rounded-lg absolute top-2 right-2 text-sm font-semibold ">$ {price}</div>
    </h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <Button info={"add to cart"}></Button>
    </div>
  </div>
</div>
  );
};

export default ShopCard;
