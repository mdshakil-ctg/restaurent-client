import './SignUp.css'
import { BsFacebook, BsGoogle } from "react-icons/bs";

const SignUp = () => {
    return (
        <div className='bg-black h-screen'>
          <div className='signup-body'>
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form>
        <h3>Sing Up Here</h3>

        <label htmlFor="username">Full Name</label>
        <input type="text" placeholder="Your Full Name" id="username"/>

        <label htmlFor="email">User ID</label>
        <input type="email" placeholder="Email or Phone" id="email"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Your Password" id="password"/>

        <div className='terms'>
        <label className='terms-label' htmlFor='terms'>accept our Terms and conditions</label>
        <input  type="checkbox" name="terms" id="terms" />
        </div>

        <button>Register</button>
        <div className="social">
          <div className="go"><BsGoogle/> Google</div>
          <div className="fb"><BsFacebook /> Facebook</div>
        </div>
    </form>
        </div>
        </div>
    );
};

export default SignUp;