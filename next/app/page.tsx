import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/page1">page1</Link>
    </div>
  );
}
