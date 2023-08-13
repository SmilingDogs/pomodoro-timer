import React from 'react'

const Title = ({isWork}) => {
  return (
    <h2 className={isWork ? 'work' : 'rest'}>{isWork ? 'Work !' : 'Rest ...'}</h2>
  )
}

export default Title