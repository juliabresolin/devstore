import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end "
      >
        <Image
          src="/assets/moletom-never-stop-learning.png"
          alt=""
          width={920}
          height={920}
          quality={100}
          className="-mb-32 group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[300px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="flex h-full text-nowrap items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end "
      >
        <Image
          src="/assets/moletom-ai-side.png"
          alt=""
          width={600}
          height={600}
          quality={100}
          className="-mb-32 group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[300px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="flex h-full text-nowrap items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end "
      >
        <Image
          src="/assets/moletom-java.png"
          alt=""
          width={600}
          height={600}
          quality={100}
          className="-mb-32 group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[300px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="flex h-full text-nowrap items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
    </div>
  )
}
