import React from 'react';

const Header =() => {
    return (
        <header style={StyleSheet.header}>
            <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            style={StyleSheet.logo}
            />
            <h1 style={{ margin: 0 }}>Job Board</h1>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#282c34',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
    },
    logo: {
        marginRight: '10px',
        borderRadius: '5px'
    }
};

export default Header;