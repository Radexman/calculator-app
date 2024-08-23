import "./App.css";
import CalcField from "./components/CalcField";
import { Counter } from "./features/counter/Counter";
import { Quotes } from "./features/quotes/Quotes";
import logo from "./logo.svg";

const App = () => {
  return (
    <div className="font-mono">
      <main className="container mx-auto flex max-h-screen items-center justify-center">
        <div className="mx-auto my-0 h-screen max-w-xl flex-1 rounded-lg shadow-2xl sm:my-8 sm:h-[90vh]">
          {/* Calculation and history component */}
          <div className="h-1/2 p-4">
            <CalcField />
          </div>
          {/* Numpad component */}
          <div className="h-1/2 rounded-none bg-gray-darker p-0 shadow-2xl sm:rounded-b-2xl"></div>
        </div>
      </main>
    </div>
  );
};

export default App;
