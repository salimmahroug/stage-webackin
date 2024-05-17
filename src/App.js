import './App.css'
import AppRoutes from "./routes/Routes";
import { data } from "./Data";
import { contex } from "./AppContex";

function App() {
  return (
    <div >
      <contex.Provider value={data}>
        <AppRoutes />
      </contex.Provider>
    </div>
  );
}

export default App;
