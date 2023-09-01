import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import './Body.css'
import SideCompo from '../SideCompo/SideCompo';

const Body = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const [bookMarks, setBookMark] = useState([]);
    const handleMarkAsRead = (course) => {

        setBookMark(course);
    }
    return (
        <div className='body'>
            <div className='course'>
                {
                    courses.map(course => <Courses key={course.id} course={course} handleMarkAsRead={handleMarkAsRead}></Courses>)
                }
            </div>
            <div className='side-compos'>
                <SideCompo></SideCompo>
            </div>
        </div>
    );
};

export default Body;