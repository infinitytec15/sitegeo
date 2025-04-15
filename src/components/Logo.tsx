import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src="https://ibb.co/RTgrgpDN"
        className="h-12 md:h-16 w-auto"
      />
    </div>
  );
};

export default Logo;
