interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const imgDimensions =
    size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-12 w-12' : 'h-11 w-11';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Global Infraspace Logo Badge */}
      <img
        src="/logo.png"
        alt="Global Infraspace logo"
        className={`${imgDimensions} object-contain rounded border border-gold/40 bg-[#0B0C0E] shadow-sm shrink-0`}
      />

      {/* Brand name */}
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-[0.28em] text-foreground">
          GLOBAL
        </span>
        <span className="block text-[0.65rem] tracking-[0.34em] text-gold font-medium">
          INFRASPACE
        </span>
      </span>
    </div>
  );
}
