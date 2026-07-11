function StatsCard({ icon, value, label }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>

      <h3>{value}</h3>

      <p>{label}</p>
    </div>
  );
}

export default StatsCard;
