import { useState } from "react"

function App() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")

  const generateIdea = () => {
    if (!prompt.trim()) {
      setResult("Silakan tulis referensi nail art yang kamu inginkan terlebih dahulu.")
      return
    }

    setResult(
      `Rekomendasi desain untuk: "${prompt}"

Konsep: Soft elegant nail art dengan sentuhan feminin dan clean look.
Palet warna: soft pink, nude, pearl white, dan sedikit gold accent.
Detail desain: kombinasi glossy base, minimal line art, chrome tip, dan aksen kecil seperti ribbon atau pearl.
Cocok untuk: acara spesial, date, graduation, photoshoot, atau daily elegant look.`
    )
  }

  return (
    <main className="min-h-screen bg-[#fff7f8] text-[#2b2b2b]">
      <nav className="fixed top-0 z-50 w-full border-b border-pink-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="PuellaStudio Logo"
    className="h-10 w-10 object-contain"
  />

  <h1 className="text-2xl font-bold tracking-wide text-pink-500">
    PuellaStudio
  </h1>
</div>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-pink-500">
              Services
            </a>

            <a href="#gallery" className="hover:text-pink-500">
              Gallery
            </a>

            <a href="#about" className="hover:text-pink-500">
              About
            </a>

            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-200 blur-3xl opacity-40"></div>
        <p className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-500">
          Elegant Nail Art Studio
        </p>

        <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Beautiful Nails for Every Occasion
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          PuellaStudio menghadirkan nail art aesthetic dengan desain elegan,
          modern, dan premium untuk membuat penampilanmu semakin percaya diri.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#gallery"
            className="rounded-full bg-pink-500 px-8 py-4 font-medium text-white transition hover:bg-pink-600"
          >
            Explore Gallery
          </a>

          <a
            href="#contact"
            className="rounded-full border border-pink-300 px-8 py-4 font-medium transition hover:bg-pink-100"
          >
            Book Now
          </a>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="text-center">
          <p className="font-medium text-pink-500">Our Services</p>

          <h2 className="mt-3 text-4xl font-bold">
            Premium Nail Art Services
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            "Manicure",
            "Custom Nail Art",
                 ].map((service) => (
            <div
              key={service}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 h-14 w-14 rounded-2xl bg-pink-100"></div>

              <h3 className="text-2xl font-semibold">{service}</h3>

              <p className="mt-4 text-gray-600">
                Perawatan kuku dan desain nail art custom dengan hasil rapi, clean, dan aesthetic.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="bg-pink-50 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-medium text-pink-500">Gallery</p>

            <h2 className="mt-3 text-4xl font-bold">
              Nail Art Inspirations
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {["nail1.jpeg", "nail2.jpeg", "nail3.jpeg",].map((image) => (
  <div
    key={image}
    className="group overflow-hidden rounded-3xl shadow-sm"
  >
    <img
      src={`/gallery/${image}`}
      alt="Nail Art"
      className="aspect-square h-full w-full object-cover transition duration-300 group-hover:scale-110"
    />
  </div>
))}
          </div>
        </div>
      </section>

      <section
  id="about"
  className="mx-auto max-w-7xl px-6 py-24"
>
  <div className="grid items-center gap-12 md:grid-cols-2">
    
    <div className="rounded-3xl bg-pink-100 p-10">
      <div className="flex aspect-square items-center justify-center rounded-3xl bg-white">
        <img
          src="/logo.png"
          alt="PuellaStudio Logo"
          className="h-40 w-40 object-contain"
        />
      </div>
    </div>

    <div>
      <p className="font-medium text-pink-500">About Us</p>

      <h2 className="mt-3 text-4xl font-bold">
        More Than Just Nail Art
      </h2>

      <p className="mt-6 text-gray-600">
        PuellaStudio adalah studio nail art yang mengutamakan kualitas,
        kenyamanan, dan desain aesthetic modern. Kami percaya setiap detail
        kecil dapat meningkatkan rasa percaya diri.
      </p>

      <p className="mt-4 text-gray-600">
        Dengan sentuhan feminin dan elegan, kami menghadirkan pengalaman
        nail art premium untuk setiap pelanggan.
      </p>
    </div>

  </div>
</section>

<section className="bg-white px-6 py-24">
  <div className="mx-auto max-w-4xl text-center">
    <p className="font-medium text-pink-500">AI Nail Art Assistant</p>

    <h2 className="mt-3 text-4xl font-bold">
      Generate Your Nail Art Idea
    </h2>

    <p className="mt-4 text-gray-600">
      Tulis tema, warna, acara, atau referensi nail art yang kamu inginkan.
    </p>

    <div className="mt-10 rounded-3xl bg-pink-50 p-6 shadow-sm">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Contoh: nail art soft pink simple untuk wisuda"
        className="h-32 w-full resize-none rounded-2xl border border-pink-100 bg-white p-4 outline-none focus:border-pink-400"
      />

      <button
        onClick={generateIdea}
        className="mt-5 rounded-full bg-pink-500 px-8 py-4 font-medium text-white transition hover:bg-pink-600"
      >
        Generate Idea
      </button>

      {result && (
        <div className="mt-6 whitespace-pre-line rounded-2xl bg-white p-6 text-left text-gray-700">
          {result}
        </div>
      )}
    </div>
  </div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="text-center">
    <p className="font-medium text-pink-500">Testimonials</p>

    <h2 className="mt-3 text-4xl font-bold">
      What Our Clients Say
    </h2>
  </div>

  <div className="mt-16 grid gap-6 md:grid-cols-3">
    {[
      {
        name: "Alya",
        text: "Hasil nail art sangat rapi dan aesthetic. Pelayanannya juga nyaman banget!",
      },
      {
        name: "Celine",
        text: "Design nail art sesuai request dan hasilnya premium banget.",
      },
      {
        name: "Michelle",
        text: "Tempat favorit buat nail art Korean style. Super recommended!",
      },
    ].map((item) => (
      <div
        key={item.name}
        className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="mb-5 flex gap-1 text-pink-400">
          ★★★★★
        </div>

        <p className="text-gray-600">
          "{item.text}"
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          {item.name}
        </h3>
      </div>
    ))}
  </div>
</section>

      <section
        id="contact"
        className="bg-[#1e1b1b] px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-medium text-pink-400">Book Appointment</p>

          <h2 className="mt-3 text-5xl font-bold">
            Ready for Your Dream Nails?
          </h2>

          <p className="mt-6 text-gray-300">
            Hubungi PuellaStudio sekarang dan dapatkan nail art terbaik untuk
            tampil lebih percaya diri.
          </p>

          <a
            href="https://wa.me/6281248171076"
            target="_blank"
            className="mt-10 inline-block rounded-full bg-pink-500 px-8 py-4 font-medium text-white transition hover:bg-pink-600"
          >
            Book via WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-[#141212] px-6 py-8 text-center text-sm text-gray-400">
  <p>© 2026 PuellaStudio. All rights reserved.</p>

  <p className="mt-2 text-gray-500">
    Designed with elegance and aesthetic beauty.
  </p>
</footer>
    </main>
  )
}

export default App