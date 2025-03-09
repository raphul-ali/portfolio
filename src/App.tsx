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
      main: '#64FFDA', // Teal accent
      light: '#9FFFEB',
      dark: '#38E9C0',
    },
    secondary: {
      main: '#F8F9FA', // Light gray
      light: '#FFFFFF',
      dark: '#E9ECEF',
    },
    background: {
      default: '#0A192F', // Deep navy
      paper: '#112240',
    },
    text: {
      primary: '#F8F9FA',
      secondary: '#8892B0',
    },
    error: {
      main: '#FF6B6B',
    },
    success: {
      main: '#64FFDA',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#1e293b',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#1e293b',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#1e293b',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      color: '#475569',
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
            boxShadow: '0 4px 12px rgba(100, 255, 218, 0.15)',
          },
        },
        contained: {
          backgroundColor: '#64FFDA',
          color: '#0A192F',
          '&:hover': {
            backgroundColor: '#38E9C0',
          },
        },
        outlined: {
          borderColor: '#64FFDA',
          color: '#64FFDA',
          '&:hover': {
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
            borderColor: '#38E9C0',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#112240',
          boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 20px 30px -15px rgba(2, 12, 27, 0.7)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#112240',
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0A192F',
          color: '#F8F9FA',
          boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
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
          color: '#64FFDA',
          textDecoration: 'none',
          '&:hover': {
            color: '#38E9C0',
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
