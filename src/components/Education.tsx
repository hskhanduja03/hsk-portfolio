import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";


const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Education(){
    return(
        <div className="flex flex-col items-center p-5 mt-5 w-full">
            <h1 className={`${font.className} font-semibold text-3xl`}>Education</h1>
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    <Image src={"/iiitkota.webp"} width={50} height={50} alt="IIITK LOGO" className="rounded-full"/>
                </div>
                <div className="w-full ml-5">
                    <div className="flex justify-between items-center">
                        <div className="items-center gap-2"><h1 className="font-bold">IIIT KOTA</h1></div>
                        <h1 className="text-sm text-primary/70">Graduating in May 2027</h1>
                    </div>
                    <span className="text-sm font-normal text-primary/70">B.Tech CSE</span>
                </div>
            </div>
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    <Image src={"/images.jpeg"} width={50} height={50} alt="SPL LOGO" className="rounded-full scale-125"/>
                </div>
                <div className="w-full ml-5">
                    <div className="flex justify-between items-center">
                        <div className="items-center gap-2"><h1 className="font-bold">St. Paul Sr. Sec. School, Ajmer</h1></div>
                        <h1 className="text-sm text-primary/70">Graduated in March 2021</h1>
                    </div>
                    <p className="text-sm text-primary/70">1st to 12th Standard</p>
                </div>
            </div>
        </div>
    )
}