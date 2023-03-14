import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const User = () => {

    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_end=50")
            .then(res => res.json())
            .then(json => setPosts(json))
    }, []);

    return (
        <>
            <div className=" container mx-auto">
                <h1 className="text-3xl font-bold underline my-7">Post List</h1>
                <div className="grid grid-cols-4 gap-5">
                    {posts.map(post => {
                        return (
                            <>
                                <div key={post.id} className="border p-5 shadow-md rounded-md" onClick={() => navigate(`/detail/${post.id}`)} >
                                    <img src={post.url} className="rounded mb-3" />
                                    <div>
                                        {post.id}. {post.title}
                                    </div>
                                    <div className="mt-5">
                                        <Link to={`/detail/${post.id}`} className="px-3 py-1 bg-blue-700 text-white rounded" >See More</Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default User;