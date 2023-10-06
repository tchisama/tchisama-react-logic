import React, { ReactNode } from 'react';

interface SwitchProps {
  value: string;
  children: ReactNode;
}

interface CaseProps {
  value: string;
  children: ReactNode;
}

interface DefaultProps {
  children: ReactNode;
}

const Switch: React.FC<SwitchProps> = ({ value, children }) => {
  const cases = React.Children.toArray(children);
  let defaultCase: ReactNode | null = null;

  for (let i = 0; i < cases.length; i++) {
    const child = cases[i];
    if (React.isValidElement(child)) {
      const caseElement = child as React.ReactElement<CaseProps>;
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

const Case: React.FC<CaseProps> = ({ children }) => {
  return <>{children}</>;
};

const Default: React.FC<DefaultProps> = ({ children }) => {
  return <>{children}</>;
};

export { Switch, Case, Default };
