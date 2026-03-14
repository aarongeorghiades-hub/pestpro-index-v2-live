interface CalloutProps {
  type: 'warning' | 'tip' | 'info' | 'cost';
  children: React.ReactNode;
}

const config = {
  warning: {
    icon: '⚠️',
    bg: 'bg-red-50',
    border: 'border-l-4 border-red-500',
    title: 'Warning',
    titleColor: 'text-red-800',
    textColor: 'text-red-700',
  },
  tip: {
    icon: '💡',
    bg: 'bg-emerald-50',
    border: 'border-l-4 border-emerald-500',
    title: 'Pro Tip',
    titleColor: 'text-emerald-800',
    textColor: 'text-emerald-700',
  },
  info: {
    icon: '📊',
    bg: 'bg-blue-50',
    border: 'border-l-4 border-blue-500',
    title: 'Did You Know?',
    titleColor: 'text-blue-800',
    textColor: 'text-blue-700',
  },
  cost: {
    icon: '💰',
    bg: 'bg-amber-50',
    border: 'border-l-4 border-amber-500',
    title: 'Cost Guide',
    titleColor: 'text-amber-800',
    textColor: 'text-amber-700',
  },
};

export default function Callout({ type, children }: CalloutProps) {
  const c = config[type];
  return (
    <div className={`${c.bg} ${c.border} rounded-r-xl p-4 my-6`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5">{c.icon}</span>
        <div>
          <p className={`font-bold text-sm ${c.titleColor} mb-1`}>{c.title}</p>
          <div className={`text-sm ${c.textColor} leading-relaxed [&>p]:mb-0`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

interface StatCalloutProps {
  value: string;
  label: string;
}

export function StatCallout({ value, label }: StatCalloutProps) {
  return (
    <div className="my-8 py-6 px-8 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl border border-blue-100 text-center">
      <div className="text-4xl md:text-5xl font-black text-amber-600 mb-2">{value}</div>
      <div className="text-gray-700 font-medium">{label}</div>
    </div>
  );
}
