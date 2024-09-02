import "./App.css";
import CalcField from "./components/CalcField";
import NumPad from "./components/NumPad";

const App = () => {
  return (
    <div className="font-mono">
      <main className="container mx-auto flex items-center justify-center">
        <div className="mx-auto mt-0 h-screen max-w-xl flex-1 rounded-lg shadow-2xl sm:mt-4 sm:h-auto">
          <div className="h-1/2">
            <CalcField />
          </div>
          <div className="h-1/2 rounded-none bg-gray-darker shadow-2xl sm:h-auto sm:rounded-b-2xl">
            <NumPad />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
