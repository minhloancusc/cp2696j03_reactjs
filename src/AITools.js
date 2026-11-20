import { useState } from "react";
function AITools() {
  const [output, setOutput] = useState("");
  const handleGenerate = () => {
    const result = "AI Generated Tip: Stay curious and keep learning! 🤖✨";
    setOutput(result);
  };
  return (
    <section className="home-container">
      <h1>AI Tools</h1>
      <button onClick={handleGenerate}>Generate Tip</button>
      <p>{output}</p>
    </section>
  );
}

export default AITools