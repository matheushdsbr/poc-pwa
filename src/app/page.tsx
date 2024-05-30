import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 text-center justify-center items-center">
      <div>
        <Image
          src="/siao.jpg"
          width={200}
          height={200}
          alt="SIÃO Casa de Oração"
          priority
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-6xl font-bold">
          SIÃO
        </h1>
        <p className="text-2xl font-bold">
          Casa de Oração 🙏✝️
        </p>
      </div>
    </div>
  );
}
