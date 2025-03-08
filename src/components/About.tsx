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
                Hello! I'm Raphul, a dedicated Full Stack Developer with 2 years of experience in building robust web and mobile applications. With an MCA degree completed in November 2022, I combine strong academic foundations with practical industry experience.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#8892b0',
                  mb: 2,
                }}
              >
                I recently led the development of "Vahan," a ride-hailing mobile application built with React Native and powered by AWS cloud services. This project showcases my ability to implement complex, production-ready applications using modern technologies like GraphQL, AWS Lambda, and DynamoDB to create scalable backend solutions.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#8892b0',
                  mb: 2,
                }}
              >
                My expertise spans both front-end and back-end development, with a particular focus on creating seamless user experiences while ensuring robust backend functionality. I'm passionate about leveraging modern technologies to build scalable, efficient solutions that meet business objectives.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#8892b0',
                  mb: 4,
                }}
              >
                Core technologies I work with:
              </Typography>

              <Grid container spacing={2}>
                {[
                  'React.js',
                  'React Native',
                  'AWS Amplify',
                  'GraphQL',
                  'PHP',
                  'MySQL',
                  'DynamoDB',
                  'JavaScript',
                ].map((skill) => (
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