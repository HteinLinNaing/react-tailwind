import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {

    const { id } = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(res => res.json())
            .then(json => setPost(json))
    }, []);

    return (
        <>
            <div className="container mx-auto mt-5">
                <div className="my-5">
                    <Link to="/" className="bg-black text-white px-3 py-2 rounded">Back</Link>
                </div>
                <div className="border my-5 p-5 shadow-md rounded">
                    <img src={post.url} className="rounded mb-3" />
                    <h1 className="text-3xl font-bold mb-3">Details {id}</h1>
                    <h3 className="font-bold">Title : {post.title}</h3>
                </div>
            </div>
        </>
    )
}

export default Detail;