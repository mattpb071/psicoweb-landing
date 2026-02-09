import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-baseline select-none ${className}`}>
      {/* "Psico": Sans-serif, Bold, Color de marca Oscuro (pw-dark) */}
      <span className="font-bold text-pw-dark tracking-tighter text-3xl">
        Psico
      </span>
      {/* "Web": Fuente Cursiva, Color Cyan (pw-light), con sombra suave */}
      <span className="font-cursive text-pw-light text-4xl ml-1" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
        Web
      </span>
      {/* "+": Signo más elevado, Color Cyan */}
      <span className="font-bold text-pw-light text-3xl ml-1 relative" style={{ top: '-8px' }}>
        +
      </span>
    </div>
  );
};