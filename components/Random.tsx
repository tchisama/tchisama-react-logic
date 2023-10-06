"use client"
import React, { useState, useEffect, ReactNode } from 'react';

type RandomProps = {
  children: ReactNode[];
};

function Random({ children }: RandomProps) {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    // Generate a random index when the component mounts
    const randomIndex = Math.floor(Math.random() * React.Children.count(children));
    setRandomIndex(randomIndex);
  }, [children]);

  return React.Children.toArray(children)[randomIndex] || null;
}

type RandomItemProps = {
  children: ReactNode;
};

function RandomItem({ children }: RandomItemProps) {
  return <div>{children}</div>;
}


export { Random, RandomItem };
