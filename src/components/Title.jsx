import PropTypes from 'prop-types';

const Title = ({isWork}) => {
  return (
    <h2 className={isWork ? 'work' : 'rest'}>{isWork ? 'Work !' : 'Rest ...'}</h2>
  )
}

export default Title

Title.propTypes = {
  isWork: PropTypes.bool.isRequired
}