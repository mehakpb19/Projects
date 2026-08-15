const Gallary = (props) => {
    console.log(props.loading);
    
  return (
    <div className="place-items-center mt-30 border grid md:grid-cols-2 max-lg:grid-cols-1 lg:grid-cols-4 gap-4 p-5">
      {props.data && props.data.length > 0 && props.data.map((e, i) => {
        return (
          <div key={`${e.id}-${i}`}>
            <a href={e.url} target="_blank" rel="noreferrer">
              <div className="w-72 hover:-translate-y-2 overflow-hidden transition-all duration-300">
                <img
                  className="rounded-2xl"
                  src={e.download_url}
                  alt={e.author || "Image"}
                  loading="lazy" 
                />
              </div>
            </a>
          </div>
        );
      })}
      {props.loading &&(<div className=" text-center py-5 text-xl">
          Loading more images...
        </div>) }
      
    </div>
  );
};

export default Gallary;