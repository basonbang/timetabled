import React from "react";
import Event from "./Event"

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
          <tr> 
              <td className="time">8AM</td>
              <Event event='Fancy Breakfast (10mg fent) 🔥' color='green'/>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr> 
              <td className="time">9AM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr> 
              <td className="time">10AM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr> 
              <td className="time">11AM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr> 
              <td className="time">12PM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr> 
              <td className="time">1PM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr> 
              <td className="time">2PM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr> 
              <td className="time">3PM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr> 
              <td className="time">4PM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr> 
              <td className="time">5PM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;