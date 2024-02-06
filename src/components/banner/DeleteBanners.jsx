import React from 'react';

const DeleteBanner = ({ bannerId, onDelete }) => {
    return (
        <button onClick={() => onDelete(bannerId)}>Delete</button>
    );
};

export default DeleteBanner;