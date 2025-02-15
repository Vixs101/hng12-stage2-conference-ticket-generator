"use client"

import { useState, useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem
} from '@/components/ui/select'
import { ProgressBar } from '@/components/ProgressBar'
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from "framer-motion"
import { AttendeeDetails } from '@/components/AttendeeDetails';
import { TicketConfirmation } from '@/components/TicketPage';

interface UserData {
  ticketType: "",
  numberOfTickets: 1,
  name: "",
  email: "",
  image: "",
  specialRequest: "",
}


export default function TicketSelection() {
  const [selected, setSelected] = useState<string | null>(null)
  const [numberOfTickets, setNumberOfTickets] = useState<string | null>(null)
  const [errors, setErrors] = useState({ ticketType: "", numberOfTickets: "" });
 

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3
  const [direction, setDirection] = useState(0)

  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserData>({
    ticketType: "",
    numberOfTickets: 1,
    name: "",
    email: "",
    image: "",
    specialRequest: "",
  })

  useEffect(() => {
    // Load attendee data from localStorage
    const storedAttendeeData = localStorage.getItem('attendeeData');
    if (storedAttendeeData) {
      const { name, email, image } = JSON.parse(storedAttendeeData);
      setUserData(prev => ({
        ...prev,
        name,
        email,
        image,
      }));
    }
  }, []);

  // // saving the user data on every change
  useEffect(() => {
    if (selected && numberOfTickets) {
      localStorage.setItem(
        "ticketSelection",
        JSON.stringify({ ticketType: selected, numberOfTickets })
      );
    }
  }, [selected, numberOfTickets]);


  // checking local storage for saved tickets 
  useEffect(() => {
    const storedSelection = localStorage.getItem("ticketSelection");
    if (storedSelection) {
      const { ticketType, numberOfTickets } = JSON.parse(storedSelection);
      setSelected(ticketType);
      setSelectedTicket(ticketType);
      setNumberOfTickets(numberOfTickets);
      console.log(ticketType, numberOfTickets);
    }
  }, []);

  // handle navigation to the next page
  const handleNext = () => {
    let valid = true;
    const newErrors = { ticketType: "", numberOfTickets: "" };
    if (!selected) {
      newErrors.ticketType = "Please select a ticket type"
      valid = false;
    }
    if (!numberOfTickets) {
      newErrors.numberOfTickets = "Please select the number of tickets.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      if (currentStep < totalSteps) {
        setDirection(1)
        setCurrentStep((prev: number) => prev + 1)
      }
    }
  }

  const handleBack = () => {
    setDirection(-1)
    if (currentStep > 1) {
      setCurrentStep((prev: number) => prev - 1)
    }
  }

  const handleBookAnother = () => {
    localStorage.clear();
    setDirection(-1)
    setCurrentStep(1)
    setSelectedTicket(null)
    setUserData({
      ticketType: "",
      numberOfTickets: 1,
      name: "",
      email: "",
      image: "",
      specialRequest: "",
    });

  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="flex items-center justify-center mt-5 md:mt-10">
      <div className="w-full max-w-2xl bg-[#041E23] border  border-[#0E464F] backdrop-blur-xl rounded-3xl p-2 md:p-8">
        <ProgressBar
          step={currentStep}
          totalSteps={totalSteps}
          title={
            currentStep === 1 ?
              "Ticket Selection" :
              currentStep === 2 ?
                "Attendee Details" :
                "Ready"
          }
        />

        <div className='relative overflow-hidden'>
          <AnimatePresence initial={false} custom={direction}>
            {currentStep === 1 ? (<motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className='bg-[rgb(8,37,43)] border border-[#0E464F] rounded-2xl md:p-6'>
              <div className="bg-[#003333]/50 rounded-xl p-6 mx-2 mt-5 md:mx-0 md:mt-0 mb-8 border-b-4 border-x-2 border-[#07373F] text-center" style={{ background: "radial-gradient(57.42% 106.59% at 14.02% 32.06%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), rgba(10, 12, 17, 0.10)", backdropFilter: "blur(7px)" }}>
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

              <div className='mx-2 md:mx-0 mb-8 bg-[#07373F] h-1 rounded-full' />

              <div className="mb-6 mx-2 md:mx-0 ">
                <label className="text-base text-white mb-3 block roboto">Select Ticket Type:</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-[#052228] border border-[#07373F] rounded-3xl p-4">
                  <button
                    type='button'
                    className={`border-[#197686] hover:bg-[#197686] text-start items-start flex flex-col p-4 rounded-xl cursor-pointer border  ${selected === "regular" ? "bg-[#197686] text-white" : ""}`}
                    aria-pressed={selected === "regular"}
                    onClick={() => {
                      setSelected("regular")
                      setSelectedTicket("regular")
                    }}>
                    <h3 className="text-white text-2xl font-bold roboto">Free</h3>
                    <h4 className="text-base text-white roboto">REGULAR ACCESS</h4>
                    <p className="text-sm text-white roboto">20/52</p>
                  </button>
                  <button
                    type='button'
                    className={`border-[#197686] hover:bg-[#197686] p-4 text-start items-start flex flex-col rounded-xl cursor-pointer border ${selected === "vip" ? "bg-[#197686] text-white" : ""}`}
                    aria-pressed={selected === "vip"}
                    onClick={() => {
                      if (selected != "vip") {
                        setSelectedTicket("vip")
                      }
                      setSelected("vip")
                      console.log(selectedTicket)
                    }}>
                    <h3 className="text-white text-2xl font-bold roboto">$150</h3>
                    <h4 className="text-base text-white roboto">VIP ACCESS</h4>
                    <p className="text-sm text-white roboto">20/32</p>
                  </button>
                  <button
                    type='button'
                    className={`border-[#197686] hover:bg-[#197686] p-4 text-start items-start flex flex-col rounded-xl cursor-pointer border  ${selected === "vvip" ? "bg-[#197686] text-white" : ""}`}
                    aria-pressed={selected === "vvip"}
                    onClick={() => {
                      setSelected("vvip")
                      setSelectedTicket("vvip")
                      console.log(selectedTicket)
                    }}>
                    <h3 className="text-white text-2xl font-bold roboto">$150</h3>
                    <h4 className={`text-base text-white roboto`}>VVIP ACCESS</h4>
                    <p className={`text-sm text-white roboto`}>30/32</p>
                  </button>
                </div>
                {errors.ticketType && (
                  <p className="text-red-500 mt-1 ml-2 font-semibold" role="alert">
                    {errors.ticketType}
                  </p>
                )}
              </div>

              <div className="mb-8 mx-2 md:mx-0 ">
                <label className="text-white text-base mb-3 block roboto">Number of Tickets</label>
                <Select value={numberOfTickets || 'Select number of Tickets'} onValueChange={(value) => {
                  setNumberOfTickets(value)
                  console.log(numberOfTickets, value)
                }}>
                  <SelectTrigger className="w-full bg-[#041E23] border border-[#07373F] text-white">
                    <SelectValue placeholder="Select number of tickets" />
                  </SelectTrigger>
                  <SelectContent className='bg-[#041E23] border border-[#07373F] text-white'>
                    <SelectItem value="1" >1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
                {errors.numberOfTickets && (
                  <p className="text-red-500 mt-1 ml-2 font-semibold" role="alert">{errors.numberOfTickets}</p>
                )}
              </div>

              <div className="flex flex-col-reverse md:flex-row gap-3 mx-2 md:mx-0 ">
                <Button
                  variant="outline"
                  className="w-full font-[JejuMyeongjo] bg-transparent text-[#24A0B5] border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </Button>
                <Button
                  className="w-full bg-[#24A0B5] hover:bg-[#24A0B5]/30 font-[JejuMyeongjo] text-white"
                  disabled={!selected}
                  onClick={handleNext}>
                  Next
                </Button>
              </div>
            </motion.div>) : currentStep == 2 ? (
              <AttendeeDetails onBack={handleBack} onNext={handleNext} />
            ) : (
              <motion.div
                key="step3"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <TicketConfirmation onBookAnother={handleBookAnother} userData={userData} />
              </motion.div>
            )
            }
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
