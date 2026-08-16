import { useContext } from "react";
import { UserdataContext } from "./../Conext/UserContext";

const Card = () => {
  const { User } = useContext(UserdataContext);
  console.log(User);
  return (
    <div className="border-gray-600 border w-[87%] mt-3 mb-4 rounded-lg flex flex-col  gap-2">
      <div className="w-full h-full relative mb-20">
        <div className="bg-[#FF97A2] w-full h-40 relative rounded-t-lg"></div>
        <img
          className="w-7 absolute top-2 left-2"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
          alt=""
        />
        <img
          className="w-40 rounded-full border absolute top-1/2 left-5 transform border-gray-700"
          src={User.dp}
          alt=""
        />
        <div className="absolute top-1/2 right-5 transform translate-y-[-50%] flex gap-3">
          <div className="text-center text-[20px] leading-5">
            <h4>Followers:</h4>
            <h4 className="font-bold text-[#29903b]">{User.followers}</h4>
          </div>
          <div className="text-center text-[20px] leading-5">
            <h4>Following:</h4>
            <h4 className="font-bold text-[#29903b]">{User.following}</h4>
          </div>
          <div className="text-center text-[20px] leading-5">
            <h4>Repos:</h4>{" "}
            <h4 className="font-bold text-[#29903b]">{User.repos}</h4>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold ml-5 leading-0">
        {User.username ? User.username : "No Username"}
      </h3>
      <p className="ml-5 text-gray-400">{User.bio ? User.bio : "no bio"}</p>
      <div className="flex gap-3 ml-5 mt-2 mb-3">
        latest commited Repos:
        {User.latestrepo.length > 0 ? (
          User.latestrepo.map((e) => {
            return (
              <div key={e.url}>
                <a
                  className="whitespace-nowrap bg-[#29903b] px-2 py-1 rounded-lg text-white active:bg-[#29903b] hover:bg-[#359f47]"
                  href={e.url}
                >
                  {e.name}
                </a>
              </div>
            );
          })
        ) : (
          <p className="text-red-500"> No Latest commits</p>
        )}
      </div>
    </div>
  );
};

export default Card;
