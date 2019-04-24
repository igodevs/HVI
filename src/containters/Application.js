import React from 'react';
import working from '../images/workingOnIT.jpg';
import Input from '../components/Input/Input';


class Application extends React.Component {

    constructor(){
        super();
        this.state = {
            value: -1,
            isCorrect: true,
            x1: 1,
            x2: 1,
            x3: 24,
            x4: 24,
            x5: 22,
            x6: 18,
            x7: 16,
            x8: 13,
            x9: 57.709936,
            x10: 23.799994,
            x11: 3.325423,
            x12: 0.234185,
            x13: 0.003903,
            x14: 0.003903,
            x15: 0.003903,
            x16: 0.003903,
            x17: 0.520908,
            x18: 0.144414,
            x19: 0,
            result: undefined,
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
                    ]
        }
    }
    renderInput = (array) => {
        return array.map((arr,i) => {
            let a = `x${i+1}`
            return (
                <React.Fragment>{
                   // this.state.[`x${i}`] >= arr.min && this.state.value <= arr.max ?
    
                    <div key={i} style={{marginBottom: '1rem', marginRight: '5rem'}}>
                        <p style={{fontSize: '1.4rem'}}>{arr.attribute}</p>
                        <input  value={this.state[a]} onChange={(e) => this.setState({[`x${i+1}`]: e.target.value})} className='inputBox' type='number' min={arr.min} max={arr.max}/> 
                    </div>
    
                    // :
                    // <div style={{marginBottom: '1rem', marginRight: '5rem'}}>
                    //     <p style={{fontSize: '1.4rem'}}>{arr.attribute}</p>
                    //     <input value={(arr.min+arr.max)/2} onChange={(e) => this.setState({x1: e.target.value})} className='inputBox' type='number' min={arr.min} max={arr.max}/> 
                    //     <p style={{color: 'red', fontSize: '1rem'}}>Zadaj spravny tvar v intervale ({arr.min},{arr.max})</p>
                    // </div>
                    
                }</React.Fragment>    
            )
        });
    }

    onButtonClickHandler = () => {
        console.log(this.state)
        fetch('http://127.0.0.1:5000/testNN',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                x1: this.state.x1,
                x2: this.state.x2,
                x3: this.state.x3,
                x4: this.state.x4,
                x5: this.state.x5,
                x6: this.state.x6,
                x7: this.state.x7,
                x8: this.state.x8,
                x9: this.state.x9,
                x10: this.state.x10,
                x11: this.state.x11,
                x12: this.state.x12,
                x13: this.state.x13,
                x14: this.state.x14,
                x15: this.state.x15,
                x16: this.state.x16,
                x17: this.state.x17,
                x18: this.state.x18,
                x19: this.state.x19
            })
        })
        .then(res => res.json())
        .then(data => {
            this.setState({result: data.res})
        })
        .catch(console.log)
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
                {
                        this.state.result !== undefined &&
                            <p style={{fontSize: '2rem', marginTop: '1rem'}}>Výsledok: {this.state.result}</p>
                    }
                <div>
                    <button style={{marginTop: '5rem'}} onClick={this.onButtonClickHandler} className="button">TRAIN</button>  
                </div>
            </div>
            
        );
    }
}
export default Application;

