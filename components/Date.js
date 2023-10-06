import React from 'react';
const DateComponent = ({ value, get, className }) => {
    const getDateComponent = () => {
        const dateObject = new Date(value);
        switch (get) {
            case 'day':
                return dateObject.getDate().toString();
            case 'month':
                return (dateObject.getMonth() + 1).toString(); // Adding 1 since months are 0-indexed
            case 'year':
                return dateObject.getFullYear().toString();
            case 'hour':
                return dateObject.getHours().toString();
            case 'minute':
                return dateObject.getMinutes().toString();
            case 'second':
                return dateObject.getSeconds().toString();
            case 'time':
                return `${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}:${dateObject.getSeconds().toString().padStart(2, '0')}`;
            case 'date':
                return `${dateObject.getDate().toString().padStart(2, '0')}/${(dateObject.getMonth() + 1).toString().padStart(2, '0')}/${dateObject.getFullYear().toString().substring(2)}`;
            default:
                return null; // Handle invalid 'get' values gracefully
        }
    };
    const dateComponent = getDateComponent();
    return (React.createElement("div", { className: className }, dateComponent !== null ? (React.createElement("span", null, dateComponent)) : (null)));
};
export { DateComponent };
