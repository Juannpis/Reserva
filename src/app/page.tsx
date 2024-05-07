'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Cajoncito from '/Users/davidrodriguez/Next/reserva2/src/app/Cajoncito.js';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    // Navegar a la página deseada
    router.push('page2');
  };

  const [bloques, setBloques] = useState<any>([]);

  const agregarBloque = () => {
    const nuevoBloque = (
      <div key={bloques.length + 1}>
        <Stack spacing={60} direction='row' justifyContent='center'>
          <Stack spacing={1} direction='column'>
            <Cajoncito title={"Nombre"} type={"disabled"}/>
            <Cajoncito title={"Apellidos"} type={"disabled"}/>
            <Cajoncito title={"Correo"} type={"disabled"}/>
            <Cajoncito title={"Teléfono"} type={"disabled"}/>
            <Cajoncito title={"Dirección en caso de pérdida de equipaje"} type={"disabled"}/>
          </Stack>
          <Stack spacing={1} direction='column' alignItems='center'>
            <p><strong>Contacto de emergencia: </strong></p>
            <p>Es necesario un contacto de emergencia</p>
            <Cajoncito title={"Nombre"} type={"disabled"}/>
            <Cajoncito title={"Apellidos"} type={"disabled"}/>
            <Cajoncito title={"Teléfono"} type={"disabled"}/>
          </Stack>
        </Stack>
      </div>
    );

    setBloques([...bloques, nuevoBloque]);
  };
  
  return (
    <div className="App" >
      <AppBar component="nav" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , color: "#1E88E5", marginLeft: "20%"}}
          >
            Singapur Airlines
          </Typography>
          <Stack direction="row" spacing={10}>
          <Button variant="contained">Historial</Button>
          <Button variant="contained">Regresar</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
      <div className='title'>
        <p >
          Ingresar información del pasajero
        </p>
        
      </div>
      <Divider></Divider>
      <br></br>
      <br></br>
      <Button className="floatingButton" variant="contained" onClick={agregarBloque}><Stack direction="column" spacing={0}><Typography variant="caption">
            Agregar
          </Typography>
          <Typography variant="caption">
            pasajero
          </Typography>
          <Icon sx={{ alignSelf:"center" }}><AddIcon></AddIcon></Icon></Stack></Button>
      <Stack>
      <Stack spacing={60} direction='row' justifyContent='center'>
        <Stack spacing={1} direction='column'>
          <Cajoncito title={"Nombre"}/>
          <Cajoncito title={"Apellidos"}/>
          <Cajoncito title={"Correo"}/>
          <Cajoncito title={"Teléfono"}/>
          <Cajoncito title={"Dirección en caso de pérdida de equipaje"}/>
        </Stack>
        <Stack spacing={1} direction='column' alignItems='center'>
          <p><strong>Contacto de emergencia: </strong></p>
          <p>Es necesario un contacto de emergencia</p>
          <Cajoncito title={"Nombre"}/>
          <Cajoncito title={"Apellidos"}/>
          <Cajoncito title={"Teléfono"}/>
        </Stack>
      </Stack>
      <div>
      {bloques.map((bloque: JSX.Element, index: number) => (
        <div key={index}><Divider>Pasajero {index+2}</Divider>{bloque}</div>
      ))}
    </div>
      </Stack>
      
      <Box className='box' textAlign='right' >
      <Button className='save' variant="contained" onClick={handleClick}>Continuar</Button>
      </Box>
      <br />
      <br />
      
      

    </div>
  );
}
