import { useNavigate } from "react-router-dom";

function Appointments() {
  const navigate = useNavigate();

  const totalDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`);
  }

  const slotsFor7Days = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);

    const dayName = totalDays[currentDate.getDay()];
    const dateNumber = currentDate.getDate();
    const monthNumber = currentDate.getMonth() + 1;

    slotsFor7Days.push({
      day: dayName,
      date: `${dateNumber}/${monthNumber}`,
      times: [...timeSlots]
    });
  }

  const handleClick = (slot, time) => {
    navigate("/BookngAppointments", {
      state: {
        day: slot.day,
        date: slot.date,
        time: time
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book Your Appointments Any Time</h1>

      <div className="grid gap-4">
        {slotsFor7Days.map((slot, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{slot.day}</h2>
            <p className="mb-2">Date: {slot.date}</p>
            <div className="flex flex-wrap gap-2">
              {slot.times.map((time, idx) => (
                <button
                  key={idx}
                  onClick={() => handleClick(slot, time)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;
