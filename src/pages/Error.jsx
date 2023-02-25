import { useRouteError } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Error() {
  const error = useRouteError();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          spacing={0}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Grid item xs={6}>
            <Typography variant="h1">404</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist. Because:
              {error.statusText || error.message}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
