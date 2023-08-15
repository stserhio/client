import { Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function PostImage({images}) {

    const imageLoader = ({src}) => {
        return `${src}`
    }

    const imageGalleryStyle = {
        // borderRadius: '50%',
        // border: "1px solid #b1afde",
        width: '370px',
        height: '370px',
        objectFit: 'cover',
        objectPosition: 'cover'
    }

    return (

        <div className='w-full h-full'>
                 <Swiper
                     // install Swiper modules
                     modules={[Pagination]}
                     speed={700}
                     spaceBetween={0}
                     slidesPerView={1}
                     // navigation
                     pagination={{clickable: true}}
                     // scrollbar={{draggable: true}}
                     className='w-full h-full'





                 >
                     {images.map((url, index) => (
                         <SwiperSlide key={index} virtualIndex={index} className='max-w-[370px] max-h-[370px] '>
                            <Image src={url} loader={imageLoader} style={imageGalleryStyle} height={370} width={370} alt='Post'/>
                         </SwiperSlide>
                     ))}
                 </Swiper>

                 <div className='swiper-pagination mt-2'></div>

            </div>

    );
};

