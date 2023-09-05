'use client'

import {useRef, useEffect, useState} from "react";
import {useSession} from "next-auth/react";


export default function Profile() {

    const [errMessage, setErrMessage] = useState('')
    const [description, setDescription] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const galleryRef = useRef(null);
    const {data: session, status, update} = useSession()

    const token = session?.user?.token

    useEffect(()=> {
        fetch('/back/api/v1/user/profile', {
            method: 'GET',
            headers: {
                Authorization: token,
            }
        }).then((res)=> {
            if(res.status >=500){
                setErrMessage('Сервис в данный момент недоступен')
                return
            }
            return res.json()
        }).then((data)=>{
            console.log(data)
            setDescription(data.description || '')
            setFirstName(data.firstName || '')
            setLastName(data.lastName || '')
            setEmail(data.email || '')
            setPhone(data.phone || '')

        })
    }, [token])

    const handleSubmit = (e)=> {
        e.preventDefault()
    }

    const handleAvatar = (e)=> {
        e.preventDefault()
    }




    return(
        <div className='grid grid-cols-1 w-full p-4 gap-4 md:max-w-4xl mx-auto'>
            <form className='grid mt-4 gap-4' onSubmit={handleSubmit}>
                <div className='grid md:flex gap-6'>

                </div>
                <input ref={galleryRef}
                       type='file'
                       onChange={handleAvatar}
                       accept='image/jpg, image/png, image/jpeg, image/gif'

                       name="avatar"
                />
                <input ref={galleryRef}

                       type='text'

                       onChange={e => setFirstName(e.target.value)}
                       value={firstName}

                       name="firstName"
                       required
                />
                <input ref={galleryRef}
                       type='text'
                       onChange={e => setLastName(e.target.value)}
                       value={lastName}

                       name="lastName"
                       required
                />
                <input ref={galleryRef}
                       type='tel'
                       onChange={e => setPhone(e.target.value)}
                       value={phone}
                       name="phone"
                       placeholder='8(XXX) XXX-XX-XX'
                       pattern='[0-9]{1}\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}'
                />
                <div>
                    {email}
                </div>
                <div className='relative '>
                   <textarea
                       className='bg-slate-300 w-full dark:bg-slate-700 text-black dark:text-white py-2 px-4 pr-20 rounded-md'
                       value={description}
                       onChange={e => setDescription(e.target.value)}
                       placeholder='Max description 255 symbols'
                       rows={5}
                   />

                    <span className='absolute z-10 right-2 text-xs top-2 p-2 rounded-md bg-slate-200 \
                    text-black dark:text-white dark:bg-slate-800 '>
                        {description.length}/255
                    </span>
                </div>

                <button
                    type='submit'
                    className='scale-100 mt-4 w-full hover:drop-shadow-xl ease-in-out duration-300 py-3 px-4 rounded-md \
                bg-gradient-to-r from-amber-500 dark:from-purple-600 from-0% via-orange-600 dark:via-cyan-600 via-30% via-pink-500 dark:via-blue-500 via-60% to-fuchsia-700 dark:to-violet-700 to-100% \
                text-white text-lg'

                >
                    Сохранить изменения
                </button>

            </form>

        </div>
    )


}
