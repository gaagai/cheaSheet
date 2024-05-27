import React, { useState, useRef, useEffect, memo, MutableRefObject } from 'react';

interface Item {
  id: number;
  name: string;
}

interface ListItemProps {
  item: Item;
  onClick: MutableRefObject<(id: number) => void>;
}

const ListItem: React.FC<ListItemProps> = memo(({ item, onClick }) => {
  console.log(`Rendering item: ${item.id}`);
  return (
    <li>
      {item.name}
      <button onClick={() => onClick.current(item.id)}>Select</button>
    </li>
  );
});

interface ListComponentProps {
  items: Item[];
  onSelect: MutableRefObject<(id: number) => void>;
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

  // useRef to store a stable reference to the onSelect function
  const handleSelectRef = useRef<(id: number) => void>(() => {});

  useEffect(() => {
    handleSelectRef.current = (id: number) => {
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
