import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Courses = (props) => {
    const { img, authorImg, authorName, date, miniute, tag, name } = props.course;
    const handleMarkAsRead = props.handleMarkAsRead;
    return (
        <div className='course'>
            <div className='course-compo'>
                <img className='courses-img' src={img} alt="" />
                <div className='author-info-miniuts'>
                    <div className='author-info'>
                        <img className='author-img' src={authorImg} alt="" />
                        <div className='author-name-and-date'>
                            <h4>{authorName}</h4>
                            <p><small>{date}</small></p>
                        </div>
                    </div>
                    <div className='miniuts'>
                        <h4>{miniute} min read <button className='book-mark-btn'><FontAwesomeIcon icon={faBookmark} /></button></h4>
                    </div>
                </div>
                <h2>{name}</h2>
                <div className='tag-and-btn'>
                    <h6>{tag}</h6>
                    <button onClick={() => handleMarkAsRead(props.course)}>Mark as Read</button>
                </div>
            </div>
        </div>
    );
};

export default Courses;