import React from 'react';
import logo from './logo.svg';
import Cough from './Problem/Diseaseone.jsx'
import './App.css';

const coughData = [
  {disease: 'Cold', pic: 'https://thumbs.dreamstime.com/b/kid-boy-having-flu-vector-illustration-child-cartoon-cold-health-headache-illness-cough-pain-sick-character-people-sickness-sneeze-157366158.jpg'},
  { disease: 'HeadAche',  pic: 'https://us.123rf.com/450wm/captainvector/captainvector1706/captainvector170600403/79821985-stock-vector-boy-with-a-headache.jpg?ver=6'},
  {disease: 'Cough', pic: 'https://previews.123rf.com/images/antimartina/antimartina1803/antimartina180300005/96902776-vector-illustration-of-a-coughing-cartoon-man.jpg'}
]

const renderCoughData = (coughData) => (
  coughData.map((datum, index) => (
    <Cough
      key={index}
      disease={datum.disease}
      pic={datum.pic}
    />
  ))
)

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      initInputVal: 0,
    };
  }



  render() {
    return (
      <div className='App'>
      <center> <h1>Health-Issue ?</h1></center>
      <div className ='Box'>
      {renderCoughData(coughData)}
      </div>
  
      <center> <h2> Winter is comming!</h2> </center>
      <center>
      <span className='Wrapy'>
       <p> More than 1 issue? Enter No: &nbsp; <button >+</button> &nbsp; 
       <input 
        value={this.state.initInputVal} 
        onChange={(event) => {
          const inputValue = event.target.value;
          this.setState({
            initInputVal: inputValue,
          });
        }}
        />
        &nbsp;
      <button >-</button>
      </p>
      
      </span>
      </center>
  
      
      </div>
    );
  }
}

export default App;
