import { FaHistory } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useAppSelector } from "../app/hooks";

const CalcField = () => {
  const display = useAppSelector((state) => state.calculator.display);
  const expression = useAppSelector((state) => state.calculator.expression);

  return (
    <div className="p-4">
      <div className="space-y-4 text-right"></div>
      <p className="py-2 text-right">{expression}</p>
      <div className="h-2 rounded-3xl bg-slate-light" />
      <div className="flex flex-col items-end">
        <p className="pt-2 text-3xl">{display}</p>
      </div>
      <div className="flex justify-between pt-14 sm:px-12 sm:pt-10">
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
