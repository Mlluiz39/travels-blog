import React, { useState, useEffect } from "react";
import api from "@/shared/services/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await api.get("/posts");
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handlePostClick = async (props) => {
    const { data } = await api.get(`/posts/${props.id}/comments`);
    MySwal.fire({
      title: <p>{props.title}</p>,
      html: (
        <div>
          <p className="text-lg font-medium">comentários</p>
          <ul>
            {data.map((comment) => (
              <li
                className="bg-slate-500 m-2 p-3 rounded-md text-slate-200"
                key={comment.id}
              >
                {comment.body}
              </li>
            ))}
          </ul>
        </div>
      ),
      confirmButtonText: "Fechar",
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-sky-500 my-4 flex justify-center">
        Lista de Posts
      </h1>
      <ul className="m-6 grid sm:grid-cols-1 md:grid-cols-3  gap-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="my-2 cursor-pointer rounded  shadow-lg bg-slate-200"
          >
            <h2 className="text-zinc-500 text-lg font-semibold p-2 flex justify-center">
              {post.title.slice(0, 20)}
              {post.title.length > 20 && "..."}
            </h2>
            <img
              className="p-2"
              src={`https://picsum.photos/640/360?random=${post.id}`}
              alt="Picture of the author"
              width={640}
              height={360}
            />
            <div className="bg-slate-200 text-indigo-600 p-3 flex justify-center items-center">
              <button onClick={() => handlePostClick(post)}>ver mais</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
