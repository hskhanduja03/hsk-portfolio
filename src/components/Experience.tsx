import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";


const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Experience(){
    return(
        <div className="flex flex-col items-center p-5 mt-10 w-full">
            <h1 className={`${font.className} font-semibold text-3xl`}>Experience</h1>
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    <Image src={"/slayd-logo.svg"} width={70} height={70} alt="Slayd Logo" className=" dark:invert"/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div><h1 className="font-bold">Slayd</h1></div>
                        <div><h1 className="text-sm text-primary/70">May 2025 - June 2025 </h1></div>
                    </div>
                    <span className="text-sm font-normal text-primary/70">Fullstack Developer Intern - Remote</span>
                </div>
            </div>
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    <Image src={"/dataplay-logo.svg"} width={70} height={70} alt="Dataplay Logo" className=" dark:invert"/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div><h1 className="font-bold">Dataplay</h1></div>
                        <div><h1 className="text-sm text-primary/70">September 2024 - November 2024 </h1></div>
                    </div>
                    <span className="text-sm font-normal text-primary/70">Fullstack Developer Intern - Remote</span>
                </div>
            </div>
        </div>
    )
}