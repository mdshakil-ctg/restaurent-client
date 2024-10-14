
import './DashboardButton.css';

const DashboardButton = ({ text = 'Proceed', onClick, small }) => {
  return (
    <button
      className={`custom-button ${small ? 'small' : ''}`}
      style={{ "--content": `'${text}'` }}
      onClick={onClick}
    >
      <div className="left"></div>
        {text}
      <div className="right"></div>
    </button>
  );
};

export default DashboardButton;


