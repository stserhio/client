
export default function NavPanelMobile(){
    return (
        <div className="flex fixed md:hidden h-[100px] mt-4 z-10 lg:max-w-[768px] mx-auto justify-between items-center bg-white dark:bg-slate-800 md:bg-slate-50 md:dark:bg-slate-900 rounded-lg shadow-md p-4 w-full fixed bottom-0 mx-auto items-center">
            <button className="bg-gray-300 rounded-full p-2">
                {/* Иконка для новостей */}
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     className="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="none"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                </svg>

            </button>
            <button className="bg-gray-300 rounded-full p-2">
                {/* Иконка для поиска */}
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>

            </button>
            <button className="bg-red-500 rounded-full p-4">
                {/* Иконка для создания поста */}
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

            </button>
            <button className="bg-gray-300 rounded-full p-2">
                {/* Иконка для лайков */}
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                </svg>

            </button>
            <button className="bg-gray-300 rounded-full p-2">
                {/* Иконка для профиля */}
            </button>
        </div>
    );
};