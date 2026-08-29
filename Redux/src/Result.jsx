import { useEffect } from "react";
import Resultcard from "./Resultcard";
import { Fetchphoto } from "./redux/Api";
import { useSelector, useDispatch } from "react-redux";
import { setresult } from "./redux/getdataSlice";

const Result = () => {
  const dispatch = useDispatch();
  let { query, result } = useSelector((state) => state.search);

  useEffect(() => {
    const fethdata = async () => {
      if (query == "") return;
      let data = await Fetchphoto(query);
      dispatch(setresult(data));
    };
    fethdata();
  }, [query]);
  return (
    <div>
      <div className="w-full mt-5">
        <div className="w-full grid grid-cols-4 gap-7 px-10 place-items-center  overflow-hidden">
          {result.map((e) => {
            return (
              <Resultcard
                key={e.thumbline}
                id={e.id}
                url={e.thumbline}
                titel={e.titel}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Result;
