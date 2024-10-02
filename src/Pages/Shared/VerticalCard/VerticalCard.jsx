import Button from "../Button/Button";
import "./VerticalCard.css"; // Assuming you put the CSS in this file

const VerticalCard = ({ data }) => {
  const { name, image, details, recipe } = data;

  return (
    <div className="hover:shake transition-transform transform  hover:shadow-xl duration-100 ease-in-out text-gray-800  overflow-hidden bg-orange-400 glass">
      <figure className="relative overflow-hidden">
        <img
          className="w-full h-56 object-cover p-2 rounded-lg transition-transform duration-500 ease-in-out hover:scale-150 "
          src={image}
          alt="menu image!"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="text-xl  ">{name}</h2>
        <div className="border-t border-gray-300"></div>
        <p className="mb-4 text-xs text-gray-600">{details ? details : recipe} lorem ipsum dollar set imit with rastaurent...</p>
        <div className="card-actions justify-end">
          <Button
            info={"view more"}
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
