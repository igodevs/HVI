import React from 'react';

class Input extends React.Component {

    constructor(){
        super();
        this.state = {
            value: -1,
            isCorrect: true,
        }
    }

    componentWillMount(){
        this.setState({value: (this.props.max + this.props.min)/2});
    }

    render(){
        const {attribute, min, max} = this.props;
        return(
            <React.Fragment>{
                this.state.value >= min && this.state.value <= max ?

                <div style={{marginBottom: '1rem', marginRight: '5rem'}}>
                    <p style={{fontSize: '1.4rem'}}>{attribute}</p>
                    <input value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} className='inputBox' type='number' min={min} max={max}/> 
                </div>

                :
                <div style={{marginBottom: '1rem', marginRight: '5rem'}}>
                    <p style={{fontSize: '1.4rem'}}>{attribute}</p>
                    <input value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} className='inputBox' type='number' min={min} max={max}/> 
                    <p style={{color: 'red', fontSize: '1rem'}}>Zadaj spravny tvar v intervale ({min},{max})</p>
                </div>
                
            }</React.Fragment>        
        )
    }
}

export default  Input;
