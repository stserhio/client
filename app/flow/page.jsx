'use client'
import Post from '../../components/post'

export default function Flow() {

    const post = {
        "id": 16,
        "description": "Текст какой-то",
        "createdAt": "2023-08-08T17:52:50.780Z",
        "images": [
            "https://instagram.lern.dev/storage/users/51/gallery/5fad9bc0-1cfb-40a6-81bd-b87699706962.jpg"
        ],
        "user": {
            "id": 51,
            "firstName": "Ryan",
            "lastName": "Gosling",
            "avatar": "https://instagram.lern.dev/storage/users/51/avatar/3d9c8a35-b34d-4c0f-8cf2-d690a6d0b38f.jpg"
        }
    }
    return (
        <div>
            <Post post={post}/>
            Page Flow
        </div>

    )
}
