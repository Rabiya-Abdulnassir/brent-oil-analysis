function ChangePointCard({ data }) {
  if (!data) return null;

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <h2>Bayesian Change Point</h2>

      <p>
        <strong>Date:</strong> {data.change_date}
      </p>

      <p>
        <strong>Average Before:</strong> $
        {Number(data.before_average_price).toFixed(2)}
      </p>

      <p>
        <strong>Average After:</strong> $
        {Number(data.after_average_price).toFixed(2)}
      </p>

      <p>
        <strong>Percentage Change:</strong>{" "}
        {Number(data.percentage_change).toFixed(2)}%
      </p>
    </div>
  );
}

export default ChangePointCard;