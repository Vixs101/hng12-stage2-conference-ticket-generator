import React from 'react'
import Link from 'next/link'

export default function About() {
    return (
        <div className='p-3 text-justify md:p-6 w-full mt-10 roboto rounded-3xl max-w-2xl mx-auto text-white border border-[#0E464F] flex flex-col gap-8 items-center'>
            <p>
                Event Ticket Booking UI – Open Source Practice Project 🎟️
                <br /><br />
                Overview
                <br /><br />

                This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.
                <br /><br />
                The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.
                <br /><br />
                Flow & Features
                <br /><br />
                1️⃣ Ticket Selection
                <br />
                •	Users can browse available tickets (Free & Paid).
                <br />
                •	Ticket options are displayed in a list or card view.
                <br />
                •	For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee details.
                <br />
                •	For Paid Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.
                <br /><br />

                2️⃣ Attendee Details Form
                <br />
                •	Users input their Name, Email, and optional Phone Number.
                <br />
                •	Profile picture upload option with preview functionality.
                <br />
                •	Ticket summary is visible to ensure users review their details before submission.
                <br /><br />
                3️⃣ Payment or Success Page
                <br />
                •	If the ticket is free, the user is taken directly to the Ticket Confirmation Page.
                <br />
                •	If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.
                <br />
                •	Upon successful booking, users should receive:
                <br />
                •	A visual ticket preview with a unique QR Code.
                <br />
                •	An option to download the ticket as PDF or save it to their device.
                <br />
                •	An email confirmation containing ticket details.
                <br /><br />
                How to Build This 🚀
                <br />
                This UI can be implemented using:
                <br />
                📌 Frontend (Next.js or React)
                <br />
                •	Component Breakdown:
                <br />
                •	TicketCard.tsx → Displays ticket details
                <br />
                •	AttendeeForm.tsx → Captures user details
                <br />
                •	PaymentModal.tsx → Handles payment processing
                <br />
                •	SuccessScreen.tsx → Shows the final ticket
                <br /> preview
                •	State Management: React’s Context API, Zustand, or Redux (if needed).
                <br />
                •	File Handling: Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL().
                <br />
                <br />
                📌 Backend (Optional)
                <br />
                •	If persistence is required, a backend can be built using:
                <br />
                •	Node.js & Express or Firebase Functions
                •	Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records
                <br />
                <br />
                📌 Payment Integration
                <br />
                <br />
                •	For paid events, developers should integrate:
                <br />
                •	Stripe Checkout (for international transactions)
                <br />
                •	Paystack or Flutterwave (for African users)
                <br /><br />
                What You’ll Learn 🧑‍💻
                <br />
                •	File handling & validation (profile picture uploads).
                <br />
                •	Dynamic UI updates based on ticket selection.
                <br />
                •	Persisting bookings using local state or a backend.
                <br />
                •	Integrating payment gateways for ticket purchases.
                <br />
                •	Generating & validating QR Codes for event check-in (Advanced).
                <br />
                Need Help? Reach Out! 💬
            </p>
            <h1 className='text-4xl md:text-6xl text-center'>
                💛 Enjoy
            </h1>
            <div className="flex flex-col-reverse md:flex-row gap-3 p-3 border border-[#0E464F] rounded-3xl w-9/12">
                <Link
                    href='https://www.figma.com/design/vtYFLXGf25L9C2yUTNKM8w/Event-Ticket-Booking-UI-%E2%80%93-Open-Source-Practice-Project-%F0%9F%8E%9F%EF%B8%8F-(Community)?node-id=19-1269&m=dev'
                    className="flex items-center justify-center w-full font-[JejuMyeongjo] bg-transparent text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white border border-[#24A0B5] rounded-[var(--Radius-reg, 8px)] bg-[#041E23] text-[#24A0B5] hover:bg-secondary hover:text-secondary-foreground rounded-md text-center px-4 py-3"

                >
                    Design File
                </Link>
                <Link
                    href='https://github.com/Vixs101/hng12-stage2-conference-ticket-generator' className="w-full bg-[#24A0B5] hover:bg-[#24A0B5]/30 font-[JejuMyeongjo] text-white rounded-md flex items-center justify-content px-5 py-3"
                >
                    Github
                </Link>
            </div>
        </div>
    )
}
