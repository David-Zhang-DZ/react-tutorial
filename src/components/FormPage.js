import Form from "./Form";
import { useParams } from "react-router-dom";

const FormPage = ({courses}) => {
    const params = useParams();

    return <Form values={courses[params.id]}></Form>;
};

export default FormPage;