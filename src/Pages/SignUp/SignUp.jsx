import { useContext, useState } from "react";
import SetTitle from "../../components/SetTitle";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../Providers/ModalProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const {
    createUser,
    updateUser,
    loading,
    setLoading,
    googleSingup,
    facebookSingup,
  } = useContext(AuthContext);
  const [error, setError] = useState('')
  const { openModal, SetModalMessage, modalMessage } = useContext(ModalContext);
 
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(modalMessage);
    createUser(data.email, data.password)
      .then(() => {
        const userData = {
          name: data.name,
          email: data.email,
        };
        const modalData = {
          name: data.name,
          type: 'registration',
          message: 'succesfully done'
        }
        updateUser(userData).then(() => {
          axios.post("http://localhost:5000/userUpdate", userData)
            .then((res) => {
              setLoading(false);
              if (res.data.acknowledged) {
                openModal();
                SetModalMessage(modalData)
                navigate("/");
              }
            })
            .catch(() => {});
        });
      })
      .catch((error) =>  setError(error.message));
  };

  const handleGoogleSignUp = () => {
    googleSingup()
      .then((result) => console.error(result))
      .catch((err) => console.error(err));
  };

  const handleFbSignUp = () => {
    facebookSingup()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="bg-black h-screen">
      <SetTitle title={"Sign up"}></SetTitle>

      <div className="signup-body">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form onSubmit={handleSubmit(handleForm)}>
          <h3>Sing Up Here</h3>
          {error && <span>{error}</span>}
          <label htmlFor="username">Full Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Full Name"
            id="username"
          />
          {errors.name && (
            <span className="text-yellow-400 text-xs">Name is required</span>
          )}

          <label htmlFor="email">User ID</label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email or Phone"
            id="email"
          />
          {errors.email && (
            <span className="text-yellow-400 text-xs">Email required</span>
          )}

          <label htmlFor="password">Password</label>
          <input
            {...register("password", { minLength: 6 })}
            type="password"
            placeholder="Your Password"
            id="password"
          />
          {errors?.password && (
            <span className="text-yellow-400 text-xs">
              password must be 6 characters long.
            </span>
          )}

          <div className="terms">
            <label className="terms-label" htmlFor="terms">
             I agree with Bistro <span className="hover:underline">Terms and conditions</span>, and <span className="hover:underline">Privacy Polices</span>
            </label>
            <input
              onChange={handleCheckboxChange}
              type="checkbox"
              name="terms"
              id="terms"
            />
          </div>

          <button disabled={!isChecked} className="btn-reg">
            {loading ? (
              <progress className="progress w-56"></progress>
            ) : (
              "Register"
            )}
          </button>
          <div className="mt-3 ml-2 text-sm">
            <span>Already have an account? <Link className="hover:text-yellow-300" to='/login'>Log In Here!</Link></span>
          </div>
          <div className="social">
            <div onClick={handleGoogleSignUp} className="go">
              <BsGoogle /> Google
            </div>
            <div onClick={handleFbSignUp} className="fb">
              <BsFacebook /> Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
