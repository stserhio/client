// import Image from 'next/image'

import Image from "next/image";

export default function Modal({children}) {
    return (
        <div
            className='flex items-center justify-center bg-[#0000002d] backdrop-blur-sm p-12 absolute top-0 bottom-0 left-0 right-0'>
            <div className='bg-zinc-100 dark:bg-slate-800 p-6 absolute rounded-md'>
                <div className='flex items-center justify-center gap-2 '>
                    <Image
                        src="/images/logo.svg"
                        alt="Instagram Logo"
                        className=''
                        width={44}
                        height={44}
                        priority
                    />
                    <span className='text-md font-bold text-black dark:text-white'>Instagram</span>
                </div>
                <div className='mt-4 min-w-[320px]'>
                    {children}
                </div>
            </div>
        </div>

    )
}



