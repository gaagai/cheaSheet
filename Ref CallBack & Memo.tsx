import React, { useState, useRef, useEffect, memo } from 'react';

// Memoized ListItem component to prevent unnecessary re-renders
const ListItem = memo(({ item, onClick }) => {
  console.log(`Rendering item: ${item.id}`);
  return (
    <li>
      {item.name}
      <button onClick={() => onClick.current(item.id)}>Select</button>
    </li>
  );
});

const ListComponent = ({ items, onSelect }) => {
  return (
    <ul>
      {items.map(item => (
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

  // useRef to store a stable reference to the onSelect function
  const handleSelectRef = useRef();

  useEffect(() => {
    handleSelectRef.current = (id) => {
      setSelectedItemId(id);
    };
  }, []);

  return (
    <div>
      <h1>Selected Item ID: {selectedItemId}</h1>
      <ListComponent items={items} onSelect={handleSelectRef} />
    </div>
  );
};

export default App;
