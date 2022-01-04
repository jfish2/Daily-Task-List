import React from "react";

function CurrentDate() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weeks = ["Sunday", "Monday", "Tuesday","Thursday", "Friday", "Saturday"]
    const date = new Date();
    const month =  months[date.getMonth()]
    const year = date.getFullYear()
    const day = date.getDate();
    const dayOfWeek = weeks[date.getDay()];

    const today = dayOfWeek + ", " + month + " " + day + ", " + year;

    console.log(today)
    return (
        <div style={{
            color:"teal"
        }}>
            {today}
        </div>
    )
}

export default CurrentDate;