import React, { useState, useCallback, memo } from 'react';

interface Item {
  id: number;
  name: string;
}

interface ListItemProps {
  item: Item;
  onClick: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = memo(({ item, onClick }) => {
  console.log(`Rendering item: ${item.id}`);
  return (
    <li>
      {item.name}
      <button onClick={() => onClick(item.id)}>Select</button>
    </li>
  );
});

interface ListComponentProps {
  items: Item[];
  onSelect: (id: number) => void;
}

const ListComponent: React.FC<ListComponentProps> = ({ items, onSelect }) => {
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} onClick={onSelect} />
      ))}
    </ul>
  );
};

const App: React.FC = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [items] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // useCallback to memoize the onSelect function
  const handleSelect = useCallback((id: number) => {
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
