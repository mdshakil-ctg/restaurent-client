import { useContext, useState } from "react";
import SetTitle from "../../components/SetTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./SignUp.css";
import DatabaseUserCreate from "../../Hooks/DatabaseUserCreate";
import useModal from './../../Hooks/useModal';
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {
  const {openModal} = useModal()
  const [isChecked, setIsChecked] = useState(false);
  const {createUser,updateUser,loading,setLoading} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res);
        const userInfo = {name:data.name, email:data.email}

      updateUser(data.name)
      .then(()=>{console.log('user name updated succesfully')
         DatabaseUserCreate(userInfo)
      .then(res => {
        if(res?.data?.insertedId){
          openModal({
            title: `Welcome ${data.name}`,
            message: 'Please check your email for exclusive offers!',
            autoCloseTime: 5000
          })
        }
        
      })
      setLoading(false);
      navigate(location?.state?.from || '/')
      })
      .catch((errors) => console.log(errors))
     
      })
      .catch((error) =>  {
        setLoading(false)
        if(error.message.includes('email-already-in-use')){
          openModal({
            title: `${data.email}this email is already taken. Please confirm any other email for Register.`,
            autoCloseTime: 5000
          })
        }
      });
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
        <form className="main-form" onSubmit={handleSubmit(handleForm)}>
          <h3>Sing Up Here</h3>
          <label htmlFor="username">Full Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Full Name"
            id="username"
            className="placeholder:text-gray-200 focus:bg-black !text-orange-400 "
          />
          {errors.name && (
            <span className="!text-red-400 text-xs">Name is required</span>
          )}

          <label htmlFor="email">User ID</label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email or Phone"
            id="email"
            className="placeholder:text-gray-200 focus:bg-black text-white"
          />
          {errors.email && (
            <span className="!text-red-400 text-xs">Email required</span>
          )}

          <label htmlFor="signup-password">Password</label>
          <input
            {...register("password", { minLength: 6 })}
            type="password"
            placeholder="Your Password"
            id="signup-password"
            className="placeholder:text-gray-200 focus:bg-black !text-white"
          />
          {errors?.password && (
            <span className="!text-red-400 text-xs">
              password must be 6 characters long.
            </span>
          )}

          <div className="terms">
            <label className="terms-label" htmlFor="terms">
             I agree with <span className="hover:underline">Terms and conditions</span>, and <span className="hover:underline">Privacy Polices</span>
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
              <span className="loading loading-bars loading-xs"></span>
            ) : (
              "Register"
            )}
          </button>
          <div className="mt-3 ml-2 text-sm login-text">
            <span>Already have an account? <Link className="hover:text-yellow-300" to='/login'>Log In Here!</Link></span>
          </div>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
