import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  handelReset,
}) {
  return (
    <div className={css.div}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handelReset}>Reset</button>}
    </div>
  );
}
