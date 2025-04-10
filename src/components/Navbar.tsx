import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange, onThemeToggle, isDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setMobileOpen(false);
  };

  const drawer = (
    <List>
      {sections.map((section) => (
        <ListItem
          button
          key={section.id}
          onClick={() => handleSectionClick(section.id)}
          sx={{
            color: activeSection === section.id ? 'primary.main' : 'text.primary',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <ListItemText primary={section.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ backdropFilter: 'blur(8px)' }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <div className="flex-grow" />
        
        {!isMobile && (
          <div className="hidden md:flex space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}

        <IconButton onClick={onThemeToggle} color="inherit">
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 