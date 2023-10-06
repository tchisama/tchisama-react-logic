import React from 'react';
const Switch = ({ value, children }) => {
    const cases = React.Children.toArray(children);
    let defaultCase = null;
    for (let i = 0; i < cases.length; i++) {
        const child = cases[i];
        if (React.isValidElement(child)) {
            const caseElement = child;
            if (caseElement.type === Case && caseElement.props.value === value) {
                return caseElement;
            }
            if (caseElement.type === Default) {
                defaultCase = caseElement;
            }
        }
    }
    return defaultCase || null;
};
const Case = ({ children }) => {
    return React.createElement(React.Fragment, null, children);
};
const Default = ({ children }) => {
    return React.createElement(React.Fragment, null, children);
};
export { Switch, Case, Default };
