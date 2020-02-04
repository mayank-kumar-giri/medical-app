import * as React from 'react';
import './Diseaseone.css';

// function Cough(props)
const Cough = (props) =>
{
    return (
        <div className = 'first'>
    
    <img src = {props.pic} />
    <center><button>{props.disease}</button></center>
    
    </div>
    );
}
export default Cough;