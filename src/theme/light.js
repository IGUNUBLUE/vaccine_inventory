import { createTheme } from '@mui/material/styles';

const light = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          '& .MuiChip-label': {
            fontWeight: 'bold',
            textTransform: 'capitalize',
            fontSize: 12
          }
        }
      }
    }
  },
  typography: {
    fontSize: 14
  }
});

export default light;
