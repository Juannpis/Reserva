

import TextField from '@mui/material/TextField';


function Cajoncito({title}) {
  return (
    
<TextField
          
          id="outlined-input"
          label={title}
          style={{ width: '150%' , margin: '5%'}}
        />
          
  );
}

export default Cajoncito;
