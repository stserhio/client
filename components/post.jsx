
import Image from "next/image";
import moment from "moment/moment";
import 'moment/locale/ru'
// import moment from 'moment/min/moment-with-locales'
export default function Post({post}) {

    // const postCreatedAt = new Date(post.createdAt)
    const timeNow = new Date().getTime();

    // const diff = timeNow - postCreatedAt.getTime()
    // console.log(diff)
    moment.locale('ru')
    const postCreatedAt = moment(post.createdAt).fromNow()
    console.log(postCreatedAt)



    return (
        <div className=''>

        </div>

    )
}