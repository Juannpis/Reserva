
import './App.css';
import Cajoncito from './Cajoncito'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function App() {
  return (


    <div className="App" >
      <div className='title'>
        <p >
          Ingresar información del pasajero
        </p>
        
      </div>
      <br></br>
      <br></br>
      <Stack spacing={60} direction='row' justifyContent='center'>
        <Stack spacing={1} direction='column'>
          <Cajoncito title={"Nombre"} />
          <Cajoncito title={"Apellidos"} />
          <Cajoncito title={"Correo"} />
          <Cajoncito title={"Teléfono"} />
          <Cajoncito title={"Dirección en caso de pérdida de equipaje"} />
        </Stack>
        <Stack spacing={1} direction='column' alignItems='center'>
          <p><strong>Contacto de emergencia: </strong></p>
          <p>Es necesario un contacto de emergencia</p>
          <Cajoncito title={"Nombre"} />
          <Cajoncito title={"Apellidos"} />
          <Cajoncito title={"Teléfono"} />
        </Stack>
      </Stack>
      <Box className='box' textAlign='right' >
      <Button className='save' variant="contained">Guardar</Button>
      </Box>
      
      

    </div>

  );
}


export default App;
