import React from 'react'

function CourseTitle(props) {
    console.log("courseTitle loaded")
    console.log(props);
    return (
        <div>
            {props.title && <h1>{props.title}</h1>}    
        </div>
    );
}

export default CourseTitle;