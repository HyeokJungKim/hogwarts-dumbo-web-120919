import React from 'react';
import PigCard from './PigCard'

const PigPen = (props) => {
  const {hogs} = props

  const arrayOfComponents = hogs.map((hogObj) => {
    return <PigCard key={hogObj.name} hog={hogObj} />
  })

  return(
    <div>
      <h1>Hello from PigPen</h1>
      { arrayOfComponents }
    </div>
  )
};

export default PigPen;
