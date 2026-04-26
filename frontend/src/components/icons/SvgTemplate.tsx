import React from 'react';

// Явно описываем только те пропсы, которые нужны
type SimpleSvgProps = {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  children?: React.ReactNode;
  background?: string;
};

export const SvgTemplate: React.FC<SimpleSvgProps> = ({
                                                        width = 24,
                                                        height = 24,
                                                        stroke = 'currentColor',
                                                        strokeWidth = 2,
                                                        children,
                                                        background,
                                                      }) => (
  <div className={background}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={width}
      height={height}
    >
      {children}
    </svg>
  </div>
);
