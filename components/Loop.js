import React from 'react';
const Loop = ({ items, keyProp, renderItem, filter, reverse, className, onItemClick, emptyMessage, pageSize, pagination, }) => {
    // Filter the items based on the filter prop
    const filteredItems = filter ? items.filter(filter) : items;
    const reverseItems = reverse ? filteredItems.reverse() : filteredItems;
    // Pagination logic
    let paginatedItems = reverseItems;
    if (pagination && pageSize && pageSize > 0) {
        const startIndex = 0; // Adjust this to implement pagination with the desired starting page
        const endIndex = startIndex + pageSize;
        paginatedItems = reverseItems.slice(startIndex, endIndex);
    }
    return (React.createElement("div", { className: className }, paginatedItems.length === 0 ? (React.createElement("div", null, emptyMessage || "No items found")) : (paginatedItems.map((item, i) => (React.createElement(ClickableDiv, { key: keyProp ? item[keyProp] : i, item: item, onItemClick: onItemClick }, renderItem(item)))))));
};
const ClickableDiv = ({ item, onItemClick, children, }) => {
    if (onItemClick) {
        return (React.createElement("div", { onClick: () => onItemClick(item) }, children));
    }
    return React.createElement("div", null, children);
};
export { Loop };
