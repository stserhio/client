'use client'
import PostImage from "@/components/postImage";
import Image from "next/image";
export default function Post({post}) {


    const postCreatedAt = new Date(post.createdAt)
    const postTimestamp = postCreatedAt.getTime()
    const timeNow = new Date().getTime()

    const diff = (timeNow - postTimestamp) / 1000 //in seconds

    let resulTimeString = ''
    if(diff < 60000){
        resulTimeString = 'Now'
    }else if(diff >=60 && diff < 3600){
        resulTimeString = `${Math.round(diff / (1000 * 60))} мин назад`
    }else if(diff >=3600 && diff < 86400){
        resulTimeString = `${Math.round(diff / (1000 * 60 * 60))} час. назад`
    }else if(diff >=86400 && diff < 259200){
        let temp = Math.round(diff / 86400)
        resulTimeString = temp === 1? `${temp} день назад ` : `${temp} дня назад`
    }else{
        let months = ['янв', "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
        resulTimeString = `${postCreatedAt.getDate()} ${months[postCreatedAt.getMonth()]} ${postCreatedAt.getFullYear()} `
    }

    const imageLoader = ({src, width, quality}) => {
        return `${src}`
    }

    const imageAvatarStyle = {
        borderRadius: '50%',
        border: "1px solid #b1afde",
        // width: '460px',
        // height: '460px',
        objectFit: 'cover',
        objectPosition: 'center'
    }

    return(
        <div className='w-full h-full'>
            <div className='flex items-center gap-2 mt-4 justify-between'>

                <div className='flex items-center gap-2 mb-2 mx-2'>
                    <Image src={post.user.avatar} style={imageAvatarStyle} loader={imageLoader} alt='Avatar' width={32} height={32}/>
                    <span>{post.user.firstName} {post.user.lastName}</span>
                </div>
                <span className='mx-4'>{resulTimeString}</span>
            </div>


            <div className='h-4/5 overflow-hidden'>
                <PostImage images={post.images}/>
            </div>


        </div>
    )
}