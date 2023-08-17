'use client'
import {useState, useRef} from 'react';
import {PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";

const MAX_COUNT = 10;

export default function Create() {

    const galleryRef = useRef(null)

    const [uploadedFiles, setUploadedFiles] = useState([])
    const [description, setDescription] = useState('')
    const [fileLimit, setFileLimit] = useState(false);



    // const handleUploadFiles = files => {
    //     const uploaded = [...uploadedFiles];
    //     let limitExceeded = false;
    //     files.some((file) => {
    //         if (uploaded.findIndex((f) => f.name === file.name) === -1) {
    //             uploaded.push(file);
    //             if (uploaded.length === MAX_COUNT) setFileLimit(true);
    //             if (uploaded.length > MAX_COUNT) {
    //                 alert(`You can only add a maximum of ${MAX_COUNT} files`);
    //                 setFileLimit(false);
    //                 limitExceeded = true;
    //                 return true;
    //             }
    //         }
    //     })
    //     if (!limitExceeded) setUploadedFiles(uploaded)
    //
    // }

    // const handleFileEvent = (e) => {
    //     const chosenFiles = Array.prototype.slice.call(e.target.files)
    //     handleUploadFiles(chosenFiles);
    // }


    const handlerCreate = (e) => {

        console.log('Press Create');
    }

    const handleDescription = (e) => {
        setDescription(e.target.value.slice(0, 255))
    }

    const handleAddFiles = (event) => {
        let temp = [...uploadedFiles.concat(Object.values(event.target.files))]
        setUploadedFiles(temp)
        const MAX_COUNT = 10
        if(temp.length > MAX_COUNT){
            alert(`You can only add a maximum of ${MAX_COUNT} files`)
            temp = temp.slice(0, 10)
        }
        if(temp.length > 9)  setFileLimit(true)
        setUploadedFiles(temp)

    }

    const removeItemGallery = (index) => {

        let temp = uploadedFiles.filter( (item, idx) => {return idx !== index })

        if(temp.length <= 10) setFileLimit(false)

        setUploadedFiles(temp)

    }
    const PreviewImage = () => {

        console.log('Render srabotal')
        return uploadedFiles.length > 0 ?
                uploadedFiles.map((file, index) =>
                        <div key={index} className='relative'>
                                <img src={URL.createObjectURL(file)}
                                     className='h-16 w-16 object-cover object-center rounded-md'/>
                            <button
                                type='button'
                                className='absolute -top-2 -right-2 p-2 rounded-md bg-red-500 hover:bg-red-600'
                                onClick={() => removeItemGallery(index) }
                            >
                                <XMarkIcon className='w-4 h-4 text-white'/>
                            </button>
                        </div>)
             :
                <span>No files selected</span>



    }

    return (
        <div className='grid grid-cols-1 w-full p-4 gap-4'>
            <form className='grid mt-4 gap-4'>
                <div className='grid md:flex gap-6'>
                    <button className='flex gap-4 items-center justify-center rounded-md bg-slate-300 dark:bg-slate-700 text-white \
                    bg-gradient-to-r from-amber-500 dark:from-purple-600 from-0% via-orange-600 dark:via-cyan-600  \
                    via-30% via-pink-500 dark:via-blue-500 via-60% to-fuchsia-700 dark:to-violet-700 to-100% \
                    dark:text-white p-4 border-2 border-slate-400 dark:border-slate-600 \
                    disabled:grayscale disabled:opacity-50'
                            onClick={() => galleryRef.current.click()}
                            type='button'
                            disabled={fileLimit}
                    >
                        <PhotoIcon className='h-6 w-6 text-white'/>
                        <span>Add</span>
                    </button>

                    <div
                        className='min-h-[100px] w-full overflow-hidden flex flex-wrap gap-4 items-center justify-center \
                        bg-slate-300 rounded-md dark:bg-slate-700 text-black dark:text-white p-4 border-2 border-dashed \
                        border-slate-400 dark:border-slate-600'>
                        <PreviewImage/>
                    </div>
                </div>
                <input ref={galleryRef}
                       className='bg-slate-300 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md'
                       type='file'
                       multiple
                       accept='image/jpg, image/png, image/jpeg, image/gif'
                       onChange={handleAddFiles}
                       hidden={true}
                       name="gallery"
                />
                <div className='relative '>
                    <textarea
                        className='bg-slate-300 w-full dark:bg-slate-700 text-black dark:text-white py-2 px-4 pr-20 rounded-md'
                        value={description}
                        onChange={handleDescription}
                        placeholder='Max description 255 symbols'
                        rows={5}

                    />
                    <span className='absolute z-10 right-2 text-xs top-2 p-2 rounded-md bg-slate-200 \
                    text-black dark:text-white dark:bg-slate-800 '>
                        {description.length}/255
                    </span>
                </div>

            </form>
            <button
                className='scale-100 mt-4 w-full hover:scale-105 hover:drop-shadow-xl ease-in-out duration-300 py-3 px-4 rounded-md \
                            bg-gradient-to-r from-amber-500 dark:from-purple-600 from-0% via-orange-600 dark:via-cyan-600 via-30% \
                            via-pink-500 dark:via-blue-500 via-60% to-fuchsia-700 dark:to-violet-700 to-100% \
                            text-white text-lg'
                onClick={handlerCreate}
            >
                Создать
            </button>
        </div>
    )
}