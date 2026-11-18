function AIMessage() {
  const aiResponse = {
    message: "Your resume has been analyzed 📄✨",
    score: 87,
    recommendation: "Add quantified achievements for more impact 💡📈",
  };
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>AI Insights 🤖</h2>
      <p style={styles.text}>{aiResponse.message}</p>
      <p style={styles.text}>Score: {aiResponse.score} 🔍</p>
      <p style={styles.text}>{aiResponse.recommendation}</p>
      <button onClick={() => console.log("Clicked 👆")}>Click me</button>
    </section>
    
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f7f7f7",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    margin: "10px 0",
  },
};

export default AIMessage;
