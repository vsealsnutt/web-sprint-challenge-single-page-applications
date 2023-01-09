import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'you must choose a size'),
    sauce: yup
        .string()
        .oneOf(['marinara', 'garlic', 'bbq'], 'you must choose a sauce'),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    mushrooms: yup.boolean(),
    onions: yup.boolean(),
    peppers: yup.boolean(),
    special: yup
        .string()
        .trim()
})

export default formSchema;