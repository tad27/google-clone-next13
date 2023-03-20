import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center justify-center -translate-y-14 w-full px-4">
        {/* <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" /> */}
        <Image
          className=""
          src={
            "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
          alt="Google Logo"
          width={300}
          height={100}
        />
        <SearchForm />
        <div className="flex items-center justify-center gap-2">
          <button>Google Search</button>
        </div>
      </div>
    </main>
  );
}
