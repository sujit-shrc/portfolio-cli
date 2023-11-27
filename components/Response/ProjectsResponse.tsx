import { FaFolderOpen, FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  keyFeatures: string[];
  link: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description of Project 1. Additional description here.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    keyFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
    link: 'https://github.com/yourusername/project1',
    liveUrl: 'https://yourproject1.com',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2. Additional description here.',
    techStack: ['Angular', 'Express', 'MySQL'],
    keyFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
    link: 'https://github.com/yourusername/project2',
    liveUrl: 'https://yourproject2.com',
  },
];

const ProjectsResponse: React.FC = () => (
  <div className="text-yellow-500">
    <p className="mb-4 flex items-center">
      <FaFolderOpen className="mr-2 text-blue-500" />
      Check out some of my projects:
    </p>

    {projects.map((project, index) => (
      <div key={index} className="mb-4">
        <strong className="text-white">{project.title}:</strong>
        <p className="text-blue-500 ml-6">{project.description}</p>

        <div className="mb-2">
          <strong className="text-white">Tech Stack:</strong>
          <ul className="list-disc ml-10 text-blue-500">
            {project.techStack.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="mb-2">
          <strong className="text-white">Key Features:</strong>
          <ul className="list-disc ml-10 text-blue-500">
            {project.keyFeatures.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <a href={project.link} className="flex items-center underline hover:text-yellow-500 text-yellow-500" target="_blank" rel="noopener noreferrer">
            <FaGithub className="mr-2" />
            {project.link}
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} className="flex items-center ml-4 underline hover:text-yellow-500 text-yellow-500" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default ProjectsResponse;
