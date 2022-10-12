import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Album from '../components/Album';
export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Celulares
        </Typography>
        <Album />
        <Link to="/">Menu principal</Link>
        {//<ProTip />
        //<Copyright />
        }
        
      </Box>
    </Container>
  );
}
