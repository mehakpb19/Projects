import { Play } from "lucide-react";
import { Link } from 'react-router';
const Playlist = () => {
  return (
    <Link to={'/'} className="flex h-[10%] w-full relative group ">
        <div className='bg-black/30 h-full w-full absolute items-center pl-3 invisible flex group-hover:visible  rounded'><Play fill="white" size={20}/></div>
        <img src="https://i.scdn.co/image/ab67616d00001e02ca239f431fd5de3487a6a946" className="rounded-md"alt="" />
        <div className="ml-3">
      <h2 className='text-1xl m-0 font-semibold'>Playlist</h2>
        <p className="text-sm text-gray-300">Artist</p>
        </div>
    </Link>
  )
}

export default Playlist
