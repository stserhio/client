
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function PostImage({images}) {
    console.log(images)
    const imageLoader = ({src, width, quality}) => {
        return `${src}`
    }

    const imageStyle = {
        borderRadius: '12px',
        border: "1px solid #000",
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    }

    return (
        <div className=''>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {images.map((url, index) => (
                    <SwiperSlide key={index} virtualIndex={index}>
                        <Image src={url} loader={imageLoader} height={1080} width={1080} alt='Post'/>
                    </SwiperSlide>
                    ))}
            </Swiper>
        </div>

    );
};