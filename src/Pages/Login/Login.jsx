import { useContext, useEffect, useState } from "react";
import SetTitle from "../../components/SetTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import '../../../src/Pages/SignUp/SignUp.css'


const Login = () => {
  const {
    loading,
    LoginUser,
    setLoading
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

 
  
  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[])

 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    
    const email = data.email;
    const password = data.password;
    
    LoginUser(email, password)
    .then(() => {
     navigate(location?.state?.from || '/')
    })
    .catch(err => {
      setLoading(false)
      setError(err)})
    
    
  };
  // console.log(loading);
 

const  ValidateCaptchaField = (e) =>{
    const captchaLength = (e.target.value.length)
    const captcha_value = (e.target.value)
    if(captchaLength >= 6 && captchaLength < 7){
       if(validateCaptcha(captcha_value)){
           setIsDisable(true)
       } 
    }
    else{
        setIsDisable(false);
    }
}

  
 
  

  return (
    <div className="bg-black  !min-h-screen !overflow-hidden">
      <SetTitle title={"Login"}></SetTitle>

      <div className="signup-body !overflow-hidden">
        <div className="background ">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="main-form" onSubmit={handleSubmit(handleForm)}>
          <h3>Login now!</h3>
          {error?.message?.includes('auth/invalid-credential') && <span className="!text-red-400 !pt-3 !text-center !block">Password is wrong.</span>}
          
          <label htmlFor="email">User ID Or Email</label>
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

          <label htmlFor="password">Password</label>
          <input
            {...register("password", { minLength: 6 })}
            type="password"
            placeholder="Your Password"
            id="password"
            className="placeholder:text-gray-200 focus:bg-black text-white"
          />
          {errors?.password && (
              <span className="!text-red-400 text-xs">
              password must be 6 characters long.
            </span>
          )}

          <div className="my-4 captcha-container">
          <LoadCanvasTemplateNoReload />
          </div>
          <input

            onChange={ValidateCaptchaField}
            className="placeholder:text-gray-200 mb-4 focus:bg-black text-white"
            type="text"
            placeholder="Enter captcha code here"
            id="password"
          />

          <button disabled={!isDisable} className="btn-reg">
            {loading ? (
              <span className="loading loading-bars loading-md"></span>
            ) : (
              "Login"
            )}
          </button>
          
          <div className="mt-3 ml-2 text-sm">
            <span>New to our site? <Link className="hover:text-pink-300" to='/signup'>Please SingUp First!</Link></span>
          </div>
         <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
