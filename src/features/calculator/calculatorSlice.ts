import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  display: string;
  operator: string | null;
  firstOperand: number | null;
  waitingForSecondOperand: boolean;
  expression: string;
}

const initialState: CalculatorState = {
  display: "0",
  operator: null,
  firstOperand: null,
  waitingForSecondOperand: false,
  expression: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputDigit(state, action: PayloadAction<string>) {
      if (state.waitingForSecondOperand) {
        state.display = action.payload;
        state.waitingForSecondOperand = false;
      } else {
        state.display =
          state.display === "0"
            ? action.payload
            : state.display + action.payload;
      }
      state.expression += action.payload;
    },
    inputDecimal(state) {
      if (!state.display.includes(".")) {
        state.display += ".";
        state.expression += ".";
      }
    },
    handleOperator(state, action: PayloadAction<string>) {
      const inputValue = parseFloat(state.display);

      if (state.operator && state.waitingForSecondOperand) {
        state.operator = action.payload;
        state.expression = state.expression.slice(0, -1) + action.payload;
        return;
      }

      if (state.firstOperand === null) {
        state.firstOperand = inputValue;
      } else if (state.operator) {
        const result = calculate(
          state.firstOperand,
          inputValue,
          state.operator,
        );
        state.display = String(result);
        state.firstOperand = result;
      }

      state.waitingForSecondOperand = true;
      state.operator = action.payload;
      state.expression += ` ${action.payload} `;
    },
    clear(state) {
      state.display = "0";
      state.operator = null;
      state.firstOperand = null;
      state.waitingForSecondOperand = false;
      state.expression = "";
    },
    calculateResult(state) {
      if (state.firstOperand !== null && state.operator !== null) {
        const secondOperand = parseFloat(state.display);
        const result = calculate(
          state.firstOperand,
          secondOperand,
          state.operator,
        );
        state.display = String(result);
        state.expression += ` = ${result}`;
        state.firstOperand = null;
        state.operator = null;
        state.waitingForSecondOperand = false;
      }
    },
  },
});

function calculate(
  firstOperand: number,
  secondOperand: number,
  operator: string,
) {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

export const {
  inputDigit,
  inputDecimal,
  handleOperator,
  clear,
  calculateResult,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
