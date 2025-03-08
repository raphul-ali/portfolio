import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItemButton 
          key={item}
          onClick={() => scrollToSection(item)}
        >
          <ListItemText 
            primary={item} 
            sx={{
              color: theme.palette.primary.main,
              textAlign: 'center'
            }}
          />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1,
              color: theme.palette.primary.main,
              fontWeight: 'bold'
            }}
          >
            Raphul Ali
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: '#fff',
                    mx: 1,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: theme.palette.background.default
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar; 