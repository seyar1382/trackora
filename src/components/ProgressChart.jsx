import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function ProgressChart({ projects, getProgress }) {
  const data = projects.map((project) => ({
    name: project.title,
    progress: getProgress(project),
  }));

  return (
    <div className="chart-card">
      <h2>Project Progress</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />

          <Bar dataKey="progress" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;
