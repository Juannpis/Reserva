

import TextField from '@mui/material/TextField';


function CajoncitoDisabled({title}) {
  return (
    
<TextField
          disabled
          label={title}
          style={{ width: '150%' , margin: '5%'}}
        />
          
  );
}

export default CajoncitoDisabled;
