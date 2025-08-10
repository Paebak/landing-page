// src/App.jsx
import React from "react";

function App() {
  const services = [
    {
      title: "Jellyfin",
      description: "Stream your personal media library",
      link: "/jellyfin", // change to your Cloudflare Tunnel route
      icon: "🎬",
    },
    {
      title: "Blog",
      description: "Read my latest posts and updates",
      link: "/blog",
      icon: "📝",
    },
    {
      title: "Homelab",
      description: "Manage and monitor self-hosted services",
      link: "/homelab",
      icon: "🖥️",
    },
    {
      title: "More Coming Soon",
      description: "Future tools, dashboards, and integrations",
      link: "#",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Matthew’s Homelab</h1>
        <button
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
          className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          Toggle Theme
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portal</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Media, blog, and homelab access — all in one place.
        </p>
      </section>

      {/* Service Grid */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-blue-500 group-hover:underline">
                Open →
              </span>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Matthew’s Homelab — Powered by React & Tailwind
      </footer>
    </div>
  );
}

export default App;

