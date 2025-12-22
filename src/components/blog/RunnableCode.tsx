import { useState } from 'react';
import { Play, RotateCcw, Check, Copy } from 'lucide-react';

interface RunnableCodeProps {
  code: string;
  language?: string;
  filename?: string;
  defaultOutput?: string;
  onRun?: () => string;
}

const RunnableCode = ({ 
  code, 
  language = 'javascript', 
  filename,
  defaultOutput = '',
  onRun 
}: RunnableCodeProps) => {
  const [output, setOutput] = useState<string>(defaultOutput);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setHasRun(true);
    
    setTimeout(() => {
      if (onRun) {
        setOutput(onRun());
      } else {
        // Default simulation
        try {
          // Simple eval for demo - in production use sandboxed execution
          const result = eval(code);
          setOutput(String(result ?? 'undefined'));
        } catch (err: any) {
          setOutput(`Error: ${err.message}`);
        }
      }
      setIsRunning(false);
    }, 500);
  };

  const handleReset = () => {
    setOutput(defaultOutput);
    setHasRun(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-accent/30 bg-[#1e1e2e] my-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {filename && (
            <span className="text-xs text-muted-foreground ml-3 font-mono">
              {filename}
            </span>
          )}
          <span className="px-2 py-0.5 text-[10px] bg-accent/20 text-accent rounded-full ml-2">
            Interactive
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground uppercase mr-2">{language}</span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-white/10 transition-colors"
            title="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>
      
      {/* Code */}
      <pre className="p-4 overflow-x-auto text-sm border-b border-border/30">
        <code className="text-[#cdd6f4] font-mono leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>

      {/* Controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#181825]">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-50"
        >
          <Play className="w-4 h-4" />
          {isRunning ? 'Running...' : 'Run Code'}
        </button>
        {hasRun && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-secondary/80 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        )}
      </div>

      {/* Output */}
      {hasRun && (
        <div className="px-4 py-3 bg-[#11111b] border-t border-border/30">
          <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Output:</div>
          <pre className="text-sm text-green-400 font-mono">
            {output || '(no output)'}
          </pre>
        </div>
      )}
    </div>
  );
};

export default RunnableCode;
