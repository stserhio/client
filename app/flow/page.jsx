
import Post from '../../components/post'

export default function Flow() {

    const posts = [
        {
            "id": 47,
            "description": "Lorem ipsum ",
            "createdAt": "2023-08-12T12:13:16.330Z",
            "images": [
                "https://instagram.lern.dev/storage/users/51/gallery/3cc30033-1093-4d84-96c6-fa0c895cfe1c.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/d5ce0e7f-3c81-49b6-b8de-cd59a1ed81e5.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/a026f725-1646-4422-9c22-8b0cba06b54c.jpg"
            ],
            "user": {
                "id": 51,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/51/avatar/429898dd-c88b-4ade-9b47-1f01e5cb3f02.jpeg"
            }
        },
        {
            "id": 48,
            "description": "Lorem ipsum ",
            "createdAt": "2023-08-12T12:13:22.075Z",
            "images": [
                "https://instagram.lern.dev/storage/users/51/gallery/f1b42828-fec1-4896-b6d4-eedbea5dc718.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/e2c82644-9fb1-49e3-8046-a80be7a34ac6.jpg"
            ],
            "user": {
                "id": 51,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/51/avatar/429898dd-c88b-4ade-9b47-1f01e5cb3f02.jpeg"
            }
        },
        {
            "id": 49,
            "description": "Lorem ipsum ",
            "createdAt": "2023-08-12T12:13:29.575Z",
            "images": [
                "https://instagram.lern.dev/storage/users/51/gallery/c0c0c579-e7d9-4158-b907-09651b807b1a.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/894d222c-f7ed-44d3-8705-a878db4bc08e.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/74eef0de-6288-4a91-a0d8-38dc449b0389.jpg"
            ],
            "user": {
                "id": 51,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/51/avatar/429898dd-c88b-4ade-9b47-1f01e5cb3f02.jpeg"
            }
        },
        {
            "id": 50,
            "description": "Lorem ipsum ",
            "createdAt": "2023-08-12T12:13:36.944Z",
            "images": [
                "https://instagram.lern.dev/storage/users/51/gallery/9d2bc03b-765e-47e6-9143-d3fcbc1f2fe1.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/23fd4366-3c38-45c6-8a6b-8a125781168a.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/04d03b44-fc7b-4806-9029-4f2ca45ab7a6.jpg"
            ],
            "user": {
                "id": 51,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/51/avatar/429898dd-c88b-4ade-9b47-1f01e5cb3f02.jpeg"
            }
        },
        {
            "id": 51,
            "description": "Lorem ipsum ",
            "createdAt": "2023-08-12T12:13:49.977Z",
            "images": [
                "https://instagram.lern.dev/storage/users/51/gallery/209877a7-29de-4c5f-a365-f55e8a4b2e1b.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/58b816cf-d39e-4792-a9a1-f24dae53b8f2.jpg"
            ],
            "user": {
                "id": 51,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/51/avatar/429898dd-c88b-4ade-9b47-1f01e5cb3f02.jpeg"
            }
        },
        {
            "id": 52,
            "description": "Lorem ipsum ",
            "createdAt": "2023-08-12T12:13:57.647Z",
            "images": [
                "https://instagram.lern.dev/storage/users/51/gallery/58e202f5-df66-4682-80af-e645a6442a71.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/e22d44a1-f533-4403-9b23-78918d1ba9ff.jpg"
            ],
            "user": {
                "id": 51,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/51/avatar/429898dd-c88b-4ade-9b47-1f01e5cb3f02.jpeg"
            }
        },
        {
            "id": 53,
            "description": "Lorem ipsum ",
            "createdAt": "2023-08-12T12:14:05.210Z",
            "images": [
                "https://instagram.lern.dev/storage/users/51/gallery/bdd9e7d1-1f17-44e8-8884-c6656a654a14.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/a4f40486-60cd-4f42-b5c2-4a60d61a49e6.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/d9150986-8362-4219-8ace-d05b7fed0251.jpg"
            ],
            "user": {
                "id": 51,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/51/avatar/429898dd-c88b-4ade-9b47-1f01e5cb3f02.jpeg"
            }
        },
        {
            "id": 54,
            "description": "Lorem ipsum ",
            "createdAt": "2023-08-12T12:14:17.811Z",
            "images": [
                "https://instagram.lern.dev/storage/users/51/gallery/17b0cf9b-96d6-49ed-86db-45644e2fd11b.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/cbb91b19-0ce4-4204-9ba1-6d3fdb87b5ba.jpg"
            ],
            "user": {
                "id": 51,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/51/avatar/429898dd-c88b-4ade-9b47-1f01e5cb3f02.jpeg"
            }
        },
        {
            "id": 55,
            "description": "Lorem ipsum ",
            "createdAt": "2023-08-12T12:14:25.830Z",
            "images": [
                "https://instagram.lern.dev/storage/users/51/gallery/120288c4-bba3-47a9-9ccf-21d71060323c.jpg",
                "https://instagram.lern.dev/storage/users/51/gallery/f1b42828-fec1-4896-b6d4-eedbea5dc718.jpg"
            ],
            "user": {
                "id": 51,
                "firstName": "Ryan",
                "lastName": "Gosling",
                "avatar": "https://instagram.lern.dev/storage/users/51/avatar/429898dd-c88b-4ade-9b47-1f01e5cb3f02.jpeg"
            }
        },
    ]

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full p-4 gap-4 sm:p-8 sm:gap-8 lg:p-12 lg:gap-12'>
            {posts.map( post => <Post key={post.id} post={post}/> )}
        </div>
    )
}