import Timer from "./components/Timer";
import Settings from "./components/Settings";
import { useContext, } from "react";
import './styles/App.css'
import { SettingsContext } from "./context/SettingsProvider";

const App = () => {
  const {showSettings} = useContext(SettingsContext);

  return (
    <main>
        {showSettings ? <Settings /> : <Timer />}
    </main>
  );
}

export default App;
