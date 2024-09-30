
import { Link } from 'react-router-dom';
import './CallUs.css'

const Callus = () => {
    return (
        <section className="bg-black py-16">
      <div className="max-w-xl mx-auto text-center">
        {/* Heading with fade-in animation */}
        <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          Call Us Now
        </h2>
        <p className="text-gray-400 mb-8 animate-fade-in">
          We are here to assist you. Get in touch with us today!
        </p>
        {/* Button with pulsing animation */}
        <Link to="tel:+1234567890">
          <button className="bg-gradient-to-r from-yellow-700 via-amber-500 to-[#d38d13ce] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-200 ease-in-out animate-pulse ">
            +880 123 456 7890
          </button>
        </Link>
      </div>
    </section>
    );
};

export default Callus;