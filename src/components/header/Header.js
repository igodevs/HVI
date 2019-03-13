import React from 'react';
import { Link } from 'react-router-dom';

import githubSVG from '../../images/github-logo.svg';

class Header extends React.Component {

    render(){
        return(
            <div className="section-header">
                <Link className="header-logo" to={`/`}>LOGO</Link>
                {/* <div className="header-buttons">
                    <p>Demo</p>
                    <p>About us</p>
                </div> */}
                <div className="header-hrefs">
                    <a target="_blank" rel="noopener noreferrer" href = "https://github.com/igodevs/HVI">
                        <img style={{ cursor: 'pointer', height: '3rem', width:'3rem'}} alt = "git" src ={githubSVG}/>
                    </a>
                    
                </div>
            </div>
        );
    }
}
export default Header;

