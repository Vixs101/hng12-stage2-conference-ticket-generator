"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { Upload } from "lucide-react"

interface AttendeeDetailsProps {
  onBack: () => void
  onNext: () => void
}

export function AttendeeDetails({ onBack, onNext }: AttendeeDetailsProps) {
  const [image, setImage] = useState<string | null>(null)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      <div
        className="relative h-48 bg-[#003333]/50 rounded-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
      >
        {image ? (
          <Image src={image || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <>
            <Upload className="w-8 h-8 text-teal-400 mb-2" />
            <p className="text-sm text-gray-400">Drag & drop or click to upload</p>
          </>
        )}
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              const reader = new FileReader()
              reader.onload = (e) => {
                setImage(e.target?.result as string)
              }
              reader.readAsDataURL(file)
            }
          }}
        />
      </div>

      <div className="space-y-4">
        <Input
          placeholder="Enter your name"
          className="bg-transparent border-0 border-b border-gray-700 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-teal-400"
        />
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent border-0 border-b border-gray-700 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-teal-400"
        />
        <Textarea
          placeholder="Special request?"
          className="bg-[#003333]/50 border-0 min-h-[100px] focus-visible:ring-1 focus-visible:ring-teal-400"
        />
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="w-full bg-transparent text-white border-gray-600 hover:bg-[#003333]/50 hover:text-white"
          onClick={onBack}
        >
          Back
        </Button>
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white" onClick={onNext}>
          Get My Free Ticket
        </Button>
      </div>
    </div>
  )
}

