import Header from "@/components/header";
export default function FlowLayout({ children }) {
    return (
        <section className='flex w-full items-center justify-center md:p-5'>
            <div className='w-full rounded-lg bg-white dark:bg-slate-800 md:shadow-lg max-w-3xl h-screen md:h-auto'>
                <Header/>

                {children}
            </div>

        </section>
    )
}
