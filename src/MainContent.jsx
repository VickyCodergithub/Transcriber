/** @format */

import React, { Component } from 'react';
import Progressbar from './Progressbar';
/** @format */
class Main extends Component {
  render() {
    return (
      <>
        <h1 className='text-center text-muted font-italic font-weight-lighter'>
          Audio and Video Transcriber
        </h1>
        <div class='bx1'>
          <textarea
            className='text-area1'
            placeholder='Paste your audio or video link'
            cols='15'
            rows='6'
          ></textarea>
        </div>
        <button className='btn1 btn-dark'>Transcribe</button>
        <input type='file' id='actual-btn' hidden />
        <label for='actual-btn' className='btn2 btn-dark btn-sm'>
          Upload File
        </label>
        <div>
          <textarea className='text-area2' cols='15' rows='6'></textarea>
          <button className='btn3 btn-dark'>Summarize</button>
          <textarea className='text-area3' placeholder='No of words'></textarea>
          <button type='button' className='btn4 btn-primary btn-norma btn-sm'>
            Export
          </button>
        </div>
        <div>
          <textarea className='text-area4' cols='15' rows='6'></textarea>
          <button
            type='button'
            className='btn5 btn-primary btn-norma btn-sm'
            id='btn4'
          >
            Export
          </button>
        </div>
      </>
    );
  }
}
export default Main;
