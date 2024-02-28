import Image from "next/image";
import avatar from "../../assets/avatar.jpeg";
import Skills from "../Skills/Skills";
import Social from "../Social/Social";

export default function Hero() {
  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <Image
        src={avatar}
        width={256}
        height={283}
        alt="Developer Portrait"
        className="h-32 w-32 rounded-full border-2 border-purple"
      />
      <h1 className="mt-4 text-center text-2xl font-bold">
        Hey! I&rsquo;m <span className=" text-purple">Douglas</span>
      </h1>
      <p className="mb-4 text-base">Backend Developer</p>
      <Skills />
      <Social />
    </div>
  );
}
