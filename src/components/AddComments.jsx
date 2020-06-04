import React, { useState } from "react";

import Comments from "./Comments";
import "./../styles/comments.scss";

export default () => {
  const [comments, setTodos] = useState([]);

  const toggleComplete = i =>
    setTodos(
        comments.map(
        (comment, k) =>
          k === i
            ? {
                ...comments,
                complete: !comments.complete
              }
            : comment
      )
    );

  return (
    <div className="comments">
      <Comments
        onSubmit={text => setTodos([{ text, complete: false }, ...comments])}
      />
      <div>
        {comments.map(({ text, complete }, i) => (
          <div
          className="comments"
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button className="ui inverted red button" onClick={() => setTodos([])}>Remove comments</button>
    </div>
  );
};