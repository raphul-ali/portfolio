import React, { useEffect, useState } from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import Lottie from 'lottie-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface HeroProps {
  animationData: any;
}

const Hero: React.FC<HeroProps> = ({ animationData }) => {
  const [currentProfession, setCurrentProfession] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  const professions = [
    "Full Stack Developer",
    "React Developer",
    "TypeScript Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isRemoving) {
        setTimeout(() => {
          setIsRemoving(false);
          setCurrentProfession((prev) => (prev + 1) % professions.length);
        }, 600);
      } else {
        setTimeout(() => {
          setIsRemoving(true);
        }, 2000);
      }
    }, 3000);

    return () => clearInterval(typingInterval);
  }, [isRemoving, professions.length]);

  return (
    <Container maxWidth="lg" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.1
          }}
        />
      </div>

      <Box className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h1"
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          >
            Hi, I'm Raphul
          </Typography>

          <Typography
            variant="h2"
            className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300"
          >
            {professions[currentProfession]}
          </Typography>

          <Typography
            variant="body1"
            className="text-lg mb-8 text-gray-600 dark:text-gray-400"
          >
            I build exceptional digital experiences that make people's lives easier.
            Let's work together to bring your ideas to life.
          </Typography>

          <div className="flex space-x-4 mb-8">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="rounded-full"
              href="#contact"
            >
              Get in Touch
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="rounded-full"
              href="#projects"
            >
              View Projects
            </Button>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl" />
            <img
              src="/profile.jpg"
              alt="Profile"
              className="relative rounded-full w-64 h-64 object-cover mx-auto border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </div>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Hero; 