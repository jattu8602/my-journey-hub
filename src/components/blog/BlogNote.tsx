import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogNoteProps {
  type?: 'info' | 'warning' | 'success' | 'tip';
  title?: string;
  children: React.ReactNode;
}

const BlogNote = ({ type = 'info', title, children }: BlogNoteProps) => {
  const configs = {
    info: {
      icon: Info,
      bg: 'bg-blue-500/10 border-blue-500/30',
      iconColor: 'text-blue-400',
      titleColor: 'text-blue-300',
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-amber-500/10 border-amber-500/30',
      iconColor: 'text-amber-400',
      titleColor: 'text-amber-300',
    },
    success: {
      icon: CheckCircle,
      bg: 'bg-green-500/10 border-green-500/30',
      iconColor: 'text-green-400',
      titleColor: 'text-green-300',
    },
    tip: {
      icon: Lightbulb,
      bg: 'bg-purple-500/10 border-purple-500/30',
      iconColor: 'text-purple-400',
      titleColor: 'text-purple-300',
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className={cn("rounded-lg border p-4 my-6", config.bg)}>
      <div className="flex gap-3">
        <Icon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", config.iconColor)} />
        <div>
          {title && (
            <h5 className={cn("font-medium mb-1", config.titleColor)}>{title}</h5>
          )}
          <div className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNote;
