"use client";

export default function HeroGlobe() {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      style={{ animation: 'globeSpin 60s linear infinite' }}
    >
      <svg 
        width="1200" 
        height="1200" 
        viewBox="0 0 500 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="opacity-[0.15]"
      >
        <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="0.8" />
        <ellipse cx="250" cy="250" rx="60" ry="200" stroke="white" strokeWidth="0.6" />
        <ellipse cx="250" cy="250" rx="120" ry="200" stroke="white" strokeWidth="0.6" />
        <ellipse cx="250" cy="250" rx="60" ry="200" stroke="white" strokeWidth="0.6" transform="rotate(60 250 250)" />
        <ellipse cx="250" cy="250" rx="120" ry="200" stroke="white" strokeWidth="0.6" transform="rotate(60 250 250)" />
        <ellipse cx="250" cy="250" rx="60" ry="200" stroke="white" strokeWidth="0.6" transform="rotate(120 250 250)" />
        <ellipse cx="250" cy="250" rx="120" ry="200" stroke="white" strokeWidth="0.6" transform="rotate(120 250 250)" />
        
        {/* FIXED: Changed <circle> to <ellipse> and r to rx */}
        <ellipse cx="250" cy="120" rx="170" ry="40" stroke="white" strokeWidth="0.6" />
        
        <ellipse cx="250" cy="180" rx="195" ry="25" stroke="white" strokeWidth="0.6" />
        <circle cx="250" cy="250" r="10" stroke="white" strokeWidth="0.4" />
        <ellipse cx="250" cy="320" rx="195" ry="25" stroke="white" strokeWidth="0.6" />
        <ellipse cx="250" cy="380" rx="170" ry="40" stroke="white" strokeWidth="0.6" />
      </svg>
    </div>
  );
}