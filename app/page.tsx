import { SweatersSlide } from './home/sections/sweaters-slide';

export default function Home() {
  return (
    <div className="pt-10">
      <header className="flex flex-col items-center">
        <h1 className="text-4xl font-bold tracking-tighter text-slate-800">graizx</h1>
      </header>
      <main className="mt-10">
        <section className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight">Sweater</h2>
          <SweatersSlide />
        </section>
      </main>
    </div>
  );
}
