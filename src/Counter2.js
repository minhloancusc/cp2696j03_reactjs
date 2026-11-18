import { useState } from "react";

function Counter2() {
  let [like, setLike] = useState(0);
  return (
    <div>      
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <h1>{like}</h1>
    </div>
  );
}

export default Counter2;
