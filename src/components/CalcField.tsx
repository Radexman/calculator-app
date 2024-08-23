import { FaHistory } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const CalcField = () => {
  return (
    <div className="p-4">
      <div className="space-y-4 pt-4 text-right">
        <p className="text-xl">11 + 78 = 89</p>
        <p className="text-xl">695 * 14 = 9730</p>
        <div className="h-1 rounded-3xl bg-slate-light" />
      </div>
      <div className="flex flex-col items-end">
        <p className="pt-2 text-3xl">3478 + 9071</p>
      </div>
      <div className="flex justify-between px-20 pt-36 sm:pt-28">
        <button type="button">
          <FaHistory
            size={26}
            className="duration-300 hover:text-slate-light"
          />
        </button>
        <button type="button">
          <FaDeleteLeft
            size={26}
            className="duration-300 hover:text-slate-light"
          />
        </button>
      </div>
    </div>
  );
};

export default CalcField;
