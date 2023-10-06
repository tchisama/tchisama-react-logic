Certainly! Here's the updated README with code results added to each component:


# tchisama-react-logic

## Overview

`tchisama-react-logic` is a library of non-UI components designed to enhance the React coding experience by providing useful utilities for handling conditional rendering, looping through data, working with dates, and more. This README provides an overview of the available components and how to use them.

## Installation

You can install `tchisama-react-logic` via npm or yarn:

```bash
npm install tchisama-react-logic
# or
yarn add tchisama-react-logic
```

## Components

### 1. Switch, Case, Default

The `Switch` component allows you to conditionally render content based on the provided value. Use `Case` components to define different cases and a `Default` component for a fallback.

| Prop             | Description                                      | Example                                           |
|------------------|--------------------------------------------------|---------------------------------------------------|
| `value`          | The value to evaluate against cases.             | `"case2"`                                         |

```jsx
<Switch value="case2">
  <Case value="case1">Render content for case 1</Case>
  <Case value="case2">Render content for case 2</Case>
  <Case value="case3">Render content for case 3</Case>
  <Default>Render something else</Default>
</Switch>
```

Result:
```
Render content for case 2
```

### 2. Loop

The `Loop` component simplifies iterating through an array of items and rendering them. It supports pagination, click handling, and an empty message.

| Prop             | Description                                      | Example                                           |
|------------------|--------------------------------------------------|---------------------------------------------------|
| `className`      | CSS classes for the container element.           | `''`                                              |
| `items`          | An array of items to iterate through.            | `data` (an array of items)                       |
| `renderItem`     | A function to render each item.                  | `(item) => <div>{item.name}</div>`               |
| `onItemClick`    | A function to handle item click events.          | `(item) => { /* Handle item click here */ }`     |
| `emptyMessage`   | Message to display when no items are found.      | `"No items found"`                               |
| `keyProp`        | The property to use as the unique key for items. | `"id"`                                            |
| `pageSize`       | Number of items to display per page.             | `3`                                               |
| `pagination`     | Enable or disable pagination.                   | `true`                                            |

```jsx
<Loop
  className=''
  items={data}
  renderItem={(item) => <div>{item.name}</div>}
  onItemClick={(item) => {
    // Handle item click here
    console.log(`Item clicked: ${item.name}`);
  }}
  emptyMessage="No items found"
  keyProp='id'
  pageSize={3}
  pagination
/>
```

Result:
```
// Rendered list of items with pagination, click handling, and empty message
```

### 3. DateComponent

The `DateComponent` component allows you to format and display dates easily.

| Prop             | Description                                      | Example                                           |
|------------------|--------------------------------------------------|---------------------------------------------------|
| `className`      | CSS classes for the container element.           | `'bg-blue-600 w-fit p-2 rounded-md'`             |
| `value`          | The date object to format and display.           | `new Date()`                                      |
| `get`            | The part of the date to display (e.g., 'date').  | `"date"`                                         |

```jsx
<DateComponent
  className='bg-blue-600 w-fit p-2 rounded-md' 
  value={new Date()} 
  get="date" 
/>
```

Result:
```
// Rendered formatted date
```

### 4. If, True, False

The `If` component enables conditional rendering based on a given condition. Use `True` and `False` components to specify what to render in each case.

| Prop             | Description                                      | Example                                           |
|------------------|--------------------------------------------------|---------------------------------------------------|
| `con`            | The condition to evaluate.                      | `1 > 2`                                           |

```jsx
<If con={1 > 2}>
  <True>if true</True>
  <False>if false</False>
</If>
```

Result:
```
if false
```

### 5. Random, RandomItem

The `Random` component randomly selects and renders one of its children.

```jsx
<Random>
  <RandomItem>a</RandomItem>
  <RandomItem>b</RandomItem>
  <RandomItem>c</RandomItem>
</Random>
```

Result:
```
// Rendered random child (e.g., 'a', 'b', or 'c')
```

### Usage

1. Install `tchisama-react-logic` using npm or yarn as shown in the Installation section.
2. Import the components you need in your React components:

```jsx
import { Switch, Case, Default, Loop, DateComponent, If, True, False, Random, RandomItem } from 'tchisama-react-logic';
```

3. Use the imported components in your JSX as demonstrated in the component descriptions above.

### License

This package is open-source and available under the MIT License.
```

Now the README includes code results for each component to provide a clearer understanding of how they work.
