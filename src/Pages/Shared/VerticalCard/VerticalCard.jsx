import DashboardButton from "../../../components/DashboardButton/DashboardButton";
import Button from "../Button/Button";
import "./VerticalCard.css"; // Assuming you put the CSS in this file

const VerticalCard = ({ data }) => {
  const { name, image, details, recipe } = data;

  return (
    <div className="w-72 shadow-xl rounded-lg bg-black text-gray-300  transition-transform duration-300 transform hover:scale-105 glass">
      <figure className="relative overflow-hidden">
        <img
          className="w-full h-56 object-cover"
          src={image}
          alt="menu image!"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="text-xl  ">{name}</h2>
        <div className="border-t border-gray-300"></div>
        <p className="mb-4 text-xs text-gray-300">{details ? details : recipe} lorem ipsum dollar set imit with rastaurent...</p>
        <div className="card-actions justify-end">
          {/* <Button
            info={"view more"}
          /> */}
          <DashboardButton small text="order"/>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
