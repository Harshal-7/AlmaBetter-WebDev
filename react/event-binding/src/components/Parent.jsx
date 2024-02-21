// ParentComponent.jsx

import React, { useState } from 'react';
import ChildComponent from './Child';

function ParentComponent() {
  const handleChildClick = (dataFromChild) => {
    console.log('Data from child:', dataFromChild);
  };

  return (
    <div>
      <ChildComponent onChildClick={handleChildClick} />
    </div>
  );
};

export default ParentComponent