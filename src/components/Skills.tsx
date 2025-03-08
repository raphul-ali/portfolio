import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import CloudIcon from '@mui/icons-material/Cloud';

const services = [
  {
    title: 'Web Development',
    icon: <WebIcon fontSize="large" />,
    description: 'Full-stack web applications with modern frameworks and responsive design',
  },
  {
    title: 'Mobile Application Development',
    icon: <PhoneAndroidIcon fontSize="large" />,
    description: 'Cross-platform mobile apps using React Native',
  },
  {
    title: 'Custom Software Development',
    icon: <CodeIcon fontSize="large" />,
    description: 'Tailored software solutions for specific business needs',
  },
  {
    title: 'Web Design',
    icon: <BrushIcon fontSize="large" />,
    description: 'User-friendly and visually appealing interface design',
  },
  {
    title: 'Android Development',
    icon: <PhoneAndroidIcon fontSize="large" />,
    description: 'Native and hybrid Android applications',
  },
  {
    title: 'Cloud Application Development',
    icon: <CloudIcon fontSize="large" />,
    description: 'AWS-powered scalable cloud applications',
  },
];

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'React Native', 'JavaScript/ECMAScript', 'HTML5', 'CSS3', 'Material-UI'],
  },
  {
    title: 'Backend Development',
    skills: ['PHP', 'GraphQL', 'RESTful APIs', 'Node.js'],
  },
  {
    title: 'Database & Cloud',
    skills: ['MySQL', 'DynamoDB', 'AWS Amplify', 'AWS Lambda', 'Cloud Integration'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'VS Code', 'AWS Console', 'npm/yarn', 'Postman'],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
              mb: 6,
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
            Services & Skills
          </Typography>
        </motion.div>

        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: (theme) => theme.palette.background.paper,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#fff',
                        mb: 1,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#8892b0',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Technical Skills
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    background: (theme) => theme.palette.background.paper,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      mb: 2,
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Grid container spacing={2}>
                    {category.skills.map((skill) => (
                      <Grid item xs={6} key={skill}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#8892b0',
                            display: 'flex',
                            alignItems: 'center',
                            '&:before': {
                              content: '""',
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: (theme) => theme.palette.primary.main,
                              marginRight: '8px',
                            },
                          }}
                        >
                          {skill}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 