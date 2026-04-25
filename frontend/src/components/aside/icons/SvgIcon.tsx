import React from 'react';

type SvgIconProps = React.SVGProps<SVGSVGElement>;

const SvgIcon: React.FC<SvgIconProps> = ({ children, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
       stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
       {...props}>
    {children}
  </svg>
);

export default React.memo(SvgIcon);
