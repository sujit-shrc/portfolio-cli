
interface AutoSuggestionsProps {
  suggestions: string[];
  suggestionIndex: number;
  setCommand: React.Dispatch<React.SetStateAction<string>>;
  setSuggestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AutoSuggestions: React.FC<AutoSuggestionsProps> = ({
  suggestions,
  suggestionIndex,
  setCommand,
  setSuggestionIndex,
}) => {
  return (
    <div className="suggestions flex gap-2 z-1 absolute top-6 left-[57px]">
      {suggestions.map((suggest, index) => (
        <div
          key={index}
          className={index === suggestionIndex ? 'selected' : ''}
          onClick={() => {
            setCommand(suggest);
            setSuggestionIndex(-1);
          }}
        >
          <p className='text-white text-opacity-50'>{suggest}</p>
        </div>
      ))}
    </div>
  );
};

export default AutoSuggestions;
