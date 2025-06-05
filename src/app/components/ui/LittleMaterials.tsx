import React from 'react';

interface LittleMaterialsProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Optional className for Tailwind CSS or other styling.
   */
  className?: string;
}

const LittleMaterials: React.FC<LittleMaterialsProps> = ({ className, ...rest }) => {
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
    
      <g id="Layer_3" data-name="Layer 3">
        <path 
          className="fill-cyan-50" 
          d="M872.2666,496l-166.2769-288c-5.7163-9.9009-16.2803-16-27.7129-16h-332.5537c-11.4326,0-21.9966,6.0991-27.7129,16l-166.2769,288c-5.7163,9.9008-5.7163,22.0991,0,32l166.2769,288c5.7163,9.9008,16.2803,16,27.7129,16h332.5537c11.4326,0,21.9966-6.0992,27.7129-16l166.2769-288c5.7163-9.9009,5.7163-22.0992,0-32ZM724.4648,528l-92.376,160c-5.7163,9.9008-16.2803,16-27.7129,16h-184.752c-11.4326,0-21.9966-6.0992-27.7129-16l-92.376-160c-5.7163-9.9009-5.7163-22.0992,0-32l92.376-160c5.7163-9.9009,16.2803-16,27.7129-16h184.752c11.4326,0,21.9966,6.0991,27.7129,16l92.376,160c5.7163,9.9008,5.7163,22.0991,0,32Z"
        />
      </g>
    </svg>
  );
};

export default LittleMaterials;