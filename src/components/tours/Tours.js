import './Tours.css'

function Tours(props) {
  return (
    <div className='Container'>
      <h3 className='TopDescrption'>Places to visit:</h3>
      <div className='PlaceContainer'>
        
        {props.data2.map((place) => {

          return (
            <div key={place.id}>
              <div className='PlaceDiv' >
                <img className='PlaceImg' src={place.image} alt={place.name}></img>
                <h4 className='PlaceName'>- {place.name}</h4>
              </div><hr></hr>
            </div>
          )
        })}</div>

    </div>
  )
}

export default Tours;