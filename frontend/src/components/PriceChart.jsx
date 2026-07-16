import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine
} from "recharts";

function PriceChart({ data, selectedEvent }) {

  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart data={data}>

        <CartesianGrid strokeDasharray="3 3" />

        {selectedEvent && (
          <ReferenceLine
            x={selectedEvent}
            stroke="red"
            strokeWidth={2}
            label="Event"
          />
        )}

        <XAxis dataKey="Date" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="Price"
          stroke="#2563eb"
          strokeWidth={2}
          dot={false}
        />

      </LineChart>
    </ResponsiveContainer>
  );
}

export default PriceChart;