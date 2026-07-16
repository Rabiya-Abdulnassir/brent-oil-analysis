function EventTable({ events }) {
  if (!events || events.length === 0) {
    return <p>No events available.</p>;
  }

  return (
    <div className="table-container">
      <h2>Major Events</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.Date}</td>
              <td>{event.Event}</td>
              <td>{event.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;