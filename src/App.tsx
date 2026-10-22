
import { useState } from "react";
import "./App.css";

export default function App() {
  const [started, setStarted] = useState(false);
  const [activeTab, setActiveTab] = useState("Beranda");
  const [settings, setSettings] = useState(false);

  const tabs = [
    { name: "Beranda", icon: "⌂" },
    { name: "Peta", icon: "♧" },
    { name: "Prestasi", icon: "🏆" },
    { name: "Materi", icon: "▤" },
    { name: "Profil", icon: "♙" },
  ];

  return (
    <main className="game-page">
      <div className="game-card">
        <img
          className={`game-art ${started ? "adventure" : ""}`}
          src="/game-home2.png"
          alt="Petualangan Bangun Datar"
        />

        <div className="sparkle sparkle-one">✦</div>
        <div className="sparkle sparkle-two">✧</div>

        <button
          className="hotspot start-hotspot"
          aria-label="Mulai petualangan"
          onClick={() => setStarted(true)}
        />

        <button
          className="hotspot settings-hotspot"
          aria-label="Pengaturan"
          onClick={() => setSettings(!settings)}
        />

        <button
          className="hotspot mission-hotspot"
          aria-label="Misi harian"
          onClick={() => setActiveTab("Prestasi")}
        />

        {settings && (
          <div className="popup">
            <h3>⚙ Pengaturan</h3>
            <p>Petualangan Bangun Datar</p>
            <button onClick={() => setSettings(false)}>
              Tutup
            </button>
          </div>
        )}

        {started && (
          <div className="popup adventure-popup">
            <div className="popup-emoji">🎮</div>
            <h2>Petualangan Dimulai!</h2>
            <p>
              Yuk, kenali bentuk-bentuk bangun datar
              dan kumpulkan bintang!
            </p>
            <button
              onClick={() => {
                setStarted(false);
                setActiveTab("Peta");
              }}
            >
              Jelajahi Peta →
            </button>
            <button
              className="close-button"
              onClick={() => setStarted(false)}
            >
              Kembali
            </button>
          </div>
        )}

        <div className="bottom-hotspots">
          {tabs.map((tab,) => (
            <button
              key={tab.name}
              className={`tab-hotspot ${
                activeTab === tab.name ? "selected" : ""
              }`}
              aria-label={tab.name}
              onClick={() => {
                setActiveTab(tab.name);
                setStarted(false);
              }}
            >
              <span>{tab.icon}</span>
              <small>{tab.name}</small>
            </button>
          ))}
        </div>

        {activeTab !== "Beranda" && !started && (
          <div className="tab-popup">
            <button
              className="tab-close"
              onClick={() => setActiveTab("Beranda")}
            >
              ✕
            </button>
            <h2>{activeTab}</h2>
            <p>
              {activeTab === "Peta" &&
                "Jelajahi dunia dan temukan level baru!"}
              {activeTab === "Prestasi" &&
                "Selesaikan misi dan kumpulkan bintang!"}
              {activeTab === "Materi" &&
                "Belajar segitiga, persegi, lingkaran, dan lainnya."}
              {activeTab === "Profil" &&
                "Lihat profil dan perkembangan belajarmu."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
