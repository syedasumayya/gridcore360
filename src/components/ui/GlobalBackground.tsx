"use client";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Main rotating wrapper */}
      <div 
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] opacity-30"
        style={{ 
          transform: 'translate(-50%, -50%) rotate(0deg)', 
          animation: 'globalSpin 120s linear infinite',
          willChange: 'transform' 
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              
              {/* Grid Lines - Gentle breathing pulse */}
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5">
                <animate attributeName="stroke-opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" />
              </path>

              {/* Intersection Dots - Twinkling at different speeds */}
              <circle cx="0" cy="0" r="1" fill="white">
                <animate attributeName="opacity" values="1;0.1;1" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="0" r="1" fill="white">
                <animate attributeName="opacity" values="0.1;1;0.1" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="100" r="1" fill="white">
                <animate attributeName="opacity" values="1;0.1;1" dur="4.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="100" r="1" fill="white">
                <animate attributeName="opacity" values="0.1;1;0.1" dur="4.5s" repeatCount="indefinite" />
              </circle>

            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Diagonal Data Lines - Flickering */}
          <line x1="10%" y1="20%" x2="40%" y2="80%" stroke="white" strokeWidth="0.3">
            <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="60%" y1="10%" x2="90%" y2="90%" stroke="white" strokeWidth="0.3">
            <animate attributeName="stroke-opacity" values="0.8;0.2;0.8" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="20%" y1="60%" x2="80%" y2="40%" stroke="white" strokeWidth="0.3">
            <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="7s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyber-purple/5 rounded-full blur-[150px]" />

      <style jsx>{`
        @keyframes globalSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}