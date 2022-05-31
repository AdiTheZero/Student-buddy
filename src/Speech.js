import React from 'react';
import logo from './logo.svg';
import  mic from './mic.png';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./Speech.css"


const Speech = () => {
  let Navigate=useNavigate();
  function opentab(website)
  {
    if(website.toLowerCase()=='youtube')
    {
        window.open('http://youtube.com/')
    }
   else if(website.toLowerCase()=='dashboard')
    {
       Navigate('/');
    }
else if (website.toLowerCase()=='google')
{
    window.open('http://google.com/')
}
else if (website.toLowerCase()=='news')
{
    Navigate('/news');
}
else if (website.toLowerCase()=='wiki')
{
    Navigate('/wiki');
}
else if (website.toLowerCase()=='job')
{
    Navigate('/job');
}
else if (website.toLowerCase()=='book')
{
    Navigate('/book');
}
else if (website.toLowerCase()=='cons')
{
    Navigate('/cons');
}
else{
    alert("unknow")
}
}

const commands =[
    {
        command:'open *',
        callback:(website)=>opentab(website)
    }
]
const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
    
  } = useSpeechRecognition({commands});
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    
    <div>
     <button id="mic" onClick={SpeechRecognition.startListening } >
        <img src={listening ? logo: mic} className="mic" alt="logo" />
      </button>
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <button onClick={()=>Navigate('/news')}>News</button>
      <button onClick={()=>Navigate('/wiki')}>Wiki</button> */}
      <p>{transcript}</p>
    </div>
  );
};
export default Speech;


