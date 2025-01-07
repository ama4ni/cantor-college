import React from "react";
import {useState, useEffect} from 'react';

const Courses = () =>{

    const [courseData, setCourseData] = useState(null);
    const dataURL = './data/courses.json';

    useEffect(()=>{
        fetch(dataURL)
        .then(response => response.json())
        .then(data =>{
            setCourseData(data);
            console.dir(data)
        })
    }, [])



    return(
        <div>
            <h2 id="heading">Course List</h2>
           
            <div className="image"><img src="/Cantor2.jpg" alt="cantor2" /></div>
           
            <div className= 'course-list'>
                {courseData ? (courseData.map((course, index)=>(
                    <div className='course-box' key={index} >
                            <h3>{course.CourseTitle}</h3>
                            <p>{course.CourseType}</p>
                            <p>{course.CourseSummary}</p>
                            <p>{course.YearOfEntry}</p>
                            <p>{course.UcasPoints}</p>
                            <p>{course.ModeOfAttendance}</p>
                            <p>{course.CourseSubject}</p>
                    </div>

                )
           )):(<p>data is loading</p>)
        }


            </div>

        </div>

    )
} 

export default Courses;