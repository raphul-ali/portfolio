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
      main: '#F81CE5', // Neon pink
      light: '#FF4DFF',
      dark: '#C900B7',
    },
    secondary: {
      main: '#7928CA', // Purple
      light: '#9B4BFF',
      dark: '#5B0099',
    },
    background: {
      default: '#000000', // Pure black
      paper: '#111111', // Dark gray
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#888888',
    },
    error: {
      main: '#FF0000',
    },
    success: {
      main: '#50E3C2',
    },
  },
  typography: {
    fontFamily: "'SF Pro Display', 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      background: 'linear-gradient(45deg, #F81CE5, #7928CA)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      letterSpacing: '0.02em',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '1rem',
          transition: 'all 0.3s ease-in-out',
          background: 'linear-gradient(45deg, #F81CE5, #7928CA)',
          color: '#FFFFFF',
          border: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(248, 28, 229, 0.3)',
          },
        },
        outlined: {
          background: 'transparent',
          border: '2px solid #F81CE5',
          '&:hover': {
            border: '2px solid #F81CE5',
            background: 'rgba(248, 28, 229, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#111111',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 30px rgba(248, 28, 229, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#111111',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(248, 28, 229, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
