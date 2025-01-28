import React from 'react';
import './InteractiveTabs.css';


export default function InteractiveTabs({ categories, activeCategory, onCategoryClick }) {
    return (
        <>
            <ul className="tabs-container" id="genreList">
                {categories.map((category) => (
                    <li key={category} className="tab">
                        <a className={`tab-link fw-600 fs-18-16-14 ${activeCategory === category ? 'active' : ''}`} onClick={() => onCategoryClick(category)}> {category}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}
