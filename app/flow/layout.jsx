import Header from "@/components/header";
import NavPanelMobile from "@/components/NavPanelMobile";



export default function FlowLayout({ children }) {
    return (
        <section className='xl:grid lg:grid md:grid overflow-auto flex h-screen w-full bg-white dark:bg-slate-800 md:bg-slate-50 md:dark:bg-slate-900 items-center justify-center md:p-5'>
            <div className='w-full rounded-lg bg-white dark:bg-slate-800 md:shadow-lg max-w-3xl h-screen md:h-auto'>
                <Header/>

                <NavPanelMobile/>



                {children}
            </div>

        </section>
    )
}
