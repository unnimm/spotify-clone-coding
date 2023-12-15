"use client"
import { Song } from '../type';
import useLoadImage from "@/hooks/useLoadImage"
import PlayButton from './PlayButton';



interface SongItemProps {
    data: Song;
    onClick:(id: string) => void
}

const SongItem: React.FC<SongItemProps> = ({data, onClick}) => {
    const imagePath = useLoadImage(data)

    return (
        {/*data의 id를 가져와서 노래 카드 하나하나 생성*/}
        <div onClick={()=>onClick(data.id)} className="
        relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3">
           <div
            className="
            relative
            aspect-square
            w-full
            h-full
            rounded-md
            overflow-hidden
            "
           >
            <Image 
            className="object-cover"
            src={imagePath || '/images/liked.png'}
            fill
            alt="Image"/>
           </div>

           {/*title, content넣는 코드*/}
           <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full">{data.title}</p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">By {data.author}</p>
           </div>

           {/*Play Button*/}
           <div className="absolute bottom-24 right-5">
            <PlayButton />
            </div>
        </div>
    )
}
export default SongItem;