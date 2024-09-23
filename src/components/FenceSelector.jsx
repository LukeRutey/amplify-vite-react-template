import React, { useState } from 'react';

const FenceSelector = () => {
    const [selectedFence, setSelectedFence] = useState('');
    const fenceDetails = {
        "Wooden Fence": "To install a wooden fence, make sure you dig holes for posts 8 feet apart, use treated wood, and paint the wood to protect it from weathering.",
        "Vinyl Fence": "For a vinyl fence, use concrete to set posts in place. The panels click together, but ensure they are level during installation."
    };

    const handleFenceChange = (event) => {
        setSelectedFence(event.target.value);
    };

    return (
        <div>
            <label htmlFor="fenceType">Choose a fence type: </label>
            <select id="fenceType" onChange={handleFenceChange}>
                <option value="">--Select a fence--</option>
                {Object.keys(fenceDetails).map(fence => (
                    <option key={fence} value={fence}>{fence}</option>
                ))}
            </select>

            {selectedFence && (
                <div style={{ marginTop: '20px' }}>
                    <h3>{selectedFence}</h3>
                    <p>{fenceDetails[selectedFence]}</p>
                </div>
            )}
        </div>
    );
};

export default FenceSelector;
