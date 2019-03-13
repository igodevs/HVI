import React from 'react';
import gitlabSVG from '../../images/gitlab.svg';
import { Link } from 'react-router-dom';

class Box extends React.Component {
    render(){
        return(
            <div className="section-box">
                <p className="box-header-text">{this.props.text}</p>
                <Link className="box-button" to={`/${this.props.link}`}>{this.props.buttonText}</Link>
            </div>
        );
    }
}
export default Box;

