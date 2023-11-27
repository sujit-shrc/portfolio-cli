import { FaLinkedin, FaGithub, FaDev, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialResponse: React.FC = () => (
  <div className="text-yellow-500">
    <p className="mb-4">
      Connect with me on various social media platforms:
    </p>

    <div className="flex items-center mb-2">
      <FaLinkedin className="mr-2 text-emerald-500" />
      <strong className="text-white">LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourlinkedin" className="underline hover:text-yellow-500 text-emerald-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourlinkedin</a>
    </div>

    <div className="flex items-center mb-2">
      <FaGithub className="mr-2 text-emerald-500" />
      <strong className="text-white">GitHub:</strong> <a href="https://github.com/yourgithub" className="underline hover:text-yellow-500 text-emerald-500" target="_blank" rel="noopener noreferrer">github.com/yourgithub</a>
    </div>

    <div className="flex items-center mb-2">
      <FaDev className="mr-2 text-emerald-500" />
      <strong className="text-white">dev.to:</strong> <a href="https://dev.to/yourdevto" className="underline hover:text-yellow-500 text-emerald-500" target="_blank" rel="noopener noreferrer">dev.to/yourdevto</a>
    </div>

    <div className="flex items-center mb-2">
      <FaTwitter className="mr-2 text-emerald-500" />
      <strong className="text-white">Twitter:</strong> <a href="https://twitter.com/yourtwitter" className="underline hover:text-yellow-500 text-emerald-500" target="_blank" rel="noopener noreferrer">@yourtwitter</a>
    </div>

    <div className="flex items-center">
      <FaInstagram className="mr-2 text-emerald-500" />
      <strong className="text-white">Instagram:</strong> <a href="https://www.instagram.com/yourinstagram" className="underline hover:text-yellow-500 text-emerald-500" target="_blank" rel="noopener noreferrer">@yourinstagram</a>
    </div>
  </div>
);

export default SocialResponse;
