import { FaDivide, FaPlusMinus, FaEquals } from "react-icons/fa6";
import { FaTimes, FaMinus, FaPlus, FaPercentage } from "react-icons/fa";
import { useAppDispatch } from "../app/hooks";
import {
  inputDigit,
  inputDecimal,
  handleOperator,
  clear,
  calculateResult,
  applyPercentage,
  toggleSign,
} from "../features/calculator/calculatorSlice";

const NumPad = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-2 rounded-b-2xl p-7">
      <button
        onClick={() => dispatch(clear())}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        AC
      </button>
      <button
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        {`()`}
      </button>
      <button
        onClick={() => dispatch(applyPercentage())}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-2xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        <FaPercentage />
      </button>
      <button
        onClick={() => dispatch(handleOperator("/"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-gray-light text-2xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        <FaDivide />
      </button>
      <button
        onClick={() => dispatch(inputDigit("7"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        7
      </button>
      <button
        onClick={() => dispatch(inputDigit("8"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        8
      </button>
      <button
        onClick={() => dispatch(inputDigit("9"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        9
      </button>
      <button
        onClick={() => dispatch(handleOperator("*"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-gray-light text-2xl duration-200 hover:brightness-105 sm:h-16"
      >
        <FaTimes />
      </button>
      <button
        onClick={() => dispatch(inputDigit("4"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        4
      </button>
      <button
        onClick={() => dispatch(inputDigit("5"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        5
      </button>
      <button
        onClick={() => dispatch(inputDigit("6"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        6
      </button>
      <button
        onClick={() => dispatch(handleOperator("-"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-gray-light text-2xl duration-200 hover:brightness-105 sm:h-16"
      >
        <FaMinus />
      </button>
      <button
        onClick={() => dispatch(inputDigit("1"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        1
      </button>
      <button
        onClick={() => dispatch(inputDigit("2"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        2
      </button>
      <button
        onClick={() => dispatch(inputDigit("3"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        3
      </button>
      <button
        type="button"
        onClick={() => dispatch(handleOperator("+"))}
        className="flex h-14 items-center justify-center rounded-lg bg-gray-light text-2xl duration-200 hover:brightness-105 sm:h-16"
      >
        <FaPlus />
      </button>
      <button
        onClick={() => dispatch(toggleSign())}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-2xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        <FaPlusMinus />
      </button>
      <button
        onClick={() => dispatch(inputDigit("0"))}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-2xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        0
      </button>
      <button
        onClick={() => dispatch(inputDecimal())}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-slate-lighter text-xl font-bold duration-200 hover:brightness-105 sm:h-16"
      >
        .
      </button>
      <button
        onClick={() => dispatch(calculateResult())}
        type="button"
        className="flex h-14 items-center justify-center rounded-lg bg-gray-light text-3xl duration-200 hover:brightness-105 sm:h-16"
      >
        <FaEquals />
      </button>
    </div>
  );
};

export default NumPad;
