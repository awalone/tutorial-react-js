import React from 'react'

const users = [
    { id: '1', firstName: 'Awal', lastName: 'Kurniawan'},
    { id: '2', firstName: 'Ar', lastName: 'Rayyan'},
];

function if_conditional() {
    return (
        <div>
            <h1>Hello Conditional Rendering</h1>
            <List list={users} />
        </div>
    );
}

function List({list}) {
    if (!list) {
        return null;
    }
    return (
        <ul>
            {list.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    );
}

function Item ({item}) {
    return (
        <li>
            {item.firstName} {item.lastName}
        </li>
    );
}

export default if_conditional
