import Image from "next/image";
import avatar from "../../assets/avatar.jpeg";
import Social from "../Social/Social";

export default function Hero() {
  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <div>
        <Image
          src={avatar}
          width={256}
          height={283}
          alt="Developer Portrait"
          className="h-60 w-60 rounded-full border-4 border-purple"
        />
      </div>
      <h1 className="mt-4 text-center text-4xl font-bold">
        Hey! I&rsquo;m <br />
        <span className=" text-purple">Douglas</span>
      </h1>
      <p className="text-xl mb-4">Backend Developer</p>
      <Social />
    </div>
  );
}
