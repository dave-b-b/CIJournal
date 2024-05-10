import React, { useState } from 'react';

const DeleteModal = ({ postId, posts, setPosts }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleDelete = () => {
        setPosts(posts.filter(post => post.id !== postId));
        handleClose();
    };

    return (
        <div>
            <button onClick={handleOpen}>Delete Post</button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Are you sure you want to delete this post?</h2>
                        <button onClick={handleDelete}>Yes</button>
                        <button onClick={handleClose}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteModal;