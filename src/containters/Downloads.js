import React from 'react';
import Box from '../components/box/Box'
class Downloads extends React.Component {

    render(){
        return(
            <div className="section-downloads" >
                <div className="downloads">
                    <div className="downloads-table">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Názov súboru</th>
                                <th>Typ</th>
                                <th>Dátum</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td style={{cursor:'pointer'}}>Úvodná prezentácia</td>
                                <td>Prezentácia</td>
                                <td>14.03.2019</td>
                            </tr>
                            {/* <tr>
                                <td>Cell 1</td>
                                <td style={{cursor:'pointer'}}>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                            </tr>
                            <tr>
                                <td>Cell 1</td>
                                <td style={{cursor:'pointer'}}>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                            </tr>
                            <tr>
                                <td>Cell 1</td>
                                <td style={{cursor:'pointer'}}>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                            </tr>
                            <tr>
                                <td>Cell 1</td>
                                <td style={{cursor:'pointer'}}>Cell 2</td>
                                <td>Cell 3</td>
                                <td>Cell 4</td>
                            </tr> */}
                        </tbody>
                    </table>
                    </div>
                </div> 
            </div>
        );
    }
}
export default Downloads;

