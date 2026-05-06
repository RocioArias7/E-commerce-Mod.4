"use client";
import { useFormik } from 'formik';
import { registerInitialValues, registerValidationSchema } from './registerSchema';
import { registerUser } from '@/services/auth.services';


function RegisterForm() {
  const formik = useFormik({initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { resetForm}) => {
        await registerUser(values);
        resetForm();
    }
  })

  return (
    <div> 
    
    <form onSubmit={formik.handleSubmit} 
    className="space-y-4 rounded-xl border border-border bg-surface p-6 shadow-sm">

        <div className="space-y-1">
        <label className="block text-sm font-medium text-foreground">
            Nombre completo
        </label>
        <input 
            type="text"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground
            placeholder:text-[#b08a93]
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Rocio Arias"
        />
        {formik.errors.name ? (
            <p className="text-sm text-destructive">{formik.errors.name}</p>
        ) : null}
         
        </div>

        <div className="space-y-1">
        <label className="block text-sm font-medium text-foreground">
            Direccion
        </label>
        <input 
            type="text"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground
            placeholder:text-[#b08a93]
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            name='address'
            value={formik.values.address}
            onChange={formik.handleChange}
            placeholder="Moreno 1234, Santa Fe"
        />
        {formik.errors.address ? (
            <p className="text-sm text-destructive">{formik.errors.address}</p>
        ) : null}
         
        </div>
    
        <div
        className="space-y-1">
        <label className="block text-sm font-medium text-foreground">
            Telefono
        </label>
        <input 
            type="text"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground
            placeholder:text-[#b08a93]
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            name='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}

            placeholder="3421234567"
        />
        {formik.errors.phone ? (
            <p className="text-sm text-destructive">{formik.errors.phone}</p>
        ) : null}
        </div>
    
      <div 
        className="space-y-1">
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

      <div className="space-y-1">
        <label className="block text-sm font-medium text-foreground">
          Confirmar contraseña
        </label>
        <input 
          type="password"
          className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground
          placeholder:text-[#b08a93]
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            name='confirmPassword'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="••••••••"
        />

         {formik.errors.confirmPassword ? (
            <p className="text-sm text-destructive">{formik.errors.confirmPassword}</p>
        ) : null}
      </div>

      <button 
        type="submit" 
        className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium cursor-pointer text-white 
        hover:bg-primary-dark transition active:scale-95"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'Registrando...' : 'Registrate'}
      </button>

    </form>
    </div>
  );
}

export default RegisterForm;