'use client'
import PostImage from "@/components/postImage";
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

    return(
        <div className=''>
            <PostImage images={post.images}/>
        </div>
    )
}