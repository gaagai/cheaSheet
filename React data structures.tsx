Arrays:
// Example: Rendering a list of items
const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

// Example: Filtering and reducing data
const totalActiveUsersAge = users
    .filter(user => user.isActive)
    .reduce((total, user) => total + user.age, 0);
//  Methods: map, filter, reduce, forEach, find, some, every, concat, slice, splice.

Objects:
// Example: Managing component state
const [user, setUser] = useState({ name: 'Alice', age: 25 });

// Updating state
setUser(prevState => ({ ...prevState, age: 26 }));

// Destructuring props
const UserProfile = ({ user: { name, age } }) => (
    <div>{name} is {age} years old</div>
);

// Methods: Accessing properties, destructuring, spreading, Object.keys, Object.values, Object.entries

Sets:
// Example: Managing unique tags
const TagManager = () => {
    const [tags, setTags] = useState(new Set(['react', 'javascript']));

    const addTag = (tag) => {
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
//Methods: add, delete, has, clear, forEach, size.

Maps:
// Example: Managing configuration settings
const ConfigManager = () => {
    const [settings, setSettings] = useState(new Map([
        ['theme', 'dark'],
        ['layout', 'grid'],
    ]));

    const updateSetting = (key, value) => {
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
// Methods: set, get, has, delete, clear, forEach, size.

