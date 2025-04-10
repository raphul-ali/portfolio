import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  FaCode,
  FaServer,
  FaMobile,
  FaCloud,
  FaDatabase,
  FaTools
} from 'react-icons/fa';

interface SkillCategory {
  title: string;
  icon: React.ComponentType;
  description: string;
  skills: {
    name: string;
    level: number;
    icon: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: FaCode,
    description: "Creating responsive and interactive user interfaces",
    skills: [
      { name: "React", level: 90, icon: "/logos/react.svg" },
      { name: "TypeScript", level: 85, icon: "/logos/typescript.svg" },
      { name: "Next.js", level: 80, icon: "/logos/nextjs.svg" },
      { name: "Tailwind CSS", level: 85, icon: "/logos/tailwind.svg" },
      { name: "Material UI", level: 80, icon: "/logos/materialui.svg" }
    ]
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Building robust and scalable server applications",
    skills: [
      { name: "Node.js", level: 85, icon: "/logos/node.svg" },
      { name: "Express", level: 80, icon: "/logos/express.svg" },
      { name: "GraphQL", level: 75, icon: "/logos/graphql.svg" },
      { name: "REST APIs", level: 90, icon: "/logos/api.svg" }
    ]
  },
  {
    title: "Database",
    icon: FaDatabase,
    description: "Working with various database technologies",
    skills: [
      { name: "MongoDB", level: 85, icon: "/logos/mongodb.svg" },
      { name: "PostgreSQL", level: 80, icon: "/logos/postgresql.svg" },
      { name: "MySQL", level: 75, icon: "/logos/mysql.svg" },
      { name: "Redis", level: 70, icon: "/logos/redis.svg" }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: FaCloud,
    description: "Deploying and managing applications in the cloud",
    skills: [
      { name: "AWS", level: 80, icon: "/logos/aws.svg" },
      { name: "Docker", level: 75, icon: "/logos/docker.svg" },
      { name: "CI/CD", level: 80, icon: "/logos/cicd.svg" },
      { name: "Git", level: 90, icon: "/logos/git.svg" }
    ]
  },
  {
    title: "Mobile Development",
    icon: FaMobile,
    description: "Creating cross-platform mobile applications",
    skills: [
      { name: "React Native", level: 85, icon: "/logos/react.svg" },
      { name: "Flutter", level: 70, icon: "/logos/flutter.svg" },
      { name: "iOS", level: 65, icon: "/logos/ios.svg" },
      { name: "Android", level: 65, icon: "/logos/android.svg" }
    ]
  },
  {
    title: "Tools & Others",
    icon: FaTools,
    description: "Additional tools and technologies",
    skills: [
      { name: "GitHub", level: 90, icon: "/logos/github.svg" },
      { name: "VS Code", level: 95, icon: "/logos/vscode.svg" },
      { name: "Jira", level: 85, icon: "/logos/jira.svg" },
      { name: "Figma", level: 80, icon: "/logos/figma.svg" }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-20" id="skills">
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
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} lg={4} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  className="p-6 h-full hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <category.icon className="text-3xl text-primary-600 mr-3" />
                    <Typography variant="h5" className="font-semibold">
                      {category.title}
                    </Typography>
                  </div>

                  <Typography
                    variant="body2"
                    className="text-gray-600 dark:text-gray-400 mb-6"
                  >
                    {category.description}
                  </Typography>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-5 h-5 mr-2"
                            />
                            <Typography variant="body2">{skill.name}</Typography>
                          </div>
                          <Typography variant="body2" className="text-gray-600">
                            {skill.level}%
                          </Typography>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-primary-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Skills; 