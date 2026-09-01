
const Card = ({obj}) => {
  console.log(obj);
  
  return (
    <div className="flex bg-black/20 m-2">
        <img src={obj.image} className=" m-3 w-50" alt="" />
        <div className="ml-10 mt-10">
          <h1 className="text-5xl">
          {obj.title}
        </h1>
        <p className="text-1x1 mt-4 text-black/80">
          {obj.description}
        </p>
        </div>
    </div>
  )
}

export default Card
