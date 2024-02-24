import React from "react";

const Calendar = () => {
  const times = ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
  
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th> </th>
            <th> Sunday </th>
            <th> Monday </th>
            <th> Tuesday</th>
            <th> Wednesday</th>
            <th> Thursday</th>
            <th> Friday</th>
            <th> Saturday</th>
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={index}> 
              <td className="time">{time}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;