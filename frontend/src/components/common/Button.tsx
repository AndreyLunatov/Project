// import { ReactNode } from 'react';
//
// interface ButtonProps {
//   children: ReactNode;
//   onClick?: () => void;
//   variant?: 'primary' | 'secondary' | 'danger';
//   disabled?: boolean;
//   type?: 'button' | 'submit' | 'reset';
// }
//
// export const Button = ({
//   children,
//   onClick,
//   variant = 'primary',
//   disabled = false,
//   type = 'button',
// }: ButtonProps) => {
//   const baseClass = 'px-4 py-2 rounded font-medium transition-colors';
//   const variants = {
//     primary: 'bg-blue-500 text-white hover:bg-blue-600',
//     secondary: 'bg-gray-300 text-black hover:bg-gray-400',
//     danger: 'bg-red-500 text-white hover:bg-red-600',
//   };
//
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`${baseClass} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
//     >
//       {children}
//     </button>
//   );
// };
//
