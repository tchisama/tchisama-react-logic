import React from 'react';
// Define the If component
const If = ({ con, children }) => {
    if (con) {
        const trueComponent = React.Children.toArray(children).find((child) => child.type === True);
        return trueComponent || null;
    }
    else {
        const falseComponent = React.Children.toArray(children).find((child) => child.type === False);
        return falseComponent || null;
    }
};
// Define the True component
const True = ({ children }) => {
    return children;
};
// Define the False component
const False = ({ children }) => {
    return children;
};
export { If, True, False };
