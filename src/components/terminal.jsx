import '../index.css';
import commands, { websiteCommands, socialsCommands } from './commands';
import { useState, useRef } from 'react';

function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState("Hi! I'm Ellie's personal assistant! How can I help you? Type 'help' for a list of commands.");
  const inputRef = useRef();
  const [commandContext, setCommandContext] = useState(null);

  return (
    <div
      onClick={(e) => {
        inputRef.current.focus();
      }}
      className="bg-primary text-white drop-shadow h-full w-full overflow-auto p-4 box-border "
    >
      <div className="whitespace-pre-line text-blue-100 drop-shadow-md">{output}</div>
      <span className="flex text-pink-300 drop-shadow-md mb-50">
        user:&nbsp;
        <input
          ref={inputRef}
          type="text"
          className="border-none outline-none m-0 p-0
				bg-transparent color-white w-full text-white drop-shadow "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              let newOutput = '';
              newOutput = output + '\n';

              if (commands.hasOwnProperty(input)) {
                const commandResult = commands[input]();
                if (commandResult.type === 'text') {
                  newOutput += commandResult.value;
                } else if (commandResult.type === 'link') {
                  window.open(commandResult.value, '_blank', 'noopener,noreferrer');
                  newOutput += `Opened ${commandResult.value} in a new tab`;
                } else if (commandResult.type === 'clear') {
                  window.location.reload();
                }
                
                if (commandResult.context) {
                  setCommandContext(commandResult.context);
                } else {
                  setCommandContext(null);
                }
              } else if (commandContext === 'websites' && websiteCommands.hasOwnProperty(input)) {
                const commandResult = websiteCommands[input]();
                if (commandResult.type === 'link') {
                  window.open(commandResult.value, '_blank', 'noopener,noreferrer');
                  newOutput += `Opened ${commandResult.value} in a new tab`;
                }
                setCommandContext(null);
              } else if (commandContext === 'socials' && socialsCommands.hasOwnProperty(input)) {
                const commandResult = socialsCommands[input]();
                if (commandResult.type === 'link') {
                  window.open(commandResult.value, '_blank', 'noopener,noreferrer');
                  newOutput += `Opened ${commandResult.value} in a new tab`;
                }
                setCommandContext(null);
              } else {
                newOutput += 'Command not found';
              }
              setOutput(newOutput);
              setInput('');
            }
          }}
        />
      </span>
    </div>
  );
}

export default Terminal;
