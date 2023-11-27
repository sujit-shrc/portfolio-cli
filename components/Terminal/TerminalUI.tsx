"use client"
import React, { useState, useEffect, useRef } from 'react';
import AutoSuggestions from './AutoSuggestions';
import CommandList from './CommandList';
import TerminalOutput from './TerminalOutput';
import WelcomeMessage from './WelcomeMessage';
import CompilationProcess from './CompilationProcess';
import CommandLists from './CommandList';

const asciiArt = `
 _      _     ____  _     _____ _     ____        ____  _____ _    
/ \\  /|/ \\ \\/   _\\/ \\   /  __// \\ \\/\\/ ___\\      /  _ \\/  __// \\ |\\
| |\\ ||| | |||  /  | |   |  \\  | | |||    \\_____ | | \\||  \\  | | //
| | \\||| \\_/||  \\_ | |_/\|  /_ | \\_/|\\___ /\\____\\| |_/||  /_ | \\// 
\\_/  \\|\\____/\\____/\\____/\\____\\\\____/\\____/      \\____/\\____\\\\__/  
                                                                   
`;

const TerminalUI = () => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<JSX.Element[]>([]);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionIndex, setSuggestionIndex] = useState<number>(-1);

  const simulateCompilation = async () => {
    const fakeCompilationProcess = [
      '⣯⣻⢿⡿⣟⣯⣷⣽⣯⣷⣽⣯⣷⣽⣯⣷⣽⣯⣷⣽⣯⣷⣽⣯⣷⣽⣯⣷⣽⣯⣷⣽',
      '▲ Version 1.0.0',
      '- nucleus@Arch:        http://128.0.0.1',
      '✓ Ready in 7.1s',
      '○ Compiling / ...',
      '✓ Compiled / in 17.2s (496 modules)',
      '✓ Compiled in 2.2s (241 modules)',
    ];

    for (const process of fakeCompilationProcess) {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate compilation time
      setOutputs((prevOutputs) => [...prevOutputs, <span>{process}</span>]);
    }
  };

  const executeCommand = () => {
    if (command === 'run') simulateCompilation();
    const lowerCaseCommand = command.toLowerCase();
    const commandOutput = CommandList[lowerCaseCommand];

    setHistory([...history, command]);
    setOutputs((prevOutputs) => [
      ...prevOutputs,
      <TerminalOutput
        key={history.length + 1}
        history={history}
        command={command}
        commandOutput={commandOutput}
      />,
    ]);

    setCommand('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [outputs, history]);

  useEffect(() => {
    const initWelcomeMessage = async () => {
      setOutputs([
        <WelcomeMessage key={0} asciiArt={asciiArt} />,
      ]);
      simulateCompilation();
    };
    initWelcomeMessage();
  }, []);

  const getAutoSuggestions = (input: string): string[] => {
    const availableCommands = Object.keys(CommandLists);
    return availableCommands.filter((cmd) => cmd.startsWith(input));
  };

  const handleTabKeyPress = () => {
    if (suggestions.length > 0) {
      setCommand(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCommand(input);

    if (!input) {
      setSuggestions([]);
      return;
    }
    const newSuggestions = getAutoSuggestions(input);
    setSuggestions(newSuggestions);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      handleTabKeyPress();
    }
    if (e.key === 'Enter') {
      executeCommand();
      setSuggestions([]);
    }
  };

  return (
    <div className="max-w-screen w-full min-h-screen bg-gray-800">
      <div
        ref={terminalRef}
        className="flex flex-col px-4 overflow-y-auto max-h-full text-gray-300"
      >
        {outputs}
      </div>
      <div className="mt-0 relative">
        <p className="text-green-500">┌─[nucleus@dev]─[<span className='text-red-500'>~/portfolio</span>]</p>
        <span className="text-cyan-600">└──╼$</span>
        <input
          className="flex-grow bg-transparent text-white z-100 ml-2 max-w-screen outline-none border-none"
          type="text"
          value={command}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {suggestions.length > 0 && (
          <AutoSuggestions
            suggestions={suggestions}
            suggestionIndex={suggestionIndex}
            setCommand={setCommand}
            setSuggestionIndex={setSuggestionIndex}
          />
        )}
      </div>
    </div>
  );
};

export default TerminalUI;