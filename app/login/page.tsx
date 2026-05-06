import Link from 'next/link';
import LoginForm from '@/components/LoginForm/LoginForm';



function LoginPage() {
  return (

    <section className='mx-auto w-full max-w-md p6 md:p-10'> 
    <h1 className='text-2xl font-semibold mb-1 text-foregroundt'>Bienvenida</h1>
    <p className='text-sm text-[#8b5e66] mb-6'>Ingresa tus credenciales para inciar sesion</p>


    <div className='mt-6'>
        <LoginForm />
        </div>
    <p className='text-sm text-center mt-4'>¿No tienes una cuenta? 
        <Link href="/register" className='text-primary font-medium hover:underline'> Registrate</Link>
    </p>

    
    </section>
    
  )
}

export default LoginPage