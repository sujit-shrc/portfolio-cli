
interface CompilationProcessProps {
  process: string;
}

const CompilationProcess: React.FC<CompilationProcessProps> = ({ process }) => {
  return (
    <span>{process}</span>
  );
};

export default CompilationProcess;
