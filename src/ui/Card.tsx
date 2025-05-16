import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`px-4 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg ${className}`}
    >
      {children}
    </div>
  );
};
