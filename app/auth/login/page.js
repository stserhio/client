'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from "react";
import {signIn} from "next-auth/react";



export default function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [errEmail, setErrEmail] = useState('')
    const [errPassword, setErrPassword] = useState('')

    const [errMessage, setErrMessage] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()


        const res = await signIn('credentials', {
            redirect: true,
            email: email,
            password: password,
            callbackUrl: 'https://instagram.lern.dev/flow'
        })

        console.log('----------------------')
        console.log(res)
        console.log('----------------------')

    }

    const handlerGoogle = async e => {
        e.preventDefault()

        const res = await signIn('google', {
            redirect: true,
            callbackUrl: 'https://instagram.lern.dev/flow'
        })
        console.log('--------------------------')
        console.log(res)
        console.log('--------------------------')
    }

    return (
        <div className='flex h-screen w-full bg-white dark:bg-slate-800  md:bg-slate-50 md:dark:bg-slate-900 items-center justify-center md:p-5'>
            <div className='grid grid-cols-1 lg:grid-cols-5 w-full max-w-[420px] lg:max-w-[1024px]'>
                <Image
                    src="/images/phone.png"
                    alt="Phones"
                    className="col-start-1 col-end-4 hidden lg:block"
                    width={800}
                    height={766}
                    priority
                />
                <div className='lg:col-start-4 lg:col-end-6'>
                    <div className='w-full relative rounded-lg bg-white dark:bg-slate-800 md:shadow-lg px-8 py-12'>
                        {errMessage && <div className='absolute right-8 left-8 text-red-500 border-red-500 rounded-md p-2 text-[10px] border-red-500 top-[20px]'>{errMessage}</div>}
                        <div className='flex items-center justify-center gap-2 mt-4'>
                            <Image
                                src="/images/logo.svg"
                                alt="Logo"
                                className=""
                                width={44}
                                height={44}
                                priority
                            />
                            <span className='text-lg font-bold text-black dark:text-white'>Instagram</span>
                        </div>
                        <form className='grid mt-4 gap-4' onSubmit={handleSubmit}>

                            <div className='relative w-full'>
                                <input
                                    className={`${errEmail ? 'border-red-500 ' : 'border-transparent'} border bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                    type='email'
                                    name="email"
                                    placeholder='example@email.com'
                                    required={true}
                                    value={email}
                                    onChange={(event)=> {setEmail(event.target.value); setErrEmail(''); setErrMessage('')}}/>
                                {errEmail && <div className='absolute border-red-500 text-red-500 text-[10px] -top-[16px]'>{errEmail}</div>}
                            </div>

                            <div className='relative w-full'>
                                <input
                                    className={`${errPassword ? 'border-red-500 ' : 'border-transparent'} border bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                    type='password'
                                    name="password"
                                    placeholder='Пароль'
                                    required={true}
                                    value={password}
                                    onChange={(event)=> {setPassword(event.target.value); setErrPassword(''); setErrMessage('')}}/>
                                {errPassword && <div className='absolute border-red-500 text-red-500 text-[10px] -top-[16px]'>{errPassword}</div>}
                            </div>


                            <button
                                className='scale-100 mt-4 w-full hover:scale-105 hover:drop-shadow-xl ease-in-out duration-300 py-3 px-4 rounded-md \
                            bg-gradient-to-r from-amber-500 dark:from-purple-600 from-0% via-orange-600 dark:via-cyan-600 via-30% via-pink-500 dark:via-blue-500 via-60% to-fuchsia-700 dark:to-violet-700 to-100% \
                            text-white text-lg flex items-center justify-center'
                                type='submit'>
                                Войти
                            </button>
                        </form>
                        <div className='w-full border-b-2 border-slate-200 dark:border-slate-700 mt-6 flex justify-center'>
                            <span className='bg-white dark:bg-slate-800 p-2 -mb-[20px]'>OR</span>
                        </div>
                        <button 
                                className='flex justify-center items-center gap-2 mt-8 w-full py-2 px-4 border rounded-md border-indigo-500' 
                                onClick={handlerGoogle}
                            >
                                <Image
                                    src="/images/google.svg"
                                    alt="Logo"
                                    className=""
                                    width={24}
                                    height={24}
                                    priority
                                />
                                Войти через Google
                        </button>
                        <div className='flex justify-center mt-4 gap-2'>
                          Забыли пароль? <Link href={''} className='text-indigo-500 underline decoration-solid hover:text-indigo-800  hover:dark:text-indigo-300'> Восстановить!</Link>
                        </div>
                        <div className='mt-4 border-b border-slate-200 dark:border-slate-700 max-w-[70px] mx-auto'></div>
                        <div className='flex justify-center mt-4 gap-2'>
                          <Link href={'/auth/registration'} className='text-indigo-500 underline decoration-solid hover:text-indigo-800  hover:dark:text-indigo-300'>Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}