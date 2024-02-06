import React from 'react';
import DeleteBanner from './DeleteBanner';
import UpdateBanner from './UpdateBanner';

const Banners = ({ banners, onDelete, onUpdate }) => {
    return (
        <div>
            <h2>Banners List</h2>
            {banners.map((banner) => (
                <div key={banner.id}>
                    <img src={banner.imageUrl} alt="banner" />
                    <UpdateBanner banner={banner} onUpdate={onUpdate} />
                    <DeleteBanner bannerId={banner.id} onDelete={onDelete} />
                </div>
            ))}
        </div>
    );
};

export default Banners;