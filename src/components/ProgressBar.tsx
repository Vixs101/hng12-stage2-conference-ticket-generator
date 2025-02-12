"use client"

interface ProgressBarProps {
  step: number
  totalSteps: number
  title: string
}

export function ProgressBar({ step, totalSteps, title }: ProgressBarProps) {
  const progress = (step / totalSteps) * 100

  return (
    <div className="w-full mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-3 md:gap-0">
        <h1 className="text-2xl md:text-3xl font-thin text-white font-[JejuMyeongjo]">{title}</h1>
        <span className="text-base md:text-sm text-white">
          Step {step}/{totalSteps}
        </span>
      </div>
      <div className="relative h-1 bg-[#0E464F] rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#24A0B5] rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 10px rgba(45, 212, 191, 0.5), 0 0 20px rgba(45, 212, 191, 0.3)",
          }}
        />
      </div>
    </div>
  )
}

