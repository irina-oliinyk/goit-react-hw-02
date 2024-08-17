import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = window.localStorage.getItem("feedback");
    if (saveFeedback) {
      return JSON.parse(saveFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const handelReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handelReset={handelReset}
      />
      {totalFeedback > 0 && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
