import * as Yup from 'yup';
import { ILoginFormValues } from '@/interfaces/login.interface';

export const loginInitialValues: ILoginFormValues = {
    email: '',
    password: '',
};


export const loginValidationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico no válido')
    .required('El correo electrónico es obligatorio'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});
