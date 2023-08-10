'use client'
import Post from '../../components/post'

export default function Flow() {

    const post = {
        "id": 13,
        "description": "Текст какой-то",
        "createdAt": "2023-07-22T12:18:24.693Z",
        "images": [
            "https://instagram.lern.dev/storage/users/51/gallery/a9ba621e-d49b-41fa-8b28-ba1dde74b94e.jpg",
            "https://instagram.lern.dev/storage/users/51/gallery/fe1472c0-e5aa-4806-b88d-ea9bdc634d8c.jpg",
            "https://instagram.lern.dev/storage/users/51/gallery/af8118d1-429a-4664-bd15-c04cf3f9a9a3.jpg",
            "https://instagram.lern.dev/storage/users/51/gallery/596536c9-e77d-489a-a9fd-1588215f5d04.jpg",
            "https://instagram.lern.dev/storage/users/51/gallery/f483d225-52f3-4637-81c6-7f246293fabe.jpg"
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
