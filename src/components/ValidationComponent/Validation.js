import React from 'react';
const validation = (props) => {
  var output_string;
  if(props.txtlen > 5) {
      output_string = (<p>Text long enough!</p>);
  }
  else 
      output_string = (<p>Text very short!</p>);
  return (<div>
            {output_string}
          </div>  
  )
};

export default validation;