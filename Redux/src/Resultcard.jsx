
import { useDispatch } from 'react-redux';
import { setCollection } from './redux/collection';


const Resultcard = (props) => {
  const dispatch= useDispatch();
  return (
    <div className="relative">
      <img src={props.url} alt="" />
      <div className="absolute top-full -translate-y-full bg-linear-to-b from-black/0 to-black/90 h-[30%] bottom-0 w-full">
      <div className="absolute p-3 top-full -translate-y-full flex">
        <div className="capitalize ">{props.titel}</div>
      <button onClick={()=>dispatch(setCollection(props))} className="rounded-[10px] active:scale-95 bg-blue-600 p-3">save</button>
      </div>
      </div>        
    </div>
  )
}

export default Resultcard
