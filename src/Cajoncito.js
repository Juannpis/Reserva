import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';


function Cajoncito({title,value}) {
  return (
    
<TextField
          
          id="outlined-input"
          label={title}
          style={{ width: '150%' , margin: '5%'}}
        />
          
  );
}

export default Cajoncito;
