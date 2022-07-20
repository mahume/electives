import {ChangeEvent, Dispatch, FC, MouseEvent, SetStateAction, useState} from "react";

interface CourseFormProps {
    title: string;
    subTitle: string;
    description: string;
}

const CourseForm: FC<CourseFormProps> = ({title, subTitle, description}) => {
    const [titleValue, setTitleValue] = useState(title);
    const [subTitleValue, setSubTitleValue] = useState(subTitle);
    const [descriptionValue, setDescriptionValue] = useState(description);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>, dispatch: Dispatch<SetStateAction<string>>) =>
        dispatch(event.target.value);

    const handleSubmit = (event: MouseEvent<any, any>) => {
        event.preventDefault();
        console.log(titleValue, subTitleValue, descriptionValue);
    }

    return (
        <form>
            <input
                placeholder='Title'
                value={titleValue}
                onChange={(event) => handleOnChange(event, setTitleValue)}
            />
            <input
                placeholder='Subtitle'
                value={subTitleValue}
                onChange={(event) => handleOnChange(event, setSubTitleValue)}
            />
            <input
                placeholder='Description'
                value={descriptionValue}
                onChange={(event) => handleOnChange(event, setDescriptionValue)}
            />
            <button onClick={(event) => handleSubmit(event)}>Save</button>
        </form>
    )
}

export default CourseForm;
