import ReactSlider from "react-slider";
import "../styles/slider.css";
import { useContext } from "react";
import BackButton from "./BackButton";
import { SettingsContext } from "../context/SettingsProvider";

const Settings = () => {
  const {
    workMinutes,
    setWorkMinutes,
    breakMinutes,
    setBreakMinutes,
    setShowSettings,
  } = useContext(SettingsContext);

  return (
    <div className="slider-wrapper">
      <label>Work, mins: {workMinutes}</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={workMinutes}
        onChange={(newValue) => setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Break, mins: {breakMinutes}</label>
      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={breakMinutes}
        onChange={(newValue) => setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div className="back-button-container">
        <BackButton onClick={() => setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
