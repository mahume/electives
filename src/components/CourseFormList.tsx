import {FC, useState} from "react";
import CreateNewCourse from "./CourseForm";

interface Course {
    id: number;
    title: string;
    subTitle: string;
    description: string;
}

const emptyCourse: Course = {
    id: 0,
    title: '',
    subTitle: '',
    description: '',
};

const CourseForm: FC = () => {
    const [courses, setCourses] = useState<Array<Course>>([emptyCourse]);

    const addNewCourse = () => {
        setCourses([...courses, {
            ...emptyCourse,
            id: courses.length + 1,
        }]);
    }

    return (
        <div>
            {courses.map(({id, title, subTitle, description}) => (
                <CreateNewCourse key={id} title={title} subTitle={subTitle} description={description}/>
            ))}
            <button onClick={() => addNewCourse()}>New Form</button>
        </div>
    )
}

export default CourseForm;
