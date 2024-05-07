'use client';
import CajoncitoDisabled from '/Users/davidrodriguez/Next/reserva2/src/app/CajoncitoDisabled';
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
    router.push('/otra-pagina');
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
          <Button variant="contained">Regresar</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
      <div className='title'>
        <p >
          Confirmar Datos
        </p>
        
      </div>
      <Divider></Divider>
      <br></br>
      <br></br>
      <Stack>
      <Stack spacing={60} direction='row' justifyContent='center'>
        <Stack spacing={1} direction='column'>
          <CajoncitoDisabled title={"Nombre"} />
          <CajoncitoDisabled title={"Apellidos"} />
          <CajoncitoDisabled title={"Correo"} />
          <CajoncitoDisabled title={"Teléfono"} />
          <CajoncitoDisabled title={"Dirección en caso de pérdida de equipaje"} />
        </Stack>
        <Stack spacing={1} direction='column' alignItems='center'>
          <p><strong>Contacto de emergencia: </strong></p>
          <p>Es necesario un contacto de emergencia</p>
          <CajoncitoDisabled title={"Nombre"} />
          <CajoncitoDisabled title={"Apellidos"} />
          <CajoncitoDisabled title={"Teléfono"} />
        </Stack>
      </Stack>
      </Stack>
      
      <Box className='box' textAlign='right' >

      </Box>
      <br />
      <br />
<div className="Footer" >
<Divider></Divider>
<div className="Bottom" >
        
        <br />
        <Stack spacing={50} direction='row'>
          <Stack spacing={-0.1} direction='column'>
            <h1>Reserva #0000</h1>
            <h3>Estado de la Reserva: SIN PAGAR</h3>
          </Stack>
          <Button variant="contained">Confirmar Reserva</Button>
        </Stack>
      </div>
</div>
      
      

    </div>
  );
}
