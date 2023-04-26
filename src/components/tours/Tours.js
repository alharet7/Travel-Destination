
import './Tours.css'
import Tour from "../tours/tour/Tour";

function Tours(props) {
  return (
    <div className='Container'>
      <h3 className='TopTitle'>Places to visit:</h3>
      <Tour data03={props.data02} />

    </div>
  )
}

export default Tours;