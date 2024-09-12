import React from "react";
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {currentYear} Movie Website. All rights reserved.</p>
            <ul className="footer__links">
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service">Terms of Service</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
