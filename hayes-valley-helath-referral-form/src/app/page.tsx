'use client'

import ReferralPage from './pages/referral-page/referral-page';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "@fontsource/montserrat/500.css";
import { red } from '@mui/material/colors';
import { Provider } from 'react-redux';
import store from './store';


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    allVariants: {
      color: '#3A719B'
    },
    h1: {
      weight: 500,
      fontSize: 30,
      lineHeight: '40px',
      textAlign: 'center',
      color: '#0B2B5B'
    },
    h2: {
      weight: 500,
      fontSize: 26,
      lineHeight: '40px',
      textAlign: 'center',
      color: '#0B2B5B'
    },
    h3: {
      weight: 500,
      fontSize: 24,
      lineHeight: '32px',
      textAlign: 'center',
      color: '#0B2B5B'
    },
    subtitle1: {
      weight: 500,
      fontSize: 20,
      lineHeight: '32px',
      textAlign: 'center',
      color: '#0B2B5B'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: '999px',
          padding: '12px',
          lineHeight: '24px'
        },
      },
    }
  },
  palette: {
    primary: {
      main: '#142B58',
      dark: '#254B7A',
      contrastText: "#FFF"
    },

  }
});

export default function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ReferralPage />
      </ThemeProvider>
    </Provider>
  )
}
