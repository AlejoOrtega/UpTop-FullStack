import React, {useState, useEffect} from 'react';
import { getCourses } from '../components/utils/fetchs';


const MyCourse = () => {

    const [courses, setCourses] = useState([])
    useEffect(()=> {
        const fetchCourses = async() => {
            let response = await getCourses()
            console.log(response)
            setCourses(response)
        }

        fetchCourses()
    }, [])
    return ( 
    <div style={{display: 'flex', flexDirection:'row'}}>
        {courses.map((course, index)=>{
            return (
            <div key={index}>
                <h1>{course.title}</h1>
                <h4>{course.description}</h4>
                {course.links.map((link, index)=> {
                    return (
                    <div key={index}>
                        <a href={link.link_url} target='_blank' rel='noreferrer'>{link.title}</a>
                    </div>)
                })}
            </div>)
        })}
    </div>
    );
}
 
export default MyCourse;