import React from 'react'
import Dot from './Dot';

const calculateDots = (containerSize) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const horizontalDots = Math.floor(screenWidth / containerSize) + 40;
    const verticalDots = Math.floor(screenHeight / containerSize);
    return horizontalDots * verticalDots;
}

export const DotsContainer = ({ allowMove }) => {

    const containerSize = 40;
    const gridSize = calculateDots(containerSize);
    const range = 300;

    const createGrid = () => {
        const grid = [];
        for (let i = 0; i < gridSize; i++) {
            grid.push(
                <Dot key={`${i}`} containerSize={containerSize} range={range} allowMove={allowMove} />
            );
        }
        return grid;
    };

    return (
        <div className="grid-container">
            {createGrid()}
        </div>
    )
}
