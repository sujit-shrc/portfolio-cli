import { HelpResponse, AboutMeResponse, ContactMeResponse, EducationResponse, SocialResponse, GUIResponse, ProjectsResponse, WhoAmI  } from "../Response";


interface CommandType {
  [key: string]: JSX.Element;
}

const CommandLists: CommandType = {
  help: <HelpResponse />,
  ls: <HelpResponse />,
  aboutme: <AboutMeResponse />,
  contact: <ContactMeResponse />,
  education: <EducationResponse />,
  social: <SocialResponse />,
  gui: <GUIResponse />,
  projects: <ProjectsResponse />,
  whoami: <WhoAmI />,
};

export default CommandLists;
