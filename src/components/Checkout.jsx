import React, { useState } from "react";

const details = [
  {
    Id: 0,
    name: "Baghajatin, Kolkata, WB",
    Distance: "10km",
  },
  {
    Id: 1,
    name: "Garia, Kolkata, WB",
    Distance: "20km",
  },
  {
    Id: 2,
    name: "Sealdaha, Kolkata, WB",
    Distance: "15km",
  },

  {
    Id: 3,
    name: "Jadavpur, Kolkata, WB",
    Distance: "25km",
  },
];

const Checkout = () => {
  const [date, setDate] = useState({
    StartDate: "",
    EndDate: "",
    SetupDate: "",
  });

  const [fill, setFill] = useState(false);
  const [setUpValidate, setSetUpvalidate] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [locate, setLocate] = useState("");
  const [duration, setDuration] = useState("Set date and press enquiry button to see update");

  // Prev day logic

  let strEv = date.StartDate.split("T")[0];
  let setEv = date.SetupDate.split("T")[0];
  var today = new Date(strEv);
  let todays = new Date(today.getTime() - 86400000);
  var prevDay = todays.toLocaleDateString().split("/");
  let prevDayDate = [prevDay[2], prevDay[0], prevDay[1]].join("-");
  var prevDayTime = [prevDayDate, date.StartDate.split("T")[1]].join("T");

  // Convert Minutes
  function convertMinutes(minutes) {
    // Calculate the number of days
    const days = Math.floor(minutes / 1440);

    // Calculate the number of hours
    const hours = Math.floor((minutes % 1440) / 60);

    // Calculate the number of minutes
    const remainingMinutes = minutes % 60;

    return `${days} days, ${hours} hours, ${remainingMinutes} minutes`;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...date };
    newData[name] = value;
    setDate(newData);
  };

  const handleChanges = (e) => {
    setLocate(e.target.value);
  };

  const submit = () => {
    if (date.EndDate === "" || date.StartDate === "" || date.SetupDate === "") {
      setFill(true);
    } else {
      setFill(false);
    }
    // 1st condition
    if (date.EndDate < date.SetupDate) {
      setFirst(true);
    } else {
      setFirst(false);
    }

    //2nd condition
    date.SetupDate > date.StartDate ? setSecond(true) : setSecond(false);

    // 3rd condition
    prevDayTime < date.SetupDate
      ? setSetUpvalidate(true)
      : setSetUpvalidate(false);

    // get minutes of event
    var diff = Math.abs(new Date(date.EndDate) - new Date(date.StartDate));
    var minutes = Math.floor(diff / 1000 / 60);
    if (date.StartDate < date.EndDate) {
      setDuration(convertMinutes(minutes));
    } else {
      setDuration("Please correct your date");
    }
  };

  return (
    <div>
      <div>
        {fill ? (
          <h2 style={{ color: "red" }}>Please fill all the fields</h2>
        ) : (
          <></>
        )}
        <div>
          <label htmlFor="evDate">Event Start date and time&nbsp;&nbsp;</label>
          <input
            type="datetime-local"
            name="StartDate"
            onChange={(e) => handleChange(e)}
            value={date.StartDate}
            id="evDate"
          />
        </div>
        {first ? (
          <h3 style={{ color: "red" }}>
            Event end date and time should not be before setup date and time
          </h3>
        ) : (
          <></>
        )}
        <div>
          <label htmlFor="evDateEnd">Event End date and time&nbsp;&nbsp;</label>
          <input
            type="datetime-local"
            name="EndDate"
            onChange={(e) => handleChange(e)}
            value={date.EndDate}
            id="evDateEnd"
          />
        </div>
        {second ? (
          <h3 style={{ color: "red" }}>
            Setup date and time should not be after event date
          </h3>
        ) : (
          <></>
        )}
        {setUpValidate ? (
          <h3 style={{ color: "red" }}>
            Setup date can not be more than 1 day before event
          </h3>
        ) : (
          <></>
        )}
        <div>
          <label htmlFor="setDate">Set Up date and time&nbsp;&nbsp;</label>
          <input
            type="datetime-local"
            name="SetupDate"
            onChange={(e) => handleChange(e)}
            value={date.SetupDate}
            id="setDate"
          />
        </div>
        {locate == "" && <h3 style={{ color: "red" }}>Select any</h3>}
        <div style={{ marginTop: "2%" }}>
          <label htmlFor="location">Location&nbsp;&nbsp;</label>
          <select
            id="location"
            value={locate}
            onChange={(e) => handleChanges(e)}
          >
            {details.map((option) => (
              <option key={option.Id} value={option.Id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <button className="submita" onClick={submit}>
          Enquiry
        </button>
      </div>
      <div style={{ marginTop: "2%" }}>
        {locate != "" ? (
          <div
            style={{ border: "1px solid black", backgroundColor: "whitesmoke" }}
          >
            <h2>Details of location</h2>
            <span>
              <h3>Duration:</h3>
              {duration}
            </span>
            <span>
              <h3>Venue:</h3> {details[locate].name}
            </span>

            <span>
              <h3>Transport Charge:</h3>{" "}
              {Number(details[locate].Distance.split("k")[0]) * 2 * 50}
            </span>
            <span>
              <h3>Distance:</h3> {details[locate].Distance}
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Checkout;
