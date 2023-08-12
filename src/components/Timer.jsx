import { CountdownCircleTimer } from "react-countdown-circle-timer";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import { useContext, useState} from "react";
import { SettingsContext } from "../context/SettingsProvider";
import ResetButton from "./ResetButton";

const red = '#f93831';
const green = '#4aec8c';

const Timer = () => {
  const { workMinutes, breakMinutes, setShowSettings, startTimer, setStartTimer} = useContext(SettingsContext);

  const [qty, setQty] = useState(0); 
  const [mode, setMode] = useState('work');
  const [timerFinished, setTimerFinished] = useState(false);  

  const onTimerComplete = () => {
    if (qty < 1) {
      setMode('break');
    }
    setQty((prev) => prev + 1);
    if (qty == 1) {
      setStartTimer(false);
      setTimerFinished(true);
    }
  };

  let isWork = mode === 'work';

  const renderTime = ({ remainingTime }) => {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    if (seconds < 10 ) {
      seconds = '0' + seconds;
    }

    return (
      <div style={{display: 'flex', alignItems: 'center', color: `${isWork ? red : green}`}}>
        <span style={{ fontSize: "4rem", fontWeight: "bold" }}>{minutes}</span>
        <span style={{ fontSize: "3rem", fontWeight: "bold" }}>:</span>
        <span style={{ fontSize: "4rem", fontWeight: "bold" }}>{seconds}</span>
      </div>
    );
  };

  return (
    <div className='timer-wrapper'>
      <h2 className={isWork ? '' : 'rest'}>{isWork ? 'Work' : 'Rest'} </h2>

      <CountdownCircleTimer
        key={isWork ? 1 : 2}
        isPlaying={startTimer}
        duration={(isWork ? workMinutes : breakMinutes) * 60}
        colors={isWork ? red : green}
        strokeWidth={6}
        trailColor='#151932'
        size={220}
        onComplete={onTimerComplete}
      >
        {renderTime}
      </CountdownCircleTimer>
      <div style={{ marginTop: '30px' }}>
        {!startTimer && !timerFinished && <PlayButton onClick={() => setStartTimer(true)} />}
        {startTimer && !timerFinished && <PauseButton onClick={() => setStartTimer(false)} />}
        {!startTimer && timerFinished && <ResetButton onClick={() => window.location.reload()} />}
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsButton onClick={() => setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
