import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "상훈",
    comment: "굿 잡",
  },
  {
    name: "하영",
    comment: "사랑",
  },
  {
    name: "원우",
    comment: "자랑",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
