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
