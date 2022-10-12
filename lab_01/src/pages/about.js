import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          La Tiendita de DOn pepe es una tienda dedicada a vender productos
          de todo tipo, sea cual sea lo que desees comprar, aquí lo encontraras.
        </Typography>
        <Link to="/">Pagina principal</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
