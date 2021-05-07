import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
         
        {JSON.stringify(this.props.emotions)}         
         <table className="table table-bordered">
            <tbody>
              {
                  this.props.emotions && Object.entries(this.props.emotions).map(function (entry) {
                  return (
                    <tr key={entry}>
                      <td>{entry[0]}</td>
                      <td>{entry[1]}</td>
                    </tr>
                  );
                 })
              }
           </tbody>
           
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;