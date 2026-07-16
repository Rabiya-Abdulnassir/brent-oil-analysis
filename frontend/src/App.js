import { useEffect, useState } from "react";

import api from "./api";

import PriceChart from "./components/PriceChart";
import ChangePointCard from "./components/ChangePointCard";
import SummaryCard from "./components/SummaryCard";
import EventTable from "./components/EventTable";

import "./App.css";


function App() {

  const [prices, setPrices] = useState([]);
  const [changePoint, setChangePoint] = useState(null);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");


  useEffect(() => {

    api.get("/prices")
      .then((res) => {
        setPrices(res.data);
      })
      .catch((err) => {
        console.error("Prices error:", err);
      });


    api.get("/change-point")
      .then((res) => {
        setChangePoint(res.data[0]);
      })
      .catch((err) => {
        console.error("Change point error:", err);
      });


    api.get("/events")
      .then((res) => {

        // Convert event dates to same format as price dates
        const formattedEvents = res.data.map((event) => ({
          ...event,
          Date: new Date(event.Date)
            .toISOString()
            .split("T")[0]
        }));

        setEvents(formattedEvents);

      })
      .catch((err) => {
        console.error("Events error:", err);
      });


  }, []);



  return (

    <div className="dashboard">


      <h1>
        Brent Oil Price Analysis Dashboard
      </h1>



      {changePoint && (

        <div className="summary-grid">


          <SummaryCard
            title="Change Point"
            value={changePoint.change_date}
          />


          <SummaryCard
            title="Average Before"
            value={`$${Number(changePoint.before_average_price).toFixed(2)}`}
          />


          <SummaryCard
            title="Average After"
            value={`$${Number(changePoint.after_average_price).toFixed(2)}`}
          />


          <SummaryCard
            title="Price Change"
            value={`${Number(changePoint.percentage_change).toFixed(2)}%`}
          />


        </div>

      )}




      <div className="filter-section">


        <label>
          Select Event:
        </label>



        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
        >


          <option value="">
            All Events
          </option>



          {events.map((event, index) => (

            <option
              key={index}
              value={event.Date}
            >

              {event.Event}

            </option>

          ))}



        </select>


        <p>
          Selected Date: {selectedEvent}
        </p>


      </div>





      <ChangePointCard data={changePoint} />



      <PriceChart
        data={prices}
        selectedEvent={selectedEvent}
      />



      <EventTable events={events} />



    </div>

  );

}


export default App;