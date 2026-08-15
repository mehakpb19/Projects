const Card = (props) => {
  return (
    <div key={props.key} className="bg-white h-max min-h-52 w-40 p-3 rounded-xl text-black">
      <h3 className="text-xl mt-2">{props.Titel}</h3>
      <p className="text-gray-600 mt-2">{props.Note}</p>
      <button 
        className="w-full rounded bg-red-500 p-1 mt-auto mb-2"
      onClick={()=>{
        let newCopy = [...props.Arr]
        newCopy.splice(props.key,1)
        props.SetArr(newCopy);
      }}>Delete</button>
    </div>
  );
};

export default Card;
