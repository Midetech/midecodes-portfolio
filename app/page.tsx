import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-screen flex p-2">
        {" "}
        <Image
          src="/mide.png"
          alt="Midecodes Logo"
          width={50}
          height={50}
          priority
        />
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="relative flex flex-col items-center justify-center gap-5 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            src="/mide.svg"
            alt="Midecodes Logo"
            width={220}
            height={220}
            priority
          />
          <code>Frontend Engineer</code>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-5">
          <a
            className="w-[120px] h-[48px] rounded-[4px] bg-blue-900 text-white flex items-center justify-center gap-2"
            href="mailto:faginorish@gmail.com"
          >
            <code> Email me</code>
          </a>
          <a
            className="w-[130px] h-[48px] rounded-[4px] bg-green-500 text-white flex items-center justify-center gap-2"
            href="/Updated-Sunday-Olomitutu.pdf"
            download={true}
          >
            <code> Download CV</code>
          </a>
          <a
            className="w-[120px] h-[48px] rounded-[4px] bg-green-500 text-white flex items-center justify-center gap-2"
            href="tel:+2347062311779"
          >
            <code> Call me</code>
          </a>
        </div>
      </div>
    </main>
  );
}
