import { FaHistory } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { clear, backspace } from "../features/calculator/calculatorSlice";

const CalcField = () => {
  const display = useAppSelector((state) => state.calculator.display);
  const expression = useAppSelector((state) => state.calculator.expression);

  const dispatch = useAppDispatch();

  return (
    <div className="px-4 pt-2">
      <div className="space-y-4 text-right"></div>
      <p className="h-6 py-10 text-right sm:py-7">{expression}</p>
      <div className="h-1 rounded-3xl bg-slate-light" />
      <div className="flex flex-col items-end">
        <p className="pt-2 text-3xl">{display}</p>
      </div>
      <div className="flex justify-between pb-4 pt-32 sm:px-12">
        <button onClick={() => dispatch(clear())} type="button">
          <FaHistory
            size={26}
            className="duration-300 hover:text-slate-light"
          />
        </button>
        <button onClick={() => dispatch(backspace())} type="button">
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
