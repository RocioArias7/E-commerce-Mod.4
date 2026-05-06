"use client";
import { useFormik } from 'formik';
import { loginInitialValues, loginValidationSchema } from './loginSchema';
import { loginUser } from '@/services/auth.services';
import { useAuth } from '@/context/AuthContext';

function LoginForm() {
  const {setDataUser} = useAuth();   


  const formik = useFormik({initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const responseLogin = await loginUser(values);
      setDataUser(responseLogin); 
        
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} 
    className="space-y-4 rounded-xl border border-border bg-surface p-6 shadow-sm">
        


      <div className="space-y-1">
        <label className="block text-sm font-medium text-foreground">
          Correo electrónico
        </label>
        <input 
          type="email"
          className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground
          placeholder:text-[#b08a93]
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="tuemail@gmail.com"
        />
        {formik.errors.email ? (
            <p className="text-sm text-destructive">{formik.errors.email}</p>
        ) : null}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-foreground">
          Contraseña
        </label>
        <input 
          type="password"
          className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground
          placeholder:text-[#b08a93]
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="••••••••"
        />

         {formik.errors.password ? (
            <p className="text-sm text-destructive">{formik.errors.password}</p>
        ) : null}
      </div>

      <button 
        type="submit" 
        className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-white 
        hover:bg-primary-dark transition active:scale-95"
      >
        Iniciar Sesión
      </button>

    </form>
  );
}

export default LoginForm;