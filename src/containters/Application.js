import React from 'react';
import working from '../images/workingOnIT.jpg';

class Application extends React.Component {

    render(){
        return(
            <div className="section-application">
                <p style={{fontSize: '2.5rem', marginBottom: '2.5rem'}}>Na aplikácii sa pracuje</p>
                <img style={{height: '70%', width: 'auto'}} src={working} alt="working"></img>
                
                
            </div>
        );
    }
}
export default Application;

