import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 15,
        background: (theme) => theme.palette.background.default,
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              '&:after': {
                content: '""',
                flex: 1,
                height: '1px',
                background: '#233554',
                ml: 2,
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#8892b0',
                  mb: 2,
                }}
              >
                Hello! I'm Raphul, a passionate software developer with a Master's in Computer Applications (MCA) completed in November 2022. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#8892b0',
                  mb: 2,
                }}
              >
                My interest in web development started during my undergraduate studies, where I discovered the power of creating interactive and user-friendly interfaces. Since completing my MCA, I've been focused on building professional web applications and expanding my skillset.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#8892b0',
                  mb: 4,
                }}
              >
                Here are a few technologies I've been working with recently:
              </Typography>

              <Grid container spacing={2}>
                {['JavaScript', 'React', 'HTML & CSS', 'PHP', 'C++', 'TypeScript'].map((skill) => (
                  <Grid item xs={6} key={skill}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        background: (theme) => theme.palette.background.paper,
                        color: (theme) => theme.palette.primary.main,
                        textAlign: 'center',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      {skill}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Box
                component="img"
                src="/profile-image.jpg"
                alt="Raphul Ali"
                sx={{
                  maxWidth: '80%',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-7px)',
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 