import React from 'react';

export const WaveBorder: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none z-10">
      <img
        src="./wave-border.png"
        alt="Layered Green Wave Border"
        className="w-full h-auto max-h-[100px] sm:max-h-[120px] lg:max-h-[135px] object-cover object-bottom block select-none"
      />
    </div>
  );
};

export default WaveBorder;
