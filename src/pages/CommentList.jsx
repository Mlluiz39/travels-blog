import React, { useState, useEffect } from "react";
import api from "@/shared/services/api";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   api
  //     .get(`/comments?postId=${postId}`)
  //     .then((response) => setComments(response.data));
  // }, [postId]);
  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await api.get(`/posts/${postId}/comments`);
    };

    fetchComments();
  }, []);

  console.log(comments);

  return (
    <div>
      <h2>Comentários</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
