import React, { useState, useEffect } from "react";
import "./feedbackBox.css"; // Import the CSS file for styling

const FeedbackBox: React.FC<{ schematicName: string }> = ({ schematicName }) => {
  const [feedback, setFeedback] = useState<string>("");

  // Load feedback from sessionStorage when component mounts
  useEffect(() => {
    const savedFeedback = sessionStorage.getItem(`feedback_${schematicName}`);
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, [schematicName]);

  // Save feedback to sessionStorage on submit
  const handleSubmit = () => {
    sessionStorage.setItem(`feedback_${schematicName}`, feedback);
    alert("Feedback saved!");
  };

  return (
    <div className="feedback-container">
      <h3>Feedback</h3>
      <textarea
        className="feedback-textbox"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback..."
      />
      <button className="feedback-submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FeedbackBox;
