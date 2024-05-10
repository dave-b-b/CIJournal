import React, { useState } from 'react';

const Link = ({ url, text }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <a href={url} onClick={handleClick}>
                {text}
            </a>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Modal Popup</h2>
                        <p>This is the content of the modal popup.</p>
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Link;