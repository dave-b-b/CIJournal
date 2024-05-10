import React, { useState } from 'react';

const EditModal = ({posts, postId, setPosts}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState(posts[postId]);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    content: text
                };
            }
            return post;
        }));
        setIsOpen(false)
    };
    const handleChange = (e) => setText(e.target.value);

    return (
        <div>
            <button onClick={handleOpen}>Edit Text</button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleClose}></span>
                        <textarea value={text} onChange={handleChange} />
                        <button onClick={handleClose}>Save</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditModal;