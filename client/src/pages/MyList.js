const MyList = ({ catEvent }) => {
  let myEvents = []
  myEvents.push(catEvent)
  console.log(catEvent)
  return
  ;<h1>{catEvent.name}</h1>
  // ;<div>
  //   console.log(catEvent) ;<h1> Upcoming Events: </h1>
  //   {myEvents?.map((myEvent) => (
  //     <div>
  //       <h1>{myEvent.name}</h1>
  //       <h4>{myEvent.date}</h4>
  //     </div>
  //   ))}
  // </div>
}

export default MyList
