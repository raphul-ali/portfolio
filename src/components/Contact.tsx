import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="lg" className="py-20" id="contact">
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
          Get in Touch
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper className="p-6 h-full">
                <Typography variant="h5" className="font-semibold mb-6">
                  Contact Information
                </Typography>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="text-primary-600 mr-3" />
                    <Typography>your.email@example.com</Typography>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-primary-600 mr-3" />
                    <Typography>+1 (123) 456-7890</Typography>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-primary-600 mr-3" />
                    <Typography>Your Location</Typography>
                  </div>
                </div>

                <div className="mt-8">
                  <Typography variant="h6" className="font-semibold mb-4">
                    Follow Me
                  </Typography>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                    >
                      <FaGithub size={24} />
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
                </div>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Box className="mt-4">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Box>

                  {submitStatus === 'success' && (
                    <Typography className="text-green-600 mt-2">
                      Message sent successfully!
                    </Typography>
                  )}

                  {submitStatus === 'error' && (
                    <Typography className="text-red-600 mt-2">
                      Failed to send message. Please try again.
                    </Typography>
                  )}
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact; 