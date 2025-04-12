import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
    <div className="text-center mb-6">
  <img
    src="/logo.png"
    alt="Vents & Capital Logo"
    style={{ width: "120px", margin: "0 auto" }}
  />
</div>
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Life Support by Day, Capital Gains by Night</h1>
        <p className="text-lg italic text-gray-600">Stabilize, then strategize.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 py-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I'm a pulmonary and critical care physician who thrives in high-stakes environments—whether that’s managing ICU patients or analyzing the next great investment opportunity. I believe in long-term thinking, clear communication, and staying curious.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">What I Do</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Critical care and pulmonary medicine</li>
            <li>Investment research and stock analysis</li>
            <li>YouTube content focused on medicine, finance, and personal development</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mt-10">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <p>Read my thoughts on medicine, markets, and mindset — all from the front lines of critical care and financial curiosity.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mt-10">
        <h2 className="text-2xl font-semibold mb-4">YouTube Channel</h2>
        <p>Watch breakdowns of case studies, market insights, and high-yield lessons in both medicine and money. <br/>[Embed or link to recent videos]</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mt-10">
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
        <p>Explore past talks, published content, collaborations, and projects across healthcare and finance.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mt-10">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p>Interested in working together, learning more, or collaborating on a project? Reach out to me via [email placeholder] or follow me on social media.</p>
      </section>
    </main>
  );
}
