import { useNavigate } from 'react-router-dom';
import { useRouteError } from "react-router-dom";
import Img from '../assets/404.gif'

const ErrorElement = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-white py-10 md:p-20">
      <h2 className="text-3xl lg:text-5xl font-semibold text-red-600 mb-4">
        Oops! The page you are looking for is missing from the menu!
      </h2>
      <p><i>{error.statusText || error.message}</i></p>
      <img src={Img} alt="Page Not Found" className=" my-8" />
      <p className="text-lg text-gray-600 mb-8">
        It seems the page you ordered isnot on the menu. Lets help you find your way back!
      </p>
      <div className="space-x-4 space-y-4">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Go back to the homepage
        </button>
        <button
          onClick={() => navigate("/menu")}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-900 transition"
        >
          Check out our menu
        </button>
      </div>
    </div>
  );
};

export default ErrorElement;
