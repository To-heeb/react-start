import { useState } from "react";

// 

function ListGroup({ items, heading, onSelectItem }) {

    // Hook:- A hook is a function that allows us to tap into built in features in react
    //Props:- These are input passed to a component
    // State:- They are internal data managed by the component that can change over time
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index) => {
        setSelectedIndex(index)
    };

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li
                        key={index}
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelectItem(item)
                        }}
                    >
                        {item}
                    </li>
                )}
            </ul>
        </>
    );

}

export default ListGroup;