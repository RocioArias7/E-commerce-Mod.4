import Link from 'next/link';
import RegisterForm from '@/components/RegisterForm/RegisterForm';



function RegisterPage() {
  return (

    <section className='mx-auto w-full max-w-md p6 md:p-10'> 
    <h1 className='text-2xl font-semibold mb-1 text-foreground'>Bienvenida</h1>
    <p className='text-sm text-[#8b5e66] mb-6'>Ingresa tus datos para registrarte</p>


    <div className='mt-6'>
        <RegisterForm />
        </div>
    <p className='text-sm text-center mt-4'>¿Ya tienes una cuenta?
        <Link href="/login" className='text-primary font-medium hover:underline'> Inicia sesión aqui</Link>
    </p>

    
    </section>
    
  )
}

export default RegisterPage 