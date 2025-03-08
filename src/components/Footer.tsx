import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        background: (theme) => theme.palette.background.default,
        borderTop: '1px solid #233554',
      }}
    >
      <Container>
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: '#8892b0',
          }}
        >
          Designed & Built by{' '}
          <Link
            href="https://github.com/raphul-ali"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: (theme) => theme.palette.primary.main,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Raphul Ali
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 