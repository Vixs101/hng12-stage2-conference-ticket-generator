import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

interface AttendeeDetailsProps {
    onBack: () => void;
    onNext: () => void;
}

export function AttendeeDetails({ onBack, onNext }: AttendeeDetailsProps) {
    const [image, setImage] = useState<string | null>(null);
    const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();

        let file: File | null = null;

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            file = e.dataTransfer.files[0];
        } else if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            const item = e.dataTransfer.items[0];
            if (item.kind === "file") {
                file = item.getAsFile();
            }
        }

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setImage(result);
                const img = new window.Image();
                img.onload = () => {
                    setImageDimensions({ width: img.width, height: img.height });
                };
                img.src = result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setImage(result);
                const img = new window.Image();
                img.onload = () => {
                    setImageDimensions({ width: img.width, height: img.height });
                };
                img.src = result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-6 bg-[#08252B] border border-[#0E464F] rounded-3xl p-3 md:p-6">
            <form
                className="relative bg-[#052228] border border-[#07373F] rounded-3xl flex flex-col items-center md:items-start gap-8 cursor-pointer overflow-hidden text-white p-6"
            >
                <h2 className="roboto text-base">Upload Profile Photo</h2>
                <div className="hidden md:block h-48 w-full mb-6 aspect-square random">
                </div>
                <div
                    className={`md:absolute sm:inset-x-32 md:inset-x-36 lg:inset-x-40 inset-y-14 m  rounded-3xl flex flex-col gap-4 w-60 h-60 justify-center items-center z-50 ${!image ? "bg-[#0E464F] uploadBg p-6 " : ""}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("file-upload")?.click()}
                >
                    {image && imageDimensions ? (
                        <div className="h-full w-full group">
                            <Image
                                src={image}
                                alt="Profile"
                                width={imageDimensions.width}
                                height={imageDimensions.height}
                                className="w-full h-full rounded-xl object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 rounded-xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z" fill="#FAFAFA" />
                                    <path d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z" fill="#FAFAFA" />
                                </svg>
                                <p className="text-base text-[#FAFAFA] text-center roboto">
                                    Drag & drop or click to upload
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z" fill="#FAFAFA" />
                                <path d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z" fill="#FAFAFA" />
                            </svg>
                            <p className="text-base text-[#FAFAFA] text-center roboto">Drag & drop or click to upload</p>
                        </>
                    )}
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </div>

            </form>

            <div className='mb-8 bg-[#07373F] h-1 rounded-full' />

            <div className="space-y-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="pointer-events-none text-white roboto text-base">
                        Enter your name
                    </label>
                    <Input
                        type="text"
                        id="name"
                        placeholder=""
                        className="bg-transparent  border border-[#07373F] rounded-xl px-2 h-12 focus:ring-0 focus-visible:border-[#07373F]"
                        aria-describedby="name-error"
                        required
                    />
                    <p id="name-error" className="mt-1 text-red-500 hidden">Name is required.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="pointer-events-none text-white roboto text-base">
                        Enter your email *
                    </label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="📧 hello@avioflagos.io"
                        className="bg-transparent  border border-[#07373F] rounded-xl px-2 h-12 focus:ring-0 focus-visible:border-[#07373F] text-white placeholder-primary"
                        aria-describedby="email-error"
                        required
                    />
                    <p id="email-error" className="mt-1 text-red-500 hidden">Invalid email format.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="special-request" className="pointer-events-none text-white roboto text-base">
                        Special request?
                    </label>
                    <Textarea
                        id="special-request"
                        placeholder="Special request?"
                        className="bg-transparent  border border-[#07373F] rounded-xl px-2 h-32 focus:ring-0 focus-visible:border-[#07373F] resize-none text-white"

                    />
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-3 ">
                <Button
                    variant="outline"
                    className="w-full font-[JejuMyeongjo] bg-transparent text-[#24A0B5] border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white"
                    onClick={onBack}
                >
                    Back
                </Button>
                <Button className="w-full bg-[#24A0B5] hover:bg-[#24A0B5]/30 font-[JejuMyeongjo] text-white" onClick={onNext}>
                    Get My Free Ticket
                </Button>
            </div>
        </div>
    );
}
