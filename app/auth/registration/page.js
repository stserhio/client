import Image from "next/image";

export default function Registration() {

    return <div className='flex h-screen w-full bg-slate-50 items-center justify-center'>
        <div className='grid grid-cols-5 max-w-[1024px]'>
            <Image
                src="/images/phone.png"
                alt="Register page phone Logo"
                className='col-start-1 col-end-4'
                width={800}
                height={766}
                priority
            />
            <div className='col-start-4 col-end-6 rounded-lg bg-white shadow-lg p-8'>
                <div className='flex items-center justify-center gap-2 mt-4'>
                    <Image
                        src="/images/logo.svg"
                        alt="Instagram Logo"
                        className=''
                        width={44}
                        height={44}
                        priority
                    />
                    <span className='text-lg font-bold'>Instagram</span>
                    {/*or png text logo*/}
                    {/*<Image*/}
                    {/*    src="/images/inst-text.png"*/}
                    {/*    alt="Instagram Text Logo"*/}
                    {/*    className=''*/}
                    {/*    width={124}*/}
                    {/*    height={26}*/}
                    {/*    priority*/}
                    {/*/>*/}
                </div>
                <form className='grid mt-4 gap-4'>
                    <input className='bg-slate-100 py-2 px-4 rounded-lg ' type='text' name='firstName' placeholder='First name'/>
                    <input className='bg-slate-100 py-2 px-4 rounded-lg ' type='text' name='lastName' placeholder='Last name'/>
                    <input className='bg-slate-100 py-2 px-4 rounded-lg ' type='email' name='email' placeholder='Email'/>
                    <input className='bg-slate-100 py-2 px-4 rounded-lg ' type='password' name='password' placeholder='Password'/>

                    <button className='hover:scale-105 hover:shadow-lg ease-in-out transition duration-300  py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 from-0% via-orange-600 via-30% via-pink-500 via-60% to-fuchsia-700 to-100% ... text-lg text-white ' onClick={''}>Sign In</button>
                </form>
            </div>
        </div>
    </div>
}
