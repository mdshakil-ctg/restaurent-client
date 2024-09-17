
import { useContext } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import DatabaseUserCreate from './../../Hooks/DatabaseUserCreate';
import useModal from "../../Hooks/useModal";

const SocialLogin = () => {
    const {openModal={}} = useModal();
    
    const {
        googleSingup,
        facebookSingup,
      } = useContext(AuthContext);
      const location = useLocation();
      const navigate = useNavigate()

    const handleGoogleSignUp = () => {
        googleSingup()
          .then((result) => {
       
            const isNewUser = result.user.metadata.creationTime === result.user.metadata.lastSignInTime;

            if(isNewUser){
                DatabaseUserCreate({email: result.user.email, name: result.user.displayName})
                .then(res => {
              
                    if(res.data.insertedId){
                      navigate(location?.state?.from || '/')
                        openModal({
                            title:`Welcome ${result.user.displayName} to Bistro Boss!!!`,
                            message:'Please check your email for exclusive offers!',
                            autoCloseTime: 6000
                        })
                    }
                })
            }
            else{
              console.log('in the else state')
              navigate(location?.state?.from || '/')
                openModal({
                    title: `Welcome Back ${result.user.displayName} to Bistro Boss!!!`,
                    autoCloseTime: 4000
                })
            }
          })
          .catch((err) => console.error(err));
      };
    
      const handleFbSignUp = () => {
        facebookSingup()
        .then((result) => {
       
          const isNewUser = result.user.metadata.creationTime === result.user.metadata.lastSignInTime;

          if(isNewUser){
              DatabaseUserCreate({email: result.user.email, name: result.user.displayName})
              .then(res => {
            
                  if(res.data.insertedId){
                    navigate(location?.state?.from || '/')
                      openModal({
                          title:`Welcome ${result.user.displayName} to Bistro Boss!!!`,
                          message:'Please check your email for exclusive offers!',
                          autoCloseTime: 6000
                      })
                  }
              })
          }
          else{
            navigate(location?.state?.from || '/')
              openModal({
                  title: `Welcome Back ${result.user.displayName} to Bistro Boss!!!`,
                  autoCloseTime: 4000
              })
          }
        })
          .catch((err) => console.error(err));
      };
    return (
        <div className="social">
        <div onClick={handleGoogleSignUp} className="go">
          <BsGoogle /> Google
        </div>
        <div onClick={handleFbSignUp} className="fb">
          <BsFacebook /> Facebook
        </div>
      </div>
    );
};

export default SocialLogin;