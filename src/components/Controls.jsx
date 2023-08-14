import { useContext } from 'react';
import PropTypes from 'prop-types';
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

Controls.propTypes = {
  setKey: PropTypes.func.isRequired,
  keyProp: PropTypes.number.isRequired
}