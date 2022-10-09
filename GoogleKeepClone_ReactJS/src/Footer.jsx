import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return(
    <>
        <footer style={{textAlign:'center'}}>
            <p>Copyright © {year}</p>
        </footer>
    </>
    )
};

export default Footer;