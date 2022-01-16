import dream from "../../resources/dream.png"
import useWindowDimensions from '../../components/windowDimensions';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


import './Landing.css';

function Landing() {

  const { height, width } = useWindowDimensions();

  const navigate = useNavigate();
  
  function handleLinkOnClick(){
    navigate('/home');
  }

  // handleOnSubmit = () => {
  //   history.push(`/dashboard`);
  // };
  
  //console.log("height: " + height);

  return (
    <div className="Landing">
      <header className="App-header">
        <div style = {{width : undefined, height: '100%'}}>
          <img src={dream} alt = "dream" style = {{width : undefined, height: (height)*0.6}}/>
        </div>
        <div>
          <button onClick = {() => handleLinkOnClick()}>Click to see the truth (you have been warned)</button>
        </div>
      </header>
    </div>
  );
}

export default Landing;
