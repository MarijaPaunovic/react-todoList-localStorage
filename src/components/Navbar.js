import React from 'react';

const Navbar = ({ totalTodos }) => {
    return (
        <div>
            <p style={{ marginBotttom: "1.5rem", textAlign: "center" }}>Pending todos: {totalTodos}</p>
        </div>
    );
}
export default Navbar;