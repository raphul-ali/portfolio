import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: (theme) => theme.palette.background.default,
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: (theme) => theme.palette.primary.main,
              mb: 2,
              fontFamily: 'monospace',
            }}
          >
            Hi, my name is
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Raphul Ali.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#8892b0',
              mb: 4,
            }}
          >
            Full Stack Developer
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#8892b0',
              mb: 4,
              maxWidth: '600px',
            }}
          >
            I'm a Full Stack Developer with 2 years of experience building robust web and mobile applications. 
            Specializing in React.js, React Native, and AWS cloud services, I create scalable solutions that deliver exceptional user experiences.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="#projects"
            sx={{
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
              },
            }}
          >
            Check out my work!
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 