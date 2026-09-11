interface CalloutProps {
  type: 'warning' | 'tip' | 'info' | 'cost';
  children: React.ReactNode;
}

const config = {
  warning: {
    icon: '⚠️',
    bg: 'bg-[var(--color-warn-wash)]',
    border: 'border-l-4 border-[var(--color-warn)]',
    title: 'Warning',
    titleColor: 'text-[var(--color-warn)]',
    textColor: 'text-[var(--color-ink-soft)]',
  },
  tip: {
    icon: '💡',
    bg: 'bg-[var(--color-ok-wash)]',
    border: 'border-l-4 border-[var(--color-ok)]',
    title: 'Pro Tip',
    titleColor: 'text-[var(--color-ok)]',
    textColor: 'text-[var(--color-ink-soft)]',
  },
  info: {
    icon: '📊',
    bg: 'bg-[var(--color-teal-wash)]',
    border: 'border-l-4 border-[var(--color-teal)]',
    title: 'Did You Know?',
    titleColor: 'text-[var(--color-teal-deep)]',
    textColor: 'text-[var(--color-ink-soft)]',
  },
  cost: {
    icon: '💰',
    bg: 'bg-[var(--color-ochre-wash)]',
    border: 'border-l-4 border-[var(--color-ochre)]',
    title: 'Cost Guide',
    titleColor: 'text-[var(--color-ochre-deep)]',
    textColor: 'text-[var(--color-ink-soft)]',
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
    <div className="my-8 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-surface)] px-8 py-6 text-center">
      <div className="spec-figure mb-2 text-4xl font-black text-[var(--color-ink)] md:text-5xl">{value}</div>
      <div className="font-medium text-[var(--color-ink-soft)]">{label}</div>
    </div>
  );
}
