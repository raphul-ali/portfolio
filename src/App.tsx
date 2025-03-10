import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import Lottie from 'lottie-react';
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

  return (
    <div className="min-h-screen">
      {/* Background Animation */}
      <div className="background-animation">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </div>
      
      <button 
        className={`hamburger-button ${isDrawerOpen ? 'active' : ''}`}
        onClick={toggleDrawer}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div 
        className={`drawer-overlay ${isDrawerOpen ? 'visible' : ''}`}
        onClick={closeDrawer}
      ></div>

      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-items">
          <button
            className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleSectionClick('about')}
          >
            About
          </button>
          <button
            className={`mobile-nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleSectionClick('skills')}
          >
            Skills
          </button>
          <button
            className={`mobile-nav-item ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleSectionClick('experience')}
          >
            Experience
          </button>
          <button
            className={`mobile-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleSectionClick('projects')}
          >
            Projects
          </button>
          <button
            className={`mobile-nav-item ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => handleSectionClick('education')}
          >
            Education
          </button>
          <button
            className={`mobile-nav-item ${activeSection === 'interests' ? 'active' : ''}`}
            onClick={() => handleSectionClick('interests')}
          >
            Interests
          </button>
          <button
            className={`mobile-nav-item ${activeSection === 'languages' ? 'active' : ''}`}
            onClick={() => handleSectionClick('languages')}
          >
            Languages
          </button>
        </nav>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-items">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-item ${activeSection === id ? 'active' : ''}`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </div>
        
        <div className="nav-actions">
          <button onClick={toggleTheme} className="nav-button theme-toggle-btn">
            {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            <span>{themeButtonText}</span>
          </button>
        </div>
      </nav>

      <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {/* Profile Section */}
          <Grid item xs={12} md={4}>
            <div className="profile-section">
              <div className="profile-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/profile_pic.png`} 
                  alt="Raphul Ali"
                />
              </div>
              <p className="profile-name">
                Raphul Ali
              </p>
              <div className="profile-title">
                {professions[currentProfession]}
              </div>
              

              <div className="contact-list">
                <a href="mailto:raphulali@gmail.com" 
                  className="contact-item"
                  style={{ '--item-index': 0 } as React.CSSProperties}>
                  <EmailIcon /> raphulali@gmail.com
                </a>
                <a href="tel:9365158854" 
                  className="contact-item"
                  style={{ '--item-index': 1 } as React.CSSProperties}>
                  <PhoneIcon /> 9365158854
                </a>
                <div className="contact-item"
                  style={{ '--item-index': 2 } as React.CSSProperties}>
                  <LocationOnIcon /> 
                  <span>Rupai siding, Tinsukia, Assam</span>
                </div>
              </div>

              <div className="profile-buttons">
                <a 
                  href={`${process.env.PUBLIC_URL}/Raphul_Ali_CV.pdf`} 
                  download 
                  className="profile-button primary"
                >
                  <DownloadOutlinedIcon /> Download CV
                </a>
                <a 
                  href="mailto:raphulali@gmail.com?subject=Hi Raphul!"
                  className="profile-button secondary"
                >
                  <EmailIcon /> Say Hi!
                </a>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/raphul-ali-29b6b6154" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--item-index': 0 } as React.CSSProperties}>
                  <LinkedInIcon /> LinkedIn
                </a>
                <a href="https://github.com/raphul-ali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--item-index': 1 } as React.CSSProperties}>
                  <GitHubIcon /> GitHub
                </a>
              </div>

              <button 
                className="see-work-button"
                onClick={() => scrollToSection('skills')}
              >
                See my work
                <span className="chevrons">
                  <span className="chevron"></span>
                  <span className="chevron"></span>
                  <span className="chevron"></span>
                </span>
              </button>
            </div>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8} className="main-content">
            {/* About Section */}
            <section id="about" className={`section section-about ${activeSection === 'about' ? 'active' : ''}`}>
              <h2 className="section-title">About Me</h2>
              <div className="card">
                <Typography variant="body1" className="space-y-4">
                  <p>
                    Dedicated Full Stack Developer with 2 years of experience building robust web and mobile applications. 
                    Proficient in both front-end and back-end technologies with expertise in PHP, JavaScript, React.js, and React Native.
                  </p>
                  <p>
                    Skilled in database management using MySQL and DynamoDB, with experience implementing AWS Amplify for seamless cloud integration.
                    Recently developed "Vahan," a ride-hailing mobile application built with React Native and powered by AWS cloud services.
                  </p>
                  <p>
                    Currently working as a Full-stack Developer at Marketer Ankit Consulting (MAC) and as a Freelance Software Developer on Upwork,
                    delivering scalable, efficient solutions that meet business objectives and enhance user experience.
                  </p>
                </Typography>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className={`section section-skills ${activeSection === 'skills' ? 'active' : ''}`}>
              <h2 className="section-title">What I'm Doing</h2>
              <div className="skills-grid">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div className="card" key={index}>
                      <div className="flex items-start gap-4">
                        <div className={`section-icon-container ${category.title.toLowerCase().split(' ')[0]}`}>
                          <IconContext.Provider value={{ size: '24px' }}>
                            <Icon />
                          </IconContext.Provider>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{category.description}</p>
                          <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className={`skill-tag ${skill.className}`}>
                                <img src={`${process.env.PUBLIC_URL}/${skill.icon}`} alt={skill.name} />
                                {skill.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className={`section section-experience ${activeSection === 'experience' ? 'active' : ''}`}>
              <h2 className="section-title">Experience</h2>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div className="card experience-card">
                    <h3 className="text-xl font-bold mb-2">Full-stack Developer</h3>
                    <p style={{ color: 'var(--text-secondary)' }} className="mb-2">
                      Marketer Ankit Consulting (MAC) · Full-time
                    </p>
                    <p style={{ color: 'var(--text-tertiary)' }} className="mb-4">
                      Mar 2022 - Present · Mumbai, Maharashtra, India (Remote)
                    </p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Working as a Full Stack Developer, responsible for developing and maintaining client websites
                      and applications using modern web technologies.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="card experience-card">
                    <h3 className="text-xl font-bold mb-2">Freelance Software Developer</h3>
                    <p style={{ color: 'var(--text-secondary)' }} className="mb-2">
                      Upwork · Freelance
                    </p>
                    <p style={{ color: 'var(--text-tertiary)' }} className="mb-4">
                      Jan 2023 - Present
                    </p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Delivering high-quality web and mobile applications for various clients globally.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`section section-projects ${activeSection === 'projects' ? 'active' : ''}`}>
              <h2 className="section-title">Projects</h2>
              <div className="project-grid">
                {([
                  {
                    title: "Vahan - Ride Hailing Application",
                    description: "A full-featured ride-hailing mobile application built with React Native and AWS services. Implemented complex features using GraphQL, AWS Lambda, and DynamoDB for scalable backend solutions.",
                    icon: FaMobile as IconComponent,
                    iconClass: "mobile",
                    tech: [
                      { name: "React Native", icon: "/logos/react.svg" },
                      { name: "AWS", icon: "/logos/aws.svg" },
                      { name: "GraphQL", icon: "/logos/graphql.svg" },
                      { name: "DynamoDB", icon: "/logos/dynamodb.svg" }
                    ]
                  },
                  {
                    title: "Client Websites Portfolio",
                    description: "Developed and maintained multiple client websites at MAC, focusing on responsive design, performance optimization, and modern user interfaces.",
                    icon: FaCode as IconComponent,
                    iconClass: "web",
                    tech: [
                      { name: "React.js", icon: "/logos/react.svg" },
                      { name: "PHP", icon: "/logos/php.svg" },
                      { name: "MySQL", icon: "/logos/mysql.svg" },
                      { name: "HTML5", icon: "/logos/html5.svg" },
                      { name: "CSS3", icon: "/logos/css3.svg" }
                    ]
                  }
                ] as Project[]).map((project, index) => (
                  <div className="project-card" key={index}>
                    <div className={`project-icon-container ${project.iconClass}`}>
                      <IconContext.Provider value={{ size: '24px' }}>
                        <project.icon />
                      </IconContext.Provider>
                    </div>
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p style={{ color: 'var(--text-secondary)' }} className="mb-4">{project.description}</p>
                    <div className="project-tech-stack">
                        {project.tech.map((tech, i) => (
                        <div key={i} className="project-tech-tag">
                          <img src={`${process.env.PUBLIC_URL}/${tech.icon}`} alt={tech.name} />
                          {tech.name}
                        </div>
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className={`section section-education ${activeSection === 'education' ? 'active' : ''}`}>
              <h2 className="section-title">Education</h2>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <div className="card">
                    <h3 className="font-bold">Masters in Computer Application</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Dibrugarh University (2022)</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="card">
                    <h3 className="font-bold">Bachelor in Science</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Graduated with honours in Physics</p>
                    <p style={{ color: 'var(--text-secondary)' }}>Dibrugarh University (2018)</p>
                  </div>
                </Grid>
              </Grid>
            </section>

            {/* Interests Section */}
            <section id="interests" className={`section section-interests ${activeSection === 'interests' ? 'active' : ''}`}>
              <h2 className="section-title">Interests</h2>
              <div className="card">
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: FaPlane as IconComponent, text: 'Travelling' },
                    { icon: FaBook as IconComponent, text: 'Books' },
                    { icon: FaMusic as IconComponent, text: 'Listening to Music' },
                    { icon: FaChess as IconComponent, text: 'Playing Chess' }
                  ].map((interest, index) => {
                    const Icon = interest.icon;
                    return (
                      <div className="skill-tag" key={index}>
                        <IconContext.Provider value={{ size: '20px' }}>
                          <Icon />
                        </IconContext.Provider>
                        {interest.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section id="languages" className={`section section-languages ${activeSection === 'languages' ? 'active' : ''}`}>
              <h2 className="section-title">Languages</h2>
              <div className="card">
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'English', level: 'Professional' },
                    { name: 'Hindi', level: 'Native' },
                    { name: 'Assamese', level: 'Native' }
                  ].map((language, index) => {
                    const Icon = FaLanguage as IconComponent;
                    return (
                      <div className="skill-tag" key={index}>
                        <IconContext.Provider value={{ size: '20px' }}>
                          <Icon />
                        </IconContext.Provider>
                        <span className="font-semibold">{language.name}</span>
                        <span className="text-sm text-secondary"> - {language.level}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
