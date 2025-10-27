import React from 'react';

const BackgroundDecorations = () => {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      {/* Top radial glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,_hsl(var(--primary)_/_0.1),_transparent_40%)]" />

      {/* Faint grid overlay */}
      <div
        className="absolute inset-0 bg-[image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"
        style={{
          maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
        }}
      />

      {/* Bottom-left blurred blob */}
      <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--secondary)_/_0.25),_transparent_50%)] blur-3xl" />

      {/* Top-right blurred blob */}
      <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-[radial-gradient(circle_at_top_right,_hsl(var(--accent)_/_0.25),_transparent_50%)] blur-3xl" />
    </div>
  );
};

export default BackgroundDecorations;