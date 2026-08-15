const Card = (props) => {
  return (
    <div className="w-96 relative rounded-3xl  overflow-hidden ">
      <img className="h-full w-full object-cover " src={props.imgSrc} alt="" />
      <div className="bg-linear-to-t from-black to-transparent h-full w-full absolute top-0">
        <h1 className=" absolute top-5 left-5 bg-white rounded-full w-10 h-10 text-center items-center justify-center flex font-bold text-lg">
          {props.id}
        </h1>
        <div className="">
          <p className="text-white text-lg font-semibold absolute bottom-15 left-0 right-0 p-4">{props.bio}</p>
          <button className="absolute bottom-0 left-0 right-0 m-4 bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
