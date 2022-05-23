import styled from "styled-components";
import ClockBackground from "./ClockBackground";
import ClockPointer from "../pointer/ClockPointer";
import { useEffect, useState } from "react";

const Clock = (props) => {

  const [light, setLight] = useState(true)
  const [hourDeg, setHourDeg] = useState()
  const [minuteDeg, setMinuteDeg] = useState()
  const [secondDeg, setSecondDeg] = useState()
  const [Hour, setHour] = useState();

  const deg = 6

  const setTime = () => {
    let nowTime = new Date();
    let day = new Date(nowTime.getTime() + props.timezone * 3600000)
    let hour = day.getUTCHours() * deg * 5
    let minute = day.getUTCMinutes() * deg
    let second = day.getUTCSeconds() * deg

    setHourDeg(hour + minute / 12)
    setMinuteDeg(minute + second / 60)
    setSecondDeg(second)
    setHour(day.getUTCHours())
  }


  useEffect(() => {
    if (+Hour >= 19 || +Hour < 6) {
      setLight(false)
    }
  }, [Hour])

  useEffect(() => {
    setTime()
    const interval = setInterval(() => {
      setTime()
    }, 100)
    return () => clearInterval(interval)
  }, [])


  return (
    <ClockBackground>
      <h2> {props.city}</h2>
      <ClockPointer is_white={light}
        hourDeg={hourDeg}
        minuteDeg={minuteDeg}
        secondDeg={secondDeg}
      />
    </ClockBackground>
  )
}

export default Clock;
