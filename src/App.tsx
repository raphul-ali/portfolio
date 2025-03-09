import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ADB5', // Turquoise
      light: '#00FFF5',
      dark: '#008F96',
    },
    secondary: {
      main: '#EEEEEE', // Light gray
      light: '#FFFFFF',
      dark: '#CCCCCC',
    },
    background: {
      default: '#222831', // Dark gray
      paper: '#393E46', // Lighter gray
    },
    text: {
      primary: '#EEEEEE',
      secondary: '#AAAAAA',
    },
    error: {
      main: '#FF6B6B',
    },
    success: {
      main: '#00ADB5',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#EEEEEE',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#EEEEEE',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#EEEEEE',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      color: '#AAAAAA',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '10px 20px',
          fontSize: '1rem',
          transition: 'all 0.2s ease-in-out',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0, 173, 181, 0.2)',
          },
        },
        contained: {
          backgroundColor: '#00ADB5',
          color: '#EEEEEE',
          '&:hover': {
            backgroundColor: '#008F96',
          },
        },
        outlined: {
          borderColor: '#00ADB5',
          color: '#00ADB5',
          '&:hover': {
            backgroundColor: 'rgba(0, 173, 181, 0.1)',
            borderColor: '#008F96',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#393E46',
          boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 20px 30px -15px rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#393E46',
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#222831',
          color: '#EEEEEE',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#00ADB5',
          textDecoration: 'none',
          '&:hover': {
            color: '#008F96',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
