import React, { useState, useCallback, memo } from 'react';

// Memoized ListItem component to prevent unnecessary re-renders
const ListItem = memo(({ item, onClick }) => {
  console.log(`Rendering item: ${item.id}`);
  return (
    <li>
      {item.name}
      <button onClick={() => onClick(item.id)}>Select</button>
    </li>
  );
});

const ListComponent = ({ items, onSelect }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onClick={onSelect} />
      ))}
    </ul>
  );
};

const App = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [items] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // useCallback to memoize the onSelect function
  const handleSelect = useCallback((id) => {
    setSelectedItemId(id);
  }, []);

  return (
    <div>
      <h1>Selected Item ID: {selectedItemId}</h1>
      <ListComponent items={items} onSelect={handleSelect} />
    </div>
  );
};

export default App;
