'use client';
import {AppBar, Toolbar, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const handleClick = () => {
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
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
      <div className='title'>
        <h2 >
          Historial de Reservas
        </h2>
        
      </div>

      <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="simple table">
        <TableHead sx={{bgcolor: "#B9B9C4" }}>
          <TableRow>
            <TableCell align="center"><h3>Código Reserva</h3></TableCell>
            <TableCell align="center"><h3>Código Vuelo</h3></TableCell>
            <TableCell align="center"><h3>Destinos</h3></TableCell>
            <TableCell align="center"><h3>Salida</h3></TableCell>
            <TableCell align="center"><h3>Llegada</h3></TableCell>
            <TableCell align="center"><h3>Estado de la Reserva</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow sx={{  }}>
              <TableCell align="center">Reserva #0000</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">SIN PAGAR</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
