import { SlOptionsVertical } from "react-icons/sl";
const OptionSection = ({text}) => {
    return (
        <div className="flex justify-between items-center px-2 md:px-4 py-2 bg-[#1C2A35] text-slate-400">
        <span className="text-xs md:text-sm font-semibold">{text}</span>
        <span className="cursor-pointer">
          <SlOptionsVertical  className="text-yellow-400"/>
        </span>
      </div>
    );
};

export default OptionSection;