import Image from "next/image"

export default function Ticket() {
    return (
        <div className="relative h-[740px] md:h-[650px] flex items-center justify-center">
            <Image src={"/ticket.png"} alt="ticket" fill className="w-full h-full"/>
        </div>
    )
}
     