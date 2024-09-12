import { useContext, useEffect, useState } from "react";
import SetTitle from "../../components/SetTitle";
import { AuthContext } from "../../Providers/AuthProvider";
// import { ModalContext } from "../../Providers/ModalProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
// import useModal from "../../Hooks/useModal";


const Login = () => {
  const {
    loading,
    setLoading,
    LoginUser,
    googleSingup,
    facebookSingup,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  // const { openModal, SetModalMessage } = useContext(ModalContext);
  // const {openModal} = useModal();
  const navigate = useNavigate();
  const location = useLocation();
   console.log(location)

  
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
    // const modalData = {
    //   name : data.email,
    //   type: 'Login',
    //   message: 'successfully done'
    // }
    LoginUser(email, password)
    .then(() => {
      // openModal()
      // SetModalMessage(modalData)
      // navigate(location?.state?.from || '/')


    })
    .catch(err => setError(err))
    
    
  };

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

  const handleGoogleSignUp = () => {
    googleSingup()
      .then(() => {
        navigate(location?.state?.from || '/')
        setLoading(false)})
      .catch((err) => console.error(err));
  };

  const handleFbSignUp = () => {
    facebookSingup()
      .then(() => {
        navigate(location?.state?.from || '/')
        setLoading(false)})
      .catch((err) => console.error(err));
  };

  

  return (
    <div className="bg-black h-screen">
      <SetTitle title={"Login"}></SetTitle>

      <div className="signup-body">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form onSubmit={handleSubmit(handleForm)}>
          <h3>Login now!</h3>
          {error && <span>{error}</span>}
          
          <label htmlFor="email">User ID Or Email</label>
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

          <div className="my-4">
          <LoadCanvasTemplateNoReload />
          </div>
          <input

            onChange={ValidateCaptchaField}
            className="mb-4"
            type="text"
            placeholder="Enter captcha code here"
            id="password"
          />

          <button disabled={!isDisable} className="btn-reg">
            {loading ? (
              <progress className="progress w-56"></progress>
            ) : (
              "Login"
            )}
          </button>
          <div className="mt-3 ml-2 text-sm">
            <span>New to our site? <Link className="hover:text-yellow-300" to='/signup'>Please SingUp First!</Link></span>
          </div>
          <div className="social">
            <div onClick={handleGoogleSignUp} className="go">
              {loading ? <span className="loading loading-dots loading-md"></span> :
             <> <BsGoogle /> Google</>
              }
              
              
            </div>
            <div onClick={handleFbSignUp} className="fb">
            {loading ? <span className="loading loading-dots loading-md"></span> :
             <> <BsFacebook /> Facebook</>
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
