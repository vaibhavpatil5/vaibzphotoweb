import React from 'react';


export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div>
            <footer className="bg-light text-center">
                <p>©️ {year} Vaibz. All Rights Resereved. 💗</p>
            </footer>
        </div>
    )
}

export default Footer;