"use client";
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../../../components/modal'
import { useState } from 'react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { ArrowPathIcon} from '@heroicons/react/24/outline'


export default function Registration() {

    const [showModal, setShowModal] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errFirstName, setErrFirstName] = useState('')
    const [errLastName, setErrLastName] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errPassword, setErrPassword] = useState('')

    const [errMessage, setErrMessage] = useState('')
    const [loading, setLoading] = useState(false)



    const router = useRouter()

    const handlerModalButton = () => {
        setShowModal(false)
        router.push('/auth/login')
    }

    const handlerRegistration = async (e) => {
        e.preventDefault()
        setLoading(true)

        const res = await fetch('/back/api/v1/register', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        })

        if(res.status >=500){
            setErrMessage('Извините, сервис недоступен. Повторите попытку позже')
            setLoading(false)
            return

        }

        const data = await res.json()

        if(res.status === 400){
            const { errors } = data
            errors.forEach(err => {
                switch (err.path) {
                    case 'firstName':
                        setErrFirstName(err.msg)
                        break
                    case 'lastName':
                        setErrLastName(err.msg)
                        break
                    case 'email':
                        setErrEmail(err.msg)
                        break
                    case 'password':
                        setErrPassword(err.msg)
                        break
                    default:
                        setErrMessage('Ошибка несуществующего поля')
                        break
                }
            })
            setLoading(false)
            return
         }

        if (res.status === 409 || res.status === 418){
            const {message} = data
            setErrMessage(message)
            setLoading(false)
            return
        }

        if(res.status === 200){
            setShowModal(true)
            setLoading(false)
            return
        }



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
                        <form className='grid mt-4 gap-6' onSubmit={handlerRegistration}>
                            <div className='relative w-full'>
                                <input
                                    className={`${errFirstName ? 'border-red-500 ' : 'border-transparent'} border bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                    type='text'
                                    name="firstName"
                                    placeholder='Имя'
                                    required={true}
                                    value={firstName}
                                    onChange={(event)=> {setFirstName(event.target.value); setErrFirstName(''); setErrMessage('')}}/>
                                {errFirstName && <div className='absolute border-red-500 text-red-500 text-[10px] -top-[16px]'>{errFirstName}</div>}
                            </div>
                            <div className='relative w-full'>
                                <input
                                    className={`${errLastName ? 'border-red-500 ' : 'border-transparent'} border bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                    type='text'
                                    name="lastName"
                                    placeholder='Фамилия'
                                    required={true}
                                    value={lastName}
                                    onChange={(event)=> {setLastName(event.target.value); setErrLastName(''); setErrMessage('')}}/>
                                {errLastName && <div className='absolute border-red-500 text-red-500 text-[10px] -top-[16px]'>{errLastName}</div>}
                            </div>

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
                                type='submit'
                            >
                                {loading ? <ArrowPathIcon className='w-6 h-6 animate-spin'/> : 'Зарегистрироваться' }
                            </button>
                        </form>
                        <div className='w-full border-b-2 border-slate-200 dark:border-slate-700 mt-6 flex justify-center'>
                            <span className='bg-white dark:bg-slate-800 p-2 -mb-[20px]'>OR</span>
                        </div>
                        <button 
                                className='flex justify-center items-center gap-2 mt-8 w-full py-2 px-4 border rounded-md border-indigo-500' 
                                onClick={''}
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
                        <div className='flex justify-center mt-4'>
                            <Link href={'/auth/login'} className='text-indigo-500 underline decoration-solid hover:text-indigo-800  hover:dark:text-indigo-300'>Перейти на страницу логина</Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal ? 
                    <Modal>
                        <div className='text-center'>
                            <h2 className='font-bold'>Подтверждение регистрации</h2>
                            <p className='mt-2 text-slate-600 dark:text-slate-300 text-sm'>
                                На Вашу почту было отправлено письмо с подтверждение о регистрации. <br/>
                                Перейдите по ссылке, указанной в письме. 
                            </p>
                            <button onClick={handlerModalButton} className='py-2 px-4 bg-green-500 rounded-md mt-3 text-white'>Ok</button>
                        </div>
                    </Modal>
            :
                ''
            }
            
        </div>
    )
}