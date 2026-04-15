export default function StatusCard({ title, status }) {
  const statusColor =
    status === "Success"
      ? "#16a34a"
      : status === "Running"
      ? "#ca8a04"
      : "#dc2626";

  return (
    <div className="status-card">
      <h4>{title}</h4>
      <p style={{ color: statusColor }}>{status}</p>
    </div>
  );
}