import './App.css'
import AppRoutes from "./routes/Routes";
import { AppProvider } from "./AppContex";

function App() {
  return (
    <div >
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}
export default App;