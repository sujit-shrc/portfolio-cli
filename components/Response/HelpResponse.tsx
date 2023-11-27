import {
  FaUser,
  FaEraser,
  FaBullhorn,
  FaGraduationCap,
  FaEnvelope,
  FaDesktop,
  FaQuestion,
  FaHistory,
  FaCode,
  FaFolderOpen,
  FaTerminal,
  FaInfoCircle,
  FaArrowAltCircleUp,
  FaKeyboard,
  FaUndo,
  FaCheckSquare,
  FaFileAlt,
  FaUserCircle,
  FaPalette,
  FaStar,
  FaThList,
  FaFileCode,
  FaHandsHelping,
} from 'react-icons/fa';

const HelpResponse: React.FC = () => (
  <span className="text-white">
    <p className="mb-2">Available commands:</p>
    <ul className="list-disc text-blue-500 cursor-pointer">
      <li className="mb-2 flex flex-col md:flex-row md:items-center">
        <div className="flex items-center sm:items-left">
          <span className="text-emerald-500 md:mr-4"><FaUser /></span>
          <strong className="text-yellow-500">About:</strong>
        </div>
        <div className="flex-grow">
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          --More about me [Sujit]
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaEraser /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Clear:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          --Clear the terminal screen.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaBullhorn /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Echo:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          --Print out any message.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaGraduationCap /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Education:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;</span>
          --Explore my educational background.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaEnvelope /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Email:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          --Send me an email.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaDesktop /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">GUI:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          --Visit my portfolio with a graphical interface.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaQuestion /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Help:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          --Check available commands.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaHistory /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">History:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;</span>
          --View command history.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaCode /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Projects:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;</span>
          --Explore the projects I&apos;ve coded.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaTerminal /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">PWD:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          --Print current working directory.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaHandsHelping /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Socials:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;</span>
          --Check out my social accounts.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaPalette /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Themes:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          --Check available themes.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaInfoCircle /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Welcome:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;</span>
          --Display the hero section.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaUserCircle /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Whoami:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          --Get information about the current user.
        </div>
      </li>
      <li className="mb-2 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaArrowAltCircleUp /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Up Arrow:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;</span>
          --Go back to the previous command.
        </div>
      </li>
      <li className="mb-2 flex items-center ">
        <span className="text-emerald-500 md:mr-4"><FaUndo /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Ctrl + l:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;&nbsp;</span>
          --Clear the terminal.
        </div>
      </li>
      <li className="mb-0 flex items-center">
        <span className="text-emerald-500 md:mr-4"><FaKeyboard /></span>
        <div className="flex-grow">
          <strong className="text-yellow-500">Tab or Ctrl + i:</strong>
          <span className="hidden md:inline-block md:ml-2">&nbsp;</span>
          --Autocomplete the command.
        </div>
      </li>
    </ul>
  </span>
);

export default HelpResponse;
