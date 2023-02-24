import { useTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

export default function GlobalCss() {
  const theme = useTheme();
  return (
    // The current theme context will be present in the function (theme) => theme
    <GlobalStyles
      styles={() => ({
        '&::-webkit-scrollbar': {
          width: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: theme.palette.grey[500],
          height: '100px'
        },
        strong: {
          textTransform: 'capitalize'
        }
      })}
    />
  );
}
