import React from 'react';
import MainNavbar from '@/components/mainNavbar'; 

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <MainNavbar />
      <main>
        {children}
      </main>
    </>
  );
};

export default Template;