import Image from "next/image";

export default function Nav() {
    return (
        <div className="grid grid-rows-2 md:grid-cols-2
        m-2 mr-1  ">
            <Image src="/Rectangle.png" height={300} width={200} />
            <div className="bg-[#F2E9E4]
             m-2 mr-2
              ">
           <h2 className="font-bold align-text-bottom" >about</h2>
            </div>
        </div>
        
    )
}
