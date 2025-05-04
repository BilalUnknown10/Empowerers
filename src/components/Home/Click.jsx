"use client";

import AnalogClock from "analog-clock-react";

const Clock = ({ eventTime }) => {
  const eventDate = new Date(eventTime);
  const fixedHours = eventDate.getHours();
  const fixedMinutes = eventDate.getMinutes();
  const fixedSeconds = eventDate.getSeconds();

  let options = {
    width: "150px",
    border: true,
    borderColor: "#2E3440",
    baseColor: "#1E1E1E",
    centerColor: "#D8DEE9",
    centerBorderColor: "#2E3440",
    handColors: {
      second: "#BF616A",
      minute: "#D8DEE9",
      hour: "#ECEFF4",
    },
    seconds: fixedSeconds, // Fixed time (not running)
    minutes: fixedMinutes,
    hours: fixedHours,
    // Ensure the clock doesn't run by setting the `useCustomTime` option if available
    useCustomTime: true, // This option might be available in some versions of the library
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="textGray text-lg font-semibold mb-2">Event Time</h2>
      <AnalogClock {...options} />
    </div>
  );
};

export default Clock;