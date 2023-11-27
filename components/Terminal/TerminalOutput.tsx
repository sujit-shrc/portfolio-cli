// TerminalOutput.tsx
import React from 'react';

interface TerminalOutputProps {
  history: string[];
  command: string;
  commandOutput: JSX.Element | null;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({
  history,
  command,
  commandOutput,
}) => {
  return (
    <div key={history.length + 1}>
      <p>
        <span className="text-green-500">┌─[nucleus@dev]─[<span className='text-red-500'>~/{command}</span>]</span>
        <br />
        <span className="text-cyan-600">└──╼$</span>
        <span className="text-yellow-400">{command}</span>
      </p>
      {commandOutput ? commandOutput : <p className=""><span className='text-red-500'>`{command}`</span> Command not recognized. Type <span className='text-green-500'>`ls` or `help`</span> for available commands.</p>}
    </div>
  );
};

export default TerminalOutput;
