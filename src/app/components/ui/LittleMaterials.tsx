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
      className={className} 
      {...rest} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1024 1024"
    >
      <defs>
        <style>
          {`
            .cls-1 {
              fill: #082f49;
            }
            .cls-2 {
              fill: #ecfeff;
            }
          `}
        </style>
      </defs>
      <g id="Layer_1" data-name="Layer 1">
        <rect className="cls-2" width="1024" height="1024" rx="160" ry="160"/>
      </g>
      <g id="Layer_2" data-name="Layer 2">
        <path className="cls-1" d="M678.2769,192h-332.5538c-11.4325,0-21.9966,6.0992-27.7128,16l-166.2769,288c-5.7162,9.9008-5.7162,22.0992,0,32l166.2769,288c5.7162,9.9008,16.2803,16,27.7128,16h332.5538c11.4325,0,21.9966-6.0992,27.7128-16l166.2769-288c5.7162-9.9008,5.7162-22.0992,0-32l-166.2769-288c-5.7162-9.9008-16.2803-16-27.7128-16Z"/>
      </g>
      <g id="Layer_3" data-name="Layer 3">
        <path className="cls-2" d="M604.376,320h-184.7521c-11.4325,0-21.9966,6.0992-27.7128,16l-92.376,160c-5.7162,9.9008-5.7162,22.0992,0,32l92.376,160c5.7162,9.9008,16.2803,16,27.7128,16h184.7521c11.4325,0,21.9966-6.0992,27.7128-16l92.376-160c5.7162-9.9008,5.7162-22.0992,0-32l-92.376-160c-5.7162-9.9008-16.2803-16-27.7128-16Z"/>
      </g>
    </svg>
  );
};

export default LittleMaterials;