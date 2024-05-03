import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import { Typography } from "@/components/design-system/typography/typography";
import { RiCss3Fill, RiGithubFill, RiHtml5Fill, RiJavascriptFill,RiDoorLockLine, RiLinkedinBoxFill, RiLinkedinLine, RiReactjsFill, RiWhatsappFill } from "react-icons/ri";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/Avatar-black.svg";
import Avatar_White from "@/public/Avatar-white.svg";
import BooBlack from "@/public/boo-black.svg";
import BooWhite from "@/public/boo-white.svg";
import Link from "next/link";


import profil from "@/public/profil.png";


export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Pranjal Shikhar %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Estime GLITI</title>
        <link rel="icon" href="/next.svg" />
      </Head>


      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="relative lg:h-screen 2xl:h-max max-w-[90rem] mx-auto space-y-30 flex flex-row ">
          <div className="flex flex-col justify-start mt-60 w-full  max-w-2xl  ">
          <Typography variant="h5" component="h2" className="mx-w-xl font-extrabold ">
                    Full-Stack React Developper👋
                </Typography>
          <Typography variant="caption2" component="h4" theme="gray" className="mx-w-xl mt-2" weigth="meduim">
                    Hi, I&apos;m  Gliti. A passionate 
                    Developper based in Africa, Bénin 🎈
                </Typography>

                <div className="space-x-3 pt-2.5 flex mt-2">
                <RiGithubFill size={25} href=""/>
                <RiLinkedinBoxFill size={25} href="www.linkedin.com/in/estimé-gliti-585260253"/>
                <RiWhatsappFill size={25} href=""/>
                
                </div>

          </div>
          <RiDoorLockLine size={250} color="green" className="mt-40     "/>
    
        </div>




        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
