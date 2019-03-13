import React from 'react';
import Box from '../components/box/Box'
import marko from '../images/marko.jpg';
import riso from '../images/richard.jpg'
import igor from '../images/igor.jpg';
class About extends React.Component {

    render(){
        return(
            <div className="section-about" >
                <div className="about">
                    <p style={{fontSize: '2.2rem', marginBottom: '2rem'}}>Náš tím</p>
                    <div className="about-team">
                        <div className = "about-team-imgbox">
                            <div className = "about-team-imgbox-image">
                                <img className ="about-team-imgbox-image-img" src={riso} alt="riso"></img>
                            </div>
                            <p className = "about-team-imgbox-h1">Richard Rusňák</p>
                            <p className = "about-team-imgbox-h2">Full Stack Developer</p>
                        </div>
                        <div className = "about-team-imgbox">
                            <div className = "about-team-imgbox-image">
                                <img className ="about-team-imgbox-image-img" src={marko} alt="marko"></img>
                            </div>
                            <p className = "about-team-imgbox-h1">Martin Tovarňák</p>
                            <p className = "about-team-imgbox-h2">Full Stack Developer</p>
                        </div>
                        
                        <div className = "about-team-imgbox">
                            <div className = "about-team-imgbox-image">
                                <img className ="about-team-imgbox-image-img" src={igor} alt="marko"></img>
                            </div>
                            <p className = "about-team-imgbox-h1">Igor Savko</p>
                            <p className = "about-team-imgbox-h2">Full Stack Developer</p>
                        </div>
                        
                    </div>
                    
                </div> 
            </div>
        );
    }
}
export default About;

