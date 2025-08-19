import React from 'react';

const Footer = () => {
    return (
        <footer style={StyleSheet.footer}>
            <p>© 2024 Job Board Application</p>
        </footer>
    );
};

const styles = {
    footer: {
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
        fontSize: '14px'
    }
};

export default Footer;