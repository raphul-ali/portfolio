import React from 'react';
import { Box, Container, Typography, Grid, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 15,
        background: (theme) => theme.palette.background.default,
      }}
    >
      <Container maxWidth="md">
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
              mb: 2,
              textAlign: 'center',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#8892b0',
              mb: 6,
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              mb: 6,
            }}
          >
            <Grid item>
              <IconButton
                href="https://github.com/raphul-ali"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#8892b0',
                  '&:hover': {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                size="large"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://www.linkedin.com/in/raphul-ali"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#8892b0',
                  '&:hover': {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                size="large"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="mailto:raphulali@gmail.com"
                sx={{
                  color: '#8892b0',
                  '&:hover': {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                size="large"
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="tel:+919365158854"
                sx={{
                  color: '#8892b0',
                  '&:hover': {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                size="large"
              >
                <PhoneIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#8892b0',
                textAlign: 'center',
              }}
            >
              <EmailIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              raphulali@gmail.com
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#8892b0',
                textAlign: 'center',
              }}
            >
              <PhoneIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              +91 9365158854
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              href="mailto:raphulali@gmail.com"
              size="large"
              sx={{
                borderWidth: '2px',
                mt: 2,
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              Say Hello
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 