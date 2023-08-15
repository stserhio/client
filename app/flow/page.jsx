'use client'
import Post from '../../components/post'

export default function Flow() {

    const posts = [
        // {
        //     "id": 5,
        //     "description": "Текст какой-то",
        //     "createdAt": "2023-08-12T20:14:17.152Z",
        //     "images": [
        //         "https://instagram.lern.dev/storage/users/6/gallery/7679e041-ed84-494c-ac7f-ee879e43e5f8.jpg",
        //         "https://instagram.lern.dev/storage/users/6/gallery/1b06d46a-1a28-4f18-9508-0a2458e6c5ec.jpg"
        //     ],
        //     "user": {
        //         "id": 6,
        //         "firstName": "Ryan",
        //         "lastName": "Gosling",
        //         "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
        //     }
        // },
        {
            "id": 7,
            "description": "Текст какой-то",
            "createdAt": "2023-08-12T20:15:06.100Z",
            "images": [
                "https://instagram.lern.dev/storage/users/6/gallery/ed9fd72f-a697-4d58-a030-f8559ccbba62.jpg",
                "https://instagram.lern.dev/storage/users/6/gallery/b26f2dc1-63a4-4fa5-833f-d584426ccb62.jpg"
            ],
            "user": {
                "id": 6,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
            }
        },
        {
            "id": 6,
            "description": "Текст какой-то",
            "createdAt": "2023-08-12T20:14:31.093Z",
            "images": [
                "https://instagram.lern.dev/storage/users/6/gallery/233ec548-2da8-4e7b-a034-1350f025bb27.jpg",
                "https://instagram.lern.dev/storage/users/6/gallery/cf1014cb-6b42-493e-a76d-dbc330454439.jpg"
            ],
            "user": {
                "id": 6,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
            }
        },
        {
            "id": 14,
            "description": "Текст какой-то",
            "createdAt": "2023-08-12T20:47:39.936Z",
            "images": [
                "https://instagram.lern.dev/storage/users/6/gallery/5465b092-689e-4126-ac00-55794aec32ed.jpg"
            ],
            "user": {
                "id": 6,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
            }
        },
        {
            "id": 8,
            "description": "Текст какой-то",
            "createdAt": "2023-08-12T20:15:29.346Z",
            "images": [
                "https://instagram.lern.dev/storage/users/6/gallery/8cd7ab20-c759-4d61-bf91-a8f89c36589d.jpg",
                "https://instagram.lern.dev/storage/users/6/gallery/36637c44-51a2-4178-bda6-b91131801866.jpg"
            ],
            "user": {
                "id": 6,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
            }
        },
        {
            "id": 9,
            "description": "Текст какой-то",
            "createdAt": "2023-08-12T20:15:39.514Z",
            "images": [
                "https://instagram.lern.dev/storage/users/6/gallery/4c449d75-fb66-40f4-9f13-421fc1b42202.jpg",
                "https://instagram.lern.dev/storage/users/6/gallery/47dae211-987b-463f-b0f6-f4c042deaa34.jpg"
            ],
            "user": {
                "id": 6,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
            }
        },
        {
            "id": 10,
            "description": "Текст какой-то",
            "createdAt": "2023-08-12T20:15:54.504Z",
            "images": [
                "https://instagram.lern.dev/storage/users/6/gallery/97ad125f-4165-4372-b6a5-8d90883dae76.jpg",
                "https://instagram.lern.dev/storage/users/6/gallery/5a48ca57-dfc9-4b46-b4fc-0f10535b5a89.jpg"
            ],
            "user": {
                "id": 6,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
            }
        },
        {
            "id": 11,
            "description": "Текст какой-то",
            "createdAt": "2023-08-12T20:16:10.751Z",
            "images": [
                "https://instagram.lern.dev/storage/users/6/gallery/bb71fccf-cd8f-420f-9312-88447a1de203.jpg",
                "https://instagram.lern.dev/storage/users/6/gallery/3a3e3213-0a47-4bf7-84b2-24c426376c6e.jpg"
            ],
            "user": {
                "id": 6,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
            }
        },
        {
            "id": 12,
            "description": "Текст какой-то",
            "createdAt": "2023-08-12T20:16:38.845Z",
            "images": [
                "https://instagram.lern.dev/storage/users/6/gallery/fe505416-e5e7-4683-9ac4-b5f6d6d63c72.jpg",
                "https://instagram.lern.dev/storage/users/6/gallery/86c29a0b-a1e2-42b4-bd43-fb6fa4476acf.jpg"
            ],
            "user": {
                "id": 6,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
            }
        },
        {
            "id": 13,
            "description": "Текст какой-то",
            "createdAt": "2023-08-12T20:17:11.254Z",
            "images": [
                "https://instagram.lern.dev/storage/users/6/gallery/23338ec8-2c88-4bd4-9cd3-66dea339ea24.jpg",
                "https://instagram.lern.dev/storage/users/6/gallery/73553e51-1847-49e4-8c37-5ba6d6dfef5a.jpg"
            ],
            "user": {
                "id": 6,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/6/avatar/d8d74f86-3bad-43ba-af03-a3469a9011b1.png"
            }
        }
    ]


    return (
        <div className='squareGrid2'>
            {posts.map(post => <Post key={post.id} post={post}/>)}


        </div>
    )
}
