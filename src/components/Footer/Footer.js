import React from "react";
import './footer.css'

export default function Footer () {
    return (
        <footer className="footer">
            <a href="https://www.facebook.com/PRAScompany" target="_blank">
                <div className="facebook"></div>
            </a>
             <a href="https://www.instagram.com/prascompany/" target="_blank">
                <div className="inst"></div>
            </a>

            <div className="mail">list@pras.by</div>
        </footer>
    )
}