import * as Yup from 'yup';
import { IRegisterFormValues } from '@/interfaces/register.interface';



export const registerInitialValues: IRegisterFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    address: '',
    phone: '',
};


export const registerValidationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico no válido')
    .required('El correo electrónico es obligatorio'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')]).required('Debes confirmar tu contraseña'),
    name: Yup.string().required('El nombre es obligatorio'),
    address: Yup.string().required('La dirección es obligatoria'),
    phone: Yup.string().matches(/^[0-9]+$/, 'El número de teléfono debe contener solo numeros')
    .required('El número de teléfono es obligatorio'),
});
