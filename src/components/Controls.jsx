import React, { useContext } from 'react'
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";
import { SettingsContext } from '../context/SettingsProvider';


const Controls = ({setKey, keyProp}) => {
  const {startTimer, setStartTimer} = useContext(SettingsContext);

  return (
    <div style={{ marginTop: '30px' }}>
        {!startTimer && <PlayButton onClick={() => setStartTimer(true)} />}
        {startTimer && <PauseButton onClick={() => setStartTimer(false)} />}
        {startTimer && keyProp > 0 && <ResetButton onClick={() => setKey(0)} />}
    </div>
  )
}

export default Controls