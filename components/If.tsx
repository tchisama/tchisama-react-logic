import React, { ReactNode } from 'react';

// Define the Props for the If component
interface IfProps {
  con: boolean;
  children: ReactNode;
}

// Define the If component
const If: React.FC<IfProps> = ({ con, children }) => {
  if (con) {
    const trueComponent = React.Children.toArray(children).find(
      (child) => (child as React.ReactElement).type === True
    );
    return trueComponent || null;
  } else {
    const falseComponent = React.Children.toArray(children).find(
      (child) => (child as React.ReactElement).type === False
    );
    return falseComponent || null;
  }
};

// Define the Props for the True and False components
interface TrueProps {
  children: ReactNode;
}

interface FalseProps {
  children: ReactNode;
}

// Define the True component
const True: React.FC<TrueProps> = ({ children }) => {
  return children;
};

// Define the False component
const False: React.FC<FalseProps> = ({ children }) => {
  return children;
};

export { If, True, False };
