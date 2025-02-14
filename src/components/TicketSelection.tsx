"use client"

import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem
} from '@/components/ui/select'
import { ProgressBar } from './ProgressBar'
import { Button } from '@/components/ui/button';
export default function TicketSelection() {
    const [selected, setSelected] = useState<string | null>(null)
    const [ticketType, setTicketType] = useState<string | null>(null)
    const [numberOfTickets, setNumberOfTickets] = useState<number | null>(null)
    const [currentStep, setCurrentStep] = useState(1)
    const totalSteps = 3


    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((prev: number) => prev + 1)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev: number) => prev - 1)
        }
    }

    return (
        <div className="flex items-center justify-center mt-5 md:mt-10">
            <div className="w-full max-w-xl bg-[#041E23] border  border-[#0E464F] backdrop-blur-xl rounded-3xl p-4 md:p-8">
                <ProgressBar step={currentStep} totalSteps={totalSteps} title="Ticket Selection" />

                <div className='bg-[#08252B] border border-[#0E464F] rounded-2xl p-6'>
                    <div className="bg-[#003333]/50 rounded-xl p-6 mb-8 border-b-4 border-x-2 border-[#07373F] text-center" style={{ background: "radial-gradient(57.42% 106.59% at 14.02% 32.06%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), rgba(10, 12, 17, 0.10)", backdropFilter: "blur(7px)" }}>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 road-rage">Techember Fest &#34;25</h2>
                        <p className="text-white text-center text-base md:text-sm mb-10 md:mb-3 roboto">
                            Join us for an unforgettable experience at
                            <br />
                            [Event Name]! Secure your spot now.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-1 text- text-white ">
                            <div>
                                <span className='text-base'>&#128205;</span>
                                <span>[Event Location]</span>
                            </div>
                            <span className="hidden md:block mx-2">||</span>
                            <span>March 15, 2025 | 7:00 PM</span>
                        </div>
                    </div>

                    <div className='mb-8 bg-[#07373F] h-1 rounded-full' />

                    <div className="mb-6">
                        <label className="text-base text-white mb-3 block roboto">Select Ticket Type:</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-[#052228] border border-[#07373F] rounded-3xl p-4">
                            <div
                                className={`border-[#197686] hover:bg-[#197686] p-4 rounded-lg cursor-pointer border  ${selected === "regular" ? "bg-[#197686] text-white" : ""}`}
                                onClick={() => {
                                    setSelected("regular")
                                    setTicketType("regular")
                                    console.log(ticketType)
                                }}>
                                <div className="text-white text-2xl font-bold roboto">Free</div>
                                <div className="text-base text-white roboto">REGULAR ACCESS</div>
                                <div className="text-sm text-white roboto">20/32</div>
                            </div>
                            <div className={`border-[#197686] hover:bg-[#197686] p-4 rounded-lg cursor-pointer border ${selected === "vip" ? "bg-[#197686] text-white" : ""}`}
                                onClick={() => {
                                    if (ticketType != "vip") {
                                        setTicketType("vip")
                                    }
                                    setSelected("vip")
                                    console.log(ticketType)
                                }}>
                                <div className="text-white text-2xl font-bold roboto">$150</div>
                                <div className="text-base text-white roboto">VIP ACCESS</div>
                                <div className="text-sm text-white roboto">20/32</div>
                            </div>
                            <div className={`border-[#197686] hover:bg-[#197686] p-4 rounded-lg cursor-pointer border  ${selected === "vvip" ? "bg-[#197686] text-white" : ""}`}
                                onClick={() => {
                                    setSelected("vvip")
                                    setTicketType("vvip")
                                    console.log(ticketType)
                                }}>
                                <div className="text-white text-2xl font-bold roboto">$150</div>
                                <div className={`text-base text-white roboto`}>VVIP ACCESS</div>
                                <div className={`text-sm text-white roboto`}>30/32</div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="text-sm text-white text-base mb-3 block roboto">Number of Tickets</label>
                        <Select defaultValue="1">
                            <SelectTrigger className="w-full bg-[#041E23] border border-[#07373F] text-white">
                                <SelectValue placeholder="Select number of tickets" />
                            </SelectTrigger>
                            <SelectContent className='bg-[#041E23] border border-[#07373F] text-white'>
                                <SelectItem value="1" onClick={() => {
                                    setNumberOfTickets(1)
                                    console.log(numberOfTickets)
                                }}>1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row gap-3 ">
                        <Button
                            variant="outline"
                            className="w-full font-[JejuMyeongjo] bg-transparent text-[#24A0B5] border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white"
                            onClick={handleBack}
                        >
                            {currentStep === 1 ? "Cancel" : "Back"}
                        </Button>
                        <Button className="w-full bg-[#24A0B5] hover:bg-[#24A0B5]/30 font-[JejuMyeongjo] text-white" disabled={!selected} onClick={handleNext}>{currentStep === totalSteps ? "Finish" : "Next"}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
