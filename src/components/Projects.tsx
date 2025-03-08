import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React.js and Material-UI. Features smooth animations, responsive design, and a clean user interface.',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Framer Motion'],
    github: 'https://github.com/raphul-ali/portfolio',
    live: 'https://raphul-ali.github.io/portfolio',
  },
  {
    title: 'Project 2',
    description: 'Description of your second project. Replace this with actual project details.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project 3',
    description: 'Description of your third project. Replace this with actual project details.',
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project 4',
    description: 'Description of your fourth project. Replace this with actual project details.',
    technologies: ['C++', 'Qt', 'SQLite'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
            Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: (theme) => theme.palette.background.paper,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#8892b0',
                        mb: 2,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            mr: 1,
                            mb: 1,
                            background: (theme) => theme.palette.background.default,
                            color: (theme) => theme.palette.primary.main,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2 }}>
                    <Button
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mr: 1 }}
                    >
                      Code
                    </Button>
                    <Button
                      startIcon={<LaunchIcon />}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 