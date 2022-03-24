function Temperature(props) {
  const { celcious, fahrenheit, setDegrees, degrees } = props

  return (
    <div className="weather__temperature__container">
      {degrees === "℃" ?

        <p className="weather__temperature__degrees">
          {Math.floor(celcious)} {degrees}
        </p>
        :
        <p className="weather__temperature__scala">
          {Math.floor(fahrenheit)} {degrees}
        </p>
      }
      <button className="weather__temperature__button" onClick={() => setDegrees(degrees === "℃" ? "℉" : "℃")}>℃/℉</button>
    </div>
  )
}
export default Temperature;
