import React from 'react';
import working from '../images/workingOnIT.jpg';
import Input from '../components/Input/Input';


class Application extends React.Component {

constructor(){
    super();
    this.state = {
        attribute: [{
                        attribute: 'Hodnotenie kvality',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Pre-screening sietnice',
                        min: 4,
                        max: 5,
                    },
                    {
                        attribute: 'Výsledok detekcie MA (1)',
                        min: 6,
                        max: 7,
                    },
                    {
                        attribute: 'Výsledok detekcie MA (2)',
                        min: 8,
                        max: 9,
                    },
                    {
                        attribute: 'Výsledok detekcie MA (3)',
                        min: 10,
                        max: 11,
                    },
                    {
                        attribute: 'Výsledok detekcie MA (4)',
                        min: 12,
                        max: 13,
                    },
                    {
                        attribute: 'Výsledok detekcie MA (5)',
                        min: 10,
                        max: 11,
                    },
                    {
                        attribute: 'Výsledok detekcie MA (6)',
                        min: 10,
                        max: 11,
                    },
                    {
                        attribute: 'Výsledok detekcie pre exsudáty (1)',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Výsledok detekcie pre exsudáty (2)',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Výsledok detekcie pre exsudáty (3)',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Výsledok detekcie pre exsudáty (4)',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Výsledok detekcie pre exsudáty (5)',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Výsledok detekcie pre exsudáty (6)',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Výsledok detekcie pre exsudáty (7)',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Výsledok detekcie pre exsudáty (8)',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Eukl. vzdialenosť makule od opt. disku',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Priemer optického disku',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Výsledok klasifikácie AM/FM',
                        min: 0,
                        max: 1,
                    },
                    {
                        attribute: 'Výstup (má alebo nemá znaky DR)',
                        min: 0,
                        max: 1,
                    },
                ]
    }
}

renderInput = (array) => {
    return array.map((arr,i) => {
        console.log(arr); 
        return (
            <Input key={i} attribute={arr.attribute} min={arr.min} max={arr.max}/>
        )
    });
}

    render(){
        return(
            <div  className="section-application">
                <p style={{fontSize: '2.5rem',marginRight: '120rem', marginTop: '1rem'}}>Atribúty</p>
                <div style={{display: 'flex', marginTop: '2rem'}}>
                    <div style={{display: 'flex',flexWrap: 'wrap', width: '90rem'}}>
                        {this.renderInput(this.state.attribute)}
                    </div>
                </div> 
                <div>
                    <button className="button">TRAIN</button>  
                </div>
            </div>
            
        );
    }
}
export default Application;

