"use client";
import React, { useState, useEffect } from 'react';
function Random({ children }) {
    const [randomIndex, setRandomIndex] = useState(0);
    useEffect(() => {
        // Generate a random index when the component mounts
        const randomIndex = Math.floor(Math.random() * React.Children.count(children));
        setRandomIndex(randomIndex);
    }, [children]);
    return React.Children.toArray(children)[randomIndex] || null;
}
function RandomItem({ children }) {
    return React.createElement("div", null, children);
}
export { Random, RandomItem };
