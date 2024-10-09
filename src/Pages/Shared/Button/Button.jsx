

const Button = ({ info, handleAddtoCart }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <button onClick={handleAddtoCart} className="bg-gradient-to-r from-slate-600  to-[#f89f06] text-white font-semibold px-4 py-1 md:py-3 md:px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-125 transition duration-300 ease-in-out" role="button">
        <span className="font-satisfy">{info}</span>
      </button>
    </div>
  );
};

export default Button;
