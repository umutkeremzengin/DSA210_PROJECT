import React from 'react';
import { Instagram } from 'lucide-react';
import styles from '../styles/IntroductionPage.module.css';
import Instagram1 from "../assets/Social_Media_img/Instagram_1.png";
import Instagram2 from "../assets/Social_Media_img/Instagram_2.png";
import Instagram25 from "../assets/Social_Media_img/Instagram_2.5.png";
import Instagram3 from "../assets/Social_Media_img/Instagram_3.png";
import Instagram4 from "../assets/Social_Media_img/Instagram_4.png";
import Instagram5 from "../assets/Social_Media_img/Instagram_5.png";
import Tiktok1 from "../assets/Social_Media_img/Tiktok_1.png";
import Tiktok2 from "../assets/Social_Media_img/Tiktok_2.png";
import Tiktok3 from "../assets/Social_Media_img/Tiktok_3.png";
import Tiktok4 from "../assets/Social_Media_img/Tiktok_4.png";
import Tiktok5 from "../assets/Social_Media_img/Tiktok_5.png";
import Tiktok6 from "../assets/Social_Media_img/Tiktok_6.png";

const SocialMediaPage = () => {
  const instagramImages = [
    { src: Instagram1, title: "Instagram Analysis 1" },
    { src: Instagram2, title: "Instagram Analysis 2" },
    { src: Instagram25, title: "Instagram Analysis 2.5" },
    { src: Instagram3, title: "Instagram Analysis 3" },
    { src: Instagram4, title: "Instagram Analysis 4" },
    { src: Instagram5, title: "Instagram Analysis 5" }
  ];

  const tiktokImages = [
    { src: Tiktok1, title: "TikTok Analysis 1" },
    { src: Tiktok2, title: "TikTok Analysis 2" },
    { src: Tiktok3, title: "TikTok Analysis 3" },
    { src: Tiktok4, title: "TikTok Analysis 4" },
    { src: Tiktok5, title: "TikTok Analysis 5" },
    { src: Tiktok6, title: "TikTok Analysis 6" }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Social Media Analysis
          </h1>
          <p className={styles.subtitle}>
            Deep Dive into Instagram and TikTok Engagement Patterns
          </p>
        </header>

        {/* Instagram Analysis Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Instagram className="text-indigo-500 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-indigo-600">
              Instagram Engagement Analysis
            </h2>
          </div>

          <div className="space-y-12">
            {instagramImages.map((image, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  {image.title}
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-lg text-gray-600">
                    [Analysis text placeholder for Instagram graph {index + 1}]
                  </p>
                </div>
                <img
                  src={image.src}
                  alt={image.title}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* TikTok Analysis Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-500 mr-3"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <h2 className="text-3xl font-bold text-indigo-600">
              TikTok Engagement Patterns
            </h2>
          </div>

          <div className="space-y-12">
            {tiktokImages.map((image, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  {image.title}
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-lg text-gray-600">
                    [Analysis text placeholder for TikTok graph {index + 1}]
                  </p>
                </div>
                <img
                  src={image.src}
                  alt={image.title}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-600 pt-8 border-t border-gray-200">
          <p>© 2024 Digital Wellness Research | Umut Kerem Zengin</p>
        </footer>
      </div>
    </div>
  );
};

export default SocialMediaPage;