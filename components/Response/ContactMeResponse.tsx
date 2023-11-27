import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDev, FaGlobe, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactResponse: React.FC = () => (
  <div className="">
    <p className="mb-4">
      Feel free to reach out to me through various channels. Here are some ways to get in touch:
    </p>
    
    <div className="flex items-center mb-2">
      <FaEnvelope className="mr-2 text-emerald-500" />
      <strong className="text-white">Email:</strong> <a href="mailto:your.email@example.com" className="underline text-yellow-500">your.email@example.com</a>
    </div>

    <div className="flex items-center mb-2">
      <FaPhone className="mr-2 text-emerald-500" />
      <strong className="text-white">Phone:</strong> +1234567890
    </div>

    <div className="flex items-center mb-2">
      <FaLinkedin className="mr-2 text-emerald-500" />
      <strong className="text-white">LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourlinkedin" className="underline text-yellow-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourlinkedin</a>
    </div>

    <div className="flex items-center mb-2">
      <FaGithub className="mr-2 text-emerald-500" />
      <strong className="text-white">GitHub:</strong> <a href="https://github.com/yourgithub" className="underline text-yellow-500" target="_blank" rel="noopener noreferrer">github.com/yourgithub</a>
    </div>

    <div className="flex items-center mb-2">
      <FaDev className="mr-2 text-emerald-500" />
      <strong className="text-white">dev.to:</strong> <a href="https://dev.to/yourdevto" className="underline text-yellow-500" target="_blank" rel="noopener noreferrer">dev.to/yourdevto</a>
    </div>

    <div className="flex items-center mb-2">
      <FaGlobe className="mr-2 text-emerald-500" />
      <strong className="text-white">Portfolio:</strong> <a href="https://yourportfolio.com" className="underline text-yellow-500" target="_blank" rel="noopener noreferrer">yourportfolio.com</a>
    </div>

    <div className="flex items-center mb-2">
      <FaTwitter className="mr-2 text-emerald-500" />
      <strong className="text-white">Twitter:</strong> <a href="https://twitter.com/yourtwitter" className="underline text-yellow-500" target="_blank" rel="noopener noreferrer">@yourtwitter</a>
    </div>

    <div className="flex items-center mb-2">
      <FaInstagram className="mr-2 text-emerald-500" />
      <strong className="text-white">Instagram:</strong> <a href="https://www.instagram.com/yourinstagram" className="underline text-yellow-500" target="_blank" rel="noopener noreferrer">@yourinstagram</a>
    </div>

    <div className="flex items-center">
      <FaWhatsapp className="mr-2 text-emerald-500" />
      <strong className="text-white">WhatsApp:</strong> +1234567890
    </div>
  </div>
);

export default ContactResponse;
