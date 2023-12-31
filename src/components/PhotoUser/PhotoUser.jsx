import { useRef } from "react";

export const PhotoUser = ({url,imageUserRef,setclick}) =>{    
    const imageRef = useRef();

    const handleAssignPhoto=()=>{
        const image = imageRef.current.src;
        imageUserRef.current.src = image;
        setclick(false);
    }

    return(
        <div onClick={handleAssignPhoto} className="relative hover:scale-105 transition-all duration-300">
            <picture className="cursor-pointer user-img rounded-full">
                <img  src={url} ref={imageRef} className="rounded-full h-[120px] md:h-[150px]" alt="" />
            </picture>
        </div>
    )
}