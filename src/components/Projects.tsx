import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Firebase", "Material UI", "TypeScript"],
    githubUrl: "https://github.com/yourusername/taskmanager",
    liveUrl: "https://taskmanager-demo.com"
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation application using OpenAI's DALL-E API with custom prompt engineering.",
    image: "/projects/ai-image.jpg",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yourusername/ai-image-generator",
    liveUrl: "https://ai-image-demo.com"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard with real-time data visualization and reporting.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://dashboard-demo.com"
  }
];

const Projects: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-20" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    className="object-cover"
                  />
                  <CardContent className="flex-grow">
                    <Typography variant="h5" className="font-bold mb-2">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-600 dark:text-gray-400 mb-4"
                    >
                      {project.description}
                    </Typography>
                    <Box className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100"
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions className="p-4 pt-0">
                    <Button
                      startIcon={<FaGithub />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        startIcon={<FaExternalLinkAlt />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                      >
                        Live Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects; 