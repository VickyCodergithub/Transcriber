/** @format */

import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progressbar() {
  const [step, setStep] = useState(0, false);
  var progress = step > 0 ? step / 1 : 0;
  var percentage = 100 * progress;

  return (
    <>
      <div className='activation-container'>
        <div>
          <button
            className='btn1 btn-dark'
            onClick={() => {
              setStep(step + 1);
            }}
            disabled={progress === 1}
          >
            Transcribe
          </button>{' '}
          <div className='bar'>
            <div className='progress-container'></div>
            <CircularProgressbar
              value={percentage}
              className='circular-progress-bar'
              text={percentage + '%'}
            ></CircularProgressbar>
          </div>
        </div>
        <input type='file' id='actual-btn' hidden />
        <label for='actual-btn' className='btn2 btn-dark btn-sm'>
          Upload File
        </label>
      </div>
    </>
  );
}

export default Progressbar;
