import React from 'react';
import Box from '../components/box/Box'
class Home extends React.Component {

    render(){
        return(
            <div className="section-home" style={{backgroundImage: 'url(imgs/hero/blue.svg)'}}>
                <div className="home">
                    <p className="home-header">Diabetická Retinopatia</p>
                    <p className="home-header-2">Aplikácia na uľahčenie diagnostikovania diabetickej retinopatie</p>
                </div>
                <div className= "home-boxes">
                    <Box text="Aplikácia" buttonText = "Pozrieť viac" link="application"/>
                    <Box text="Na stiahnutie" buttonText = "Pozrieť viac" link="downloads"/>
                    <Box text= "O nás" buttonText = "Pozrieť viac" link = "about"/>
                </div>
                
                
            </div>
        );
    }
}
export default Home;

