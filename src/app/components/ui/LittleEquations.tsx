import React from 'react';

interface LittleEquationsProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Optional className for Tailwind CSS or other styling.
   */
  className?: string;
}

const LittleEquations: React.FC<LittleEquationsProps> = ({ className, ...rest }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1024 1024"
      className={className}
      {...rest}
    >
      <defs>
        <style>
    

        </style>
      </defs>
    
      <g id="Layer_2" data-name="Layer 2">
        <rect className="fill-cyan-50" x="192" y="229.47" width="640" height="180" rx="32" ry="32"/>
        <rect className="fill-cyan-50" x="192" y="614.53" width="640" height="180" rx="32" ry="32"/>
      </g>
    </svg>
  );
};

export default LittleEquations;