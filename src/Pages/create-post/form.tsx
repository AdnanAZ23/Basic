import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

interface CreateFromData {
    title: string;
    description: string;
}

export const CreateFrom = () => {
    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description."),
    });

    const {register, handleSubmit, formState: {errors}} = useForm<CreateFromData>({
        resolver: yupResolver(schema),
    });

    const onCreatePost = (data: CreateFromData) => {
        console.log(data);
    };
    return(
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title...' {...register('title')} />
            <p style={{color: "red"}}>{errors.title?.message}</p>
            <textarea placeholder='Description...' {...register('description')} />
            <p style={{color: "red"}}>{errors.description?.message}</p>
            <input type='submit' />
        </form>
    );
};