

import TextField from '@mui/material/TextField';


function Cajoncito({title}) {
  return (
    
<TextField
          required
          label={title}
          style={{ width: '150%' , margin: '5%'}}
        />
          
  );
}

export default Cajoncito;
