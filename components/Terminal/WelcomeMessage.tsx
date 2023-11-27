
import { FaExclamationTriangle } from 'react-icons/fa';

interface WelcomeMessageProps {
  asciiArt: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ asciiArt }) => {
  return (
    <div key={0}>
      <div><pre>{asciiArt}</pre></div>
        <p>Welcome to my Portfolio</p>
        <p>Type <span className="text-green-500">'ls'</span> or <span className="text-green-500">'help'</span> to see available commands</p>
        <p className="text-cyan-600 flex items-center">
          <span className="mr-2">
            <FaExclamationTriangle className="text-yellow-500" />
          </span>
          <span>
            Caution: You should never run{' '}
            <span className="text-red-500 font-bold">sudo rm -rf ./*</span>. 
            It will break my system.
          </span>
        </p>
      </div>
  );
};

export default WelcomeMessage;
