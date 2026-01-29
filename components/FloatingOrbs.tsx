import React from 'react';

export const FloatingOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-lavender/40 rounded-full blur-3xl animate-float opacity-70"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-peach/40 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[40%] w-64 h-64 bg-mint/30 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};