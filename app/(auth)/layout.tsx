import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className='h-[100vh] p-10 rounded-md flex items-center justify-center'>{children}</div>;
};

export default AuthLayout;