"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Ticket from "./Ticket"
import Image from "next/image"

interface TicketConfirmationProps {
    onBookAnother: () => void
    userData: {
        name: string
        email: string
        image: string
        ticketType: string
    }
}

export function TicketConfirmation({ onBookAnother, userData }: TicketConfirmationProps) {
    const handleDownload = () => {
        // Implement ticket download logic here

        console.log("Downloading ticket...", userData)
    }

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-white font-[Alatsi]">Your Ticket is Booked!</h2>
                <p className="text-white text-base roboto">Check your email for a copy or you can <span className="font-semibold">download</span></p>
            </div>

            {/* Ticket Design */}
            <div className="relative mx-auto max-w-sm ">
                <Ticket />
                <div className="flex flex-col gap-6 absolute inset-y-5 inset-x-8 border border-[#24A0B5] w-[82%] md:w-[320px] h-[76%] md:h-[483px] rounded-2xl p-[14px]">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white mb-2 road-rage">Techember Fest &#34;25</h2>
                        <div className="flex flex-col ga">
                            <p className="text-white text-center text-xs roboto">
                                📍 04 Rumens road, Ikoyi, Lagos
                            </p>
                            <p className="text-white text-center text-xs roboto">
                                📅 March 15, 2025 | 7:00 PM
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center ">
                        <Image src={"/user.png"} alt="user" height={140} width={140} />
                    </div>
                    <table className="w-full border-[#133D44] border-spacing-y-4 p-2 bg-[#08343C] rounded-xl border-collapse ">
                        <tbody>
                            {/* Name and Email Row */}
                            <tr>
                                <td className="p-2 w-1/2 border-r-2 border-b-2 border-[#133D44]">
                                    <p className="text-xs  mb-1 text-[#fff] opacity-[0.33]">Enter your name</p>
                                    <p className="text-white text-sm ">Avi Chukwu</p>
                                </td>
                                <td className="p-1 border-b-2  border-[#133D44] w-1/2">
                                    <p className="text-xs mb-1 text-[#fff] opacity-[0.33]">Enter your email *</p>
                                    <p className="text-white text-[13px]">User@email.com</p>
                                </td>
                            </tr>

                            {/* Ticket Type and Quantity Row */}
                            <tr>
                                <td className="p-1 w-1/2 border-r-2 border-b-2 border-[#133D44]">
                                    <p className="text-xs text-[#fff] opacity-[0.33] mb-1">Ticket Type</p>
                                    <p className="text-white text-xs">VIP</p>
                                </td>
                                <td className="p-1 border-b-2  border-[#133D44] w-1/2">
                                    <p className="text-sm text-[#fff] opacity-[0.33] mb-1">Ticket for :</p>
                                    <p className="text-white text-xs">1</p>
                                </td>
                            </tr>

                            {/* Special Request Row */}
                            <tr>
                                <td colSpan={2} className="p-2">
                                    <p className="text-xs text-[#fff] opacity-[0.33] mb-1">Special request?</p>
                                    <p className="text-white text-xs">
                                        Nil ? Or the users sad story they write in there gets this whole space, Max of three rows
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse md:flex-row gap-3  pt-4">
                <Button
                    variant="outline"
                    className="w-full bg-transparent text-white border-gray-600 hover:bg-[#003333]/50 hover:text-white"
                    onClick={onBookAnother}
                >
                    Book Another Ticket
                </Button>
                <Button className="w-full bg-[#24A0B5] hover:bg-[#24A0B5]/30 text-white" onClick={handleDownload}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Ticket
                </Button>
            </div>
        </div>
    )
}

