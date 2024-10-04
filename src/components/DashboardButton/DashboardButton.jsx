
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

// :root {
//   --text-color: rgb(12, 12, 12);
//   --shadow-color: hsla(210, 40%, 52%, .4);
//   --btn-color: hsl(34, 79%, 50%);
//   --bg-color: #0000004d;
// }

