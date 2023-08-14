import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SettingsButton from "./SettingsButton";
import { useContext, useState} from "react";
import { SettingsContext } from "../context/SettingsProvider";
import Title from "./Title";
import Controls from "./Controls";
import mySound1 from '../assets/beep-08b.mp3';
import mySound2 from '../assets/beep-07a.mp3';
import '../styles/timer.css';
const sound2 = new Audio(mySound2);
const sound1 = new Audio(mySound1);
const red = '#f93831';
const green = '#4aec8c';

const Timer = () => {
  const { workMinutes, breakMinutes, setShowSettings, startTimer, setStartTimer} = useContext(SettingsContext);

  const [key, setKey] = useState(0);

  let isWork = key === 0;

  const onTimerComplete = () => {
    isWork ? setKey(prevKey => prevKey + 1) : setKey(prevKey => prevKey - 1);
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
    setStartTimer(false);
  }

  const renderTime = ({ remainingTime }) => {
    let hours = Math.floor(remainingTime / 3600)
    let minutes = Math.floor(remainingTime / 60);

    if (hours > 0) {
      minutes = minutes - (hours * 60);
    }
    if (minutes < 10 ) {
      minutes = '0' + minutes;
    }
    let seconds = remainingTime % 60;
    if (seconds < 10 ) {
      seconds = '0' + seconds;
    }
    if (remainingTime < 2.1) {
      sound2.play();
    }
    if (remainingTime === 0) {
      sound1.play();
    }

    return (
      <div className={`timer-display ${isWork ? 'color-work' : 'color-rest'}`}>
        {hours > 0 && <span className={`time-hours ${hours === 1 ? 'one-hour' : ''}`}>{hours}</span> }
        {hours > 0 && <span className="dots">:</span> }
        <span className="time">{minutes}</span>
        <span className="dots">:</span>
        <span className="time">{seconds}</span>
      </div>
    );
  };

  return (
    <div className='timer-wrapper'>
      <Title isWork={isWork} />

      <CountdownCircleTimer
        key={key}
        isPlaying={startTimer}
        duration={(isWork ? workMinutes : breakMinutes) * 60}
        colors={isWork ? red : green}
        strokeWidth={6}
        trailColor='#151932'
        size={260}
        onComplete={onTimerComplete}
      >
        {renderTime}
      </CountdownCircleTimer>

      <Controls setKey={setKey} keyProp={key} />

      <SettingsButton onClick={handleSettingsClick} />
    </div>
  );
}

export default Timer;
