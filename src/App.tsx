import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Lottie from 'lottie-react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { IconContext } from 'react-icons';
import { 
  FaMobile,
  FaCode,
  FaServer,
  FaCloud,
  FaPlane,
  FaBook,
  FaMusic,
  FaChess,
  FaLanguage
} from 'react-icons/fa';

interface SkillProps {
  name: string;
  icon: string;
  className: string;
}

type IconComponent = React.ComponentType<{
  size?: string | number;
  color?: string;
  className?: string;
}>;

interface ProjectTech {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  icon: IconComponent;
  iconClass: string;
  tech: ProjectTech[];
}

interface SkillCategory {
  title: string;
  icon: IconComponent;
  description: string;
  skills: SkillProps[];
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [animationData, setAnimationData] = useState(null);
  const [currentProfession, setCurrentProfession] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [themeButtonText, setThemeButtonText] = useState('Light Mode');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const professions = [
    "Full Stack Web Developer",
    "Software Developer",
    "React Native Developer",
    "ReactJS Developer"
  ];

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'languages', label: 'Languages' },
    { id: 'interests', label: 'Interests' }
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isRemoving) {
        setTimeout(() => {
          setIsRemoving(false);
          setCurrentProfession((prev) => (prev + 1) % professions.length);
        }, 600);
      } else {
        setTimeout(() => {
          setIsRemoving(true);
        }, 2000);
      }
    }, 3000);

    return () => clearInterval(typingInterval);
  }, [isRemoving, professions.length]);

  useEffect(() => {
    fetch('https://assets3.lottiefiles.com/packages/lf20_pwohahvd.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: FaCode as IconComponent,
      description: "Professional development of modern and responsive web applications.",
      skills: [
        { icon: "/logos/react.svg", name: "React.js", className: "react" },
        { icon: "/logos/redux.svg", name: "Redux", className: "redux" },
        { icon: "/logos/materialui.svg", name: "Material UI", className: "mui" },
        { icon: "/logos/tailwind.svg", name: "Tailwind CSS", className: "tailwind" },
        { icon: "/logos/typescript.svg", name: "TypeScript", className: "typescript" },
        { icon: "/logos/javascript.svg", name: "JavaScript", className: "javascript" },
        { icon: "/logos/html5.svg", name: "HTML", className: "html" },
        { icon: "/logos/css3.svg", name: "CSS", className: "css" }
      ]
    },
    {
      title: "Backend Development",
      icon: FaServer as IconComponent,
      description: "Building robust and scalable server-side applications.",
      skills: [
        { icon: "/logos/node.svg", name: "Node.js", className: "node" },
        { icon: "/logos/mysql.svg", name: "MySQL", className: "mysql" },
        { icon: "/logos/mongodb.svg", name: "MongoDB", className: "mongodb" },
        { icon: "/logos/graphql.svg", name: "GraphQL", className: "graphql" },
        { icon: "/logos/postgresql.svg", name: "PostgreSQL", className: "postgresql" },
        { icon: "/logos/firebase.svg", name: "Firebase", className: "firebase" }
      ]
    },
    {
      title: "Mobile Development",
      icon: FaMobile as IconComponent,
      description: "Professional development of applications for Android and iOS.",
      skills: [
        { icon: "/logos/react.svg", name: "React Native", className: "react" },
        { icon: "/logos/redux.svg", name: "Redux", className: "redux" },
        { icon: "/logos/firebase.svg", name: "Firebase", className: "firebase" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud as IconComponent,
      description: "Cloud infrastructure and deployment automation.",
      skills: [
        { icon: "/logos/aws.svg", name: "AWS", className: "aws" },
        { icon: "/logos/docker.svg", name: "Docker", className: "docker" },
        { icon: "/logos/git.svg", name: "Git", className: "git" }
      ]
    }
  ];

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      setThemeButtonText(newTheme === 'light' ? 'Dark Mode' : 'Light Mode');
      return newTheme;
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleIntroExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsIntroComplete(true);
    }, 600); // Match the CSS transition duration
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    closeDrawer();
  };

  if (!isIntroComplete) {
    return (
      <div className="app">
        <div className={`intro-section ${isExiting ? 'exit' : ''}`}>
          <h1 className="intro-text">Hi, I am Raphul.</h1>
          <p className="intro-subtext">Let's see my portfolio.</p>
          <button 
            className="intro-button"
            onClick={handleIntroExit}
          >
            View Portfolio
          </button>
        </div>
      </div>
    );
  }

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: '#3B82F6',
      },
      secondary: {
        main: '#10B981',
      },
      background: {
        default: theme === 'dark' ? '#111827' : '#F9FAFB',
        paper: theme === 'dark' ? '#1F2937' : '#FFFFFF',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '9999px',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <Navbar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onThemeToggle={toggleTheme}
          isDarkMode={theme === 'dark'}
        />
        
        <main className="pt-16">
          <Hero animationData={animationData} />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Raphul. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
