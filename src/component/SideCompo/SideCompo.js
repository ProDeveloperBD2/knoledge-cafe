import React from 'react';
import './SideCompo.css'

const SideCompo = () => {
    return (
        <div className='side-compo'>
            <div className='mark-as-read'>
                <h3>Spent time on read: 177 min</h3>
            </div>
            <div className='book-mark-area'>
                <h2>Bookmarked Blogs: </h2>
                <div className='book-mark-container'>
                    <h3></h3>
                </div>
            </div>
        </div>
    );
};

export default SideCompo;