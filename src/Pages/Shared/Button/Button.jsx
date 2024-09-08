import './Button.css'

const Button = ({info}) => {
    return (
       <div className='flex justify-center items-center mt-5'>
       <button className="button-16" role="button">
  <span className="text">{info}</span>
</button>
       </div>
    );
};

export default Button;