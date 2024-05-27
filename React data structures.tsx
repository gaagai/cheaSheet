Arrays:
// Example: Rendering a list of items
import React from 'react';

interface Item {
  id: number;
  name: string;
}

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ItemList;


// Example: Filtering and reducing data
interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

const users: User[] = [
  { id: 1, name: 'Alice', age: 25, isActive: true },
  { id: 2, name: 'Bob', age: 30, isActive: false },
  { id: 3, name: 'Charlie', age: 35, isActive: true }
];

const totalActiveUsersAge = users
  .filter(user => user.isActive)
  .reduce((total, user) => total + user.age, 0);
//  Methods: map, filter, reduce, forEach, find, some, every, concat, slice, splice.

Objects:
// Example: Managing component state
import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const UserProfile: React.FC<{ user: User }> = ({ user: { name, age } }) => (
  <div>{name} is {age} years old</div>
);

const UserComponent: React.FC = () => {
  const [user, setUser] = useState<User>({ name: 'Alice', age: 25 });

  const updateUser = () => {
    setUser(prevState => ({ ...prevState, age: 26 }));
  };

  return (
    <div>
      <UserProfile user={user} />
      <button onClick={updateUser}>Update Age</button>
    </div>
  );
};

export default UserComponent;
// Methods: Accessing properties, destructuring, spreading, Object.keys, Object.values, Object.entries

Sets:
// Example: Managing unique tags
import React, { useState } from 'react';

const TagManager: React.FC = () => {
  const [tags, setTags] = useState<Set<string>>(new Set(['react', 'javascript']));

  const addTag = (tag: string) => {
    setTags(new Set([...tags, tag]));
  };

  return (
    <div>
      <ul>
        {[...tags].map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <button onClick={() => addTag('redux')}>Add Tag</button>
    </div>
  );
};

export default TagManager;
//Methods: add, delete, has, clear, forEach, size.

Maps:
// Example: Managing configuration settings
import React, { useState } from 'react';

const ConfigManager: React.FC = () => {
  const [settings, setSettings] = useState<Map<string, string>>(new Map([
    ['theme', 'dark'],
    ['layout', 'grid'],
  ]));

  const updateSetting = (key: string, value: string) => {
    setSettings(new Map(settings).set(key, value));
  };

  return (
    <div>
      <ul>
        {[...settings.entries()].map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
      <button onClick={() => updateSetting('theme', 'light')}>Switch to Light Theme</button>
    </div>
  );
};

export default ConfigManager;
// Methods: set, get, has, delete, clear, forEach, size.

