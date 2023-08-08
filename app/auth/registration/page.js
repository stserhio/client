'use client'
import Image from "next/image";
import Link from "next/link";
import Modal from "../../../components/modal"
import {useState} from 'react'
import { redirect } from 'next/navigation'

export default function Registration() {

    const [showModal, setShowModal] = useState(false)

    const handlerModalButton = () => {


        setShowModal(false)

    }

    const handlerRegistration = () => {

        setShowModal(true)

    }

    return <div
        className='flex h-screen w-full bg-white dark:bg-slate-800 md:bg-slate-50 md:dark:bg-slate-900 items-center justify-center md:p-5'>
        <div className='grid grid-cols-1 lg:grid-cols-5 w-full max-w-[420px] lg:max-w-[1024px]'>
            <Image
                src="/images/phone.png"
                alt="Register page phone Logo"
                className='col-start-1 col-end-4 hidden lg:block'
                width={800}
                height={766}
                priority
            />
            <div className='lg:col-start-4 lg:col-end-6'>
                <div className='w-full rounded-lg bg-white dark:bg-slate-800 md:shadow-lg px-8 py-12'>

                    <div className='flex items-center justify-center gap-2 mt-4 '>
                        <Image
                            src="/images/logo.svg"
                            alt="Instagram Logo"
                            className=''
                            width={44}
                            height={44}
                            priority
                        />
                        <span className='text-lg font-bold text-black dark:text-white'>Instagram</span>
                    </div>
                    <form className='grid mt-4 gap-4'>
                        <input
                            className='bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-lg '
                            type='text' name='firstName'
                            placeholder='First name'/>
                        <input
                            className='bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-lg '
                            type='text' name='lastName'
                            placeholder='Last name'/>
                        <input
                            className='bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-lg '
                            type='email' name='email'
                            placeholder='Email'/>
                        <input
                            className='bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-lg '
                            type='password' name='password'
                            placeholder='Password'/>


                    </form>
                    <button

                        className='w-full mt-4 hover:scale-105 hover:shadow-lg ease-in-out transition duration-300 py-3 px-4 rounded-lg \
                            bg-gradient-to-r from-amber-500 dark:from-purple-700 from-0% via-orange-600 dark:via-cyan-700 via-30% via-pink-500 dark:via-blue-600 via-60% to-fuchsia-700 dark:to-violet-800 to-100% ... \
                            text-lg text-white '
                        onClick={handlerRegistration}>Sign In
                    </button>

                    {/*divider or*/}
                    <div class="flex items-center justify-center mt-6">
                        <div class="border-t border-gray-400 dark:bg-slate-800 w-2/4"></div>
                        <div class="mx-3 text-gray-500">or</div>
                        <div class="border-t border-gray-400 dark:bg-slate-800 w-2/4"></div>
                    </div>

                    {/*button Sign via google*/}
                    <button
                        className='flex justify-center items-center gap-2 mt-5 w-full py-2 px-4 border rounded-md border-indigo-500'
                        onClick={''}>

                        <Image
                            src="/images/google.svg"
                            alt="Instagram Logo"
                            className=''
                            width={24}
                            height={24}
                            priority
                        />Sign in via Google
                    </button>
                    <div className='flex justify-center mt-4'>
                        <Link href='/auth/login'
                              className='text-indigo-500 hover:text-indigo-800 dark:hover:text-indigo-200 font-medium underline decoration-solid'>Have
                            an account? Login</Link>
                    </div>

                </div>

            </div>
        </div>
        {
            showModal ?
                <Modal>
                    <div className='text-center'>
                        <h2 className='font-bold'>Completion of registration</h2>
                        <p className='mt-2 text-slate-500 dark:text-slate-300 text-sm'>An account confirmation email has been sent to the
                            email address you provided. <br/>
                            Follow it to complete the registration</p>
                        <button onClick={handlerModalButton}
                                className='py-2 px-4 bg-green-500 text-white rounded-md mt-4'>Ok
                        </button>
                    </div>

                </Modal>
                :
                ''
        }

    </div>
}
