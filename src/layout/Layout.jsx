import React from "react";

export default function Layout({children}) {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=_fKcdwyysyY">Waltuh</a></li>
                    <li><a href="https://www.youtube.com/watch?v=gDjMZvYWUdo">Saul</a></li>
                    
                </ul>
            </nav>
            <div>
                {children}
            </div>
        </div>
    )
}