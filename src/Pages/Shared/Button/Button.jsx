import "./Button.css";

const Button = ({ info, handleAddtoCart }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <button onClick={handleAddtoCart} className="button-16" role="button">
        <span className="text">{info}</span>
      </button>
    </div>
  );
};

export default Button;
