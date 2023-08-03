/** @format */

import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progressbar2() {
  const [step, setStep] = useState(0);
  var progress = step > 0 ? step / 1 : 0;
  var percentage = 100 * progress;

  return (
    <>
      <div>
        <div className='activation-container'>
          <button
            className='btn3 btn-dark'
            onClick={() => {
              setStep(step + 1);
            }}
            disabled={progress === 1}
          >
            Summarize
          </button>
        </div>
        <div className='bar'>
          <div className='progress-container'></div>
          <CircularProgressbar
            value={percentage}
            className='circular-progress-bar2'
            text={percentage + '%'}
          ></CircularProgressbar>
        </div>
      </div>
    </>
  );
}

export default Progressbar2;
