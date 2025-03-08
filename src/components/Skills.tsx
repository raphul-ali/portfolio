import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Material-UI'],
  },
  {
    title: 'Programming Languages',
    skills: ['C', 'C++', 'PHP', 'Python', 'Java'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Webpack'],
  },
  {
    title: 'Other Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Agile Methodology'],
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
            Skills
          </Typography>
        </motion.div>

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