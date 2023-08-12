import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function PostImage({images}) {

    const imageLoader = ({src, width, quality}) => {
        return `${src}`
    }


    const imageStyle = {
        // borderRadius: '12px',
        // border: "1px solid #000",
        width: '100%',
        // height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    }

    return (
        images.length > 1 ?

        <div className='w-full h-full'>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                // navigation
                pagination={{clickable: true}}
                // scrollbar={{draggable: true}}
                className='w-full h-full'
            >
                {images.map((url, index) => (
                    <SwiperSlide key={index} virtualIndex={index} className='max-w-[460px] max-h-[460px] '>
                        <Image src={url} loader={imageLoader} style={imageStyle} height={460} width={460} alt='Post'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
            :
            <div className='w-full h-full'>
                <Image
                    src={'https://instagram.lern.dev/storage/users/51/gallery/aabe1241-45ce-4092-accd-62ad71a0d1aa.jpg'}
                    loader={imageLoader} height={400} width={400} alt='Post'/>
            </div>

    );
};

