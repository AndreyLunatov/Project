import React from 'react';

type SvgIconProps = React.SVGProps<SVGSVGElement>;

const SvgIconComponent: React.FC<SvgIconProps> = ({children, color, ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
       {...props} >
    {children}
  </svg>
);

export const SvgIcon = React.memo(SvgIconComponent);
