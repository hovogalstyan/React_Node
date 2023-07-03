import * as Yup from 'yup'

export const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("The email is invalid")
        .matches(regexEmail, 'Please create a stronger email')
        .required("This field is required"),
    password: Yup.string()
        .min(6, "The password is too short")
        .max(12, "The password is too long")
        .matches(passwordRules, 'Please create a stronger password')
        .required("This field is required")
});
export const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(3)
        .max(20)
        .required(),
    email: Yup.string()
        .email("The email is invalid")
        .matches(regexEmail, 'Please create a stronger email')
        .required(),
    password: Yup.string()
        .min(6, "The password is too short")
        .max(12, "The password is too long")
        .matches(passwordRules, 'Please create a stronger password')
        .required()
});
