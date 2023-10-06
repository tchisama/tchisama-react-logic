import React, { ReactNode } from 'react';

// Define the type for your data items
interface DataItem {
  id: number;
  name: string;
}

interface LoopProps {
  items: DataItem[];
  keyProp?: keyof DataItem;
  renderItem: (item: DataItem) => ReactNode;
  filter?: (item: DataItem) => boolean;
  reverse?: boolean;
  className: string;
  onItemClick?: (item: DataItem) => void;
  emptyMessage?: ReactNode;
  pageSize?: number;
  pagination?: boolean;
}

const Loop: React.FC<LoopProps> = ({
  items,
  keyProp,
  renderItem,
  filter,
  reverse,
  className,
  onItemClick,
  emptyMessage,
  pageSize,
  pagination,
}) => {
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

  return (
    <div className={className}>
      {paginatedItems.length === 0 ? (
        <div>{emptyMessage || "No items found"}</div>
      ) : (
        paginatedItems.map((item, i) => (
          <ClickableDiv
            key={keyProp ? item[keyProp] : i}
            item={item}
            onItemClick={onItemClick}
          >
            {renderItem(item)}
          </ClickableDiv>
        ))
      )}
    </div>
  );
};

interface ClickableDivProps {
  item: DataItem;
  onItemClick?: (item: DataItem) => void;
  children: ReactNode;
}

const ClickableDiv: React.FC<ClickableDivProps> = ({
  item,
  onItemClick,
  children,
}) => {
  if (onItemClick) {
    return (
      <div onClick={() => onItemClick(item)}>
        {children}
      </div>
    );
  }

  return <div>{children}</div>;
};

export {Loop};
