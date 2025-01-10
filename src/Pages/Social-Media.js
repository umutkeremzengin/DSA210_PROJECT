import React from 'react';
import { Instagram } from 'lucide-react';
import styles from '../styles/IntroductionPage.module.css';
import Instagram1 from "../assets/Social_Media_img/Instagram_1.png";
import Instagram2 from "../assets/Social_Media_img/Instagram_2.png";
import Instagram3 from "../assets/Social_Media_img/Instagram_3.png";
import Instagram4 from "../assets/Social_Media_img/Instagram_4.png";
import Instagram5 from "../assets/Social_Media_img/Instagram_5.png";
import Tiktok1 from "../assets/Social_Media_img/Tiktok_1.png";
import Tiktok2 from "../assets/Social_Media_img/Tiktok_2.png";
import Tiktok4 from "../assets/Social_Media_img/Tiktok_4.png";
import Tiktok5 from "../assets/Social_Media_img/Tiktok_5.png";
import Tiktok6 from "../assets/Social_Media_img/Tiktok_6.png";

const SocialMediaPage = () => {
  const instagramImages = [
    {
      src: Instagram1,
      title: "Weekly Average Instagram Likes",
      size: "w-3/4",
      description: "This graph captures weekly trends in average Instagram likes over the year. The red line shows the weekly average, while the shaded area represents variability, indicating the range of likes around the mean during each week.",
      observations: [
        "The graph highlights a prominent peak in weeks 20-25, with weekly average likes exceeding 30 during this period. This suggests a surge in engagement, likely due to a viral post, event, or campaign.",
        "After the peak, there's a steady decline in engagement, eventually stabilizing around 10-15 likes per week.",
        "The shaded area widens during the peak weeks, signifying greater variability. This could mean that while some posts received significant likes, others performed below average, possibly reflecting inconsistency in content quality or relevance."
      ]
    },
    {
      src: Instagram2,
      title: "Line Plot of Instagram Likes Over Time & Likes Distribution",
      size: "w-full",
      description: "The left panel visualizes daily Instagram likes over time, while the right panel provides a histogram of likes distribution to assess the overall engagement pattern.",
      observations: [
        "The left graph showcases a dramatic spike in early 2023, with a single day reaching over 100 likes. Smaller spikes are observed intermittently throughout the timeline, suggesting periodic bursts of engagement.",
        "There is a visible drop in engagement starting mid-2023, stabilizing at a lower average for the rest of the period.",
        "The histogram (right panel) indicates a heavily skewed distribution, with most posts receiving fewer than 20 likes. This suggests that high-engagement posts are rare, but they contribute disproportionately to overall performance."
      ]
    },
    {
      src: Instagram3,
      title: "Average Instagram Likes by Day of the Week",
      size: "w-3/4",
      description: "This bar chart examines the average likes received for Instagram posts on each day of the week, providing insights into daily engagement patterns.",
      observations: [
        "Sunday has the highest average likes (~14), suggesting increased engagement on this day. This could reflect that higher social media activity is preferred during leisure time.",
        "Monday and Thursday also show relatively high engagement, possibly due to the fresh start of the week or mid-week content visibility.",
        "There is a noticeable dip in engagement on Friday and Saturday, contrary to typical expectations of higher weekend activity."
      ]
    },
    {
      src: Instagram4,
      title: "Average Instagram Likes by Month",
      size: "w-2/3",
      description: "This graph explores monthly trends in average Instagram likes, showcasing seasonal variations in engagement.",
      observations: [
        "May stands out with the highest average likes (~25), indicating peak engagement during this period. This might conflict with springtime events, and more potential outdoor activity season.",
        "Engagement decreases steadily after June, reaching its lowest levels in December. This aligns with possible holiday distractions or reduced posting frequency during the end of the year."
        
      ]
    },
    {
      src: Instagram5,
      title: "Average Instagram Likes for Weekdays vs. Weekends",
      size: "w-2/3",
      description: "This graph compares average likes received on weekdays versus weekends, offering insights into broader engagement trends.",
      observations: [
        "Weekend engagement is slightly higher (~13 likes) compared to weekdays (~12.5 likes), indicating a small but consistent difference.",
        "The minimal gap between the two suggests that instagram usage performs relatively evenly across the week."
      ]
    }
  ];

  const tiktokImages = [
    {
      src: Tiktok1,
      title: "Weekly Average TikTok Likes",
      size: "w-3/4",
      description: "This graph showcases the weekly average TikTok likes, illustrating how engagement fluctuates over the year.",
      observations: [
        "Engagement starts relatively low in the early weeks but shows a steady climb, reaching a pronounced peak between weeks 10 and 20. During this time, the weekly average likes consistently surpass 30 and even exceed 40 at some points.",
        "After week 20, a gradual decline is observed, with averages dropping below 10 likes by week 40 and stabilizing at lower levels for the rest of the year.",
        "The shaded region highlights variability, with the highest fluctuations occurring during the peak weeks (10–20). This could indicate sporadic viral posts or varying audience responses during these weeks."
      ]
    },
    {
      src: Tiktok2,
      title: "Line Plot of TikTok Likes Over Time & Likes Distribution",
      size: "w-full",
      description: "The left panel tracks the daily trends in TikTok likes, while the right panel shows the overall distribution of likes across all posts.",
      observations: [
        "The daily trends reveal several sharp peaks, with the most prominent spike occurring in early 2024, where likes exceed 70 on a single day. Other notable spikes are observed throughout early and mid-2024, indicating periods of heightened engagement.",
        "The distribution plot (right panel) is heavily skewed to the right, with the majority of posts receiving fewer than 20 likes. A small fraction achieves exceptionally high engagement, as evidenced by the long tail reaching above 60 likes."
      ]
    },
    {
      src: Tiktok4,
      title: "Average TikTok Likes by Day of the Week",
      size: "w-3/4",
      description: "This bar chart examines the average TikTok likes across different days of the week, shedding light on daily engagement patterns.",
      observations: [
        "Friday emerges as the most engaging day, with an average of over 15 likes, indicating heightened audience activity toward the end of the week.",
        "Other weekdays (Monday to Thursday) show fairly consistent averages, hovering around 12–14 likes.",
        "Sunday shows the lowest engagement levels, suggesting reduced platform activity during this day."
      ]
    },
    {
      src: Tiktok5,
      title: "Average TikTok Likes by Month",
      size: "w-2/3",
      description: "This graph provides a monthly breakdown of average TikTok likes, highlighting seasonal variations in audience engagement.",
      observations: [
        "March and April stand out as the most engaging months, with averages exceeding 30 likes. These months dominate in terms of audience interaction and content performance.",
        "A sharp decline begins in May, continuing into the summer months (July and August). Engagement levels drop further during the winter months, bottoming out in November and December.",
        "January marks the beginning of a gradual buildup, indicating a slow recovery post-holiday season."
      ]
    },
    {
      src: Tiktok6,
      title: "Average TikTok Likes for Weekdays vs. Weekends",
      size: "w-2/3",
      description: "This bar chart contrasts average TikTok likes on weekdays versus weekends, offering a snapshot of how audience activity shifts.",
      observations: [
        "Weekday posts slightly outperform weekend posts, averaging over 14 likes compared to just above 12 likes for weekends.",
        "The close margin suggests relatively stable engagement across both time frames, with no drastic shifts in the behavior."
      ]
    }
  ];

  return (
    <div className={`${styles.container} pt-28 min-h-screen bg-gray-50`}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Social Media Analysis
          </h1>
          <p className={styles.subtitle}>
            Deep Dive into Instagram and TikTok Engagement Analysis
          </p>
        </header>

        <div className="max-w-7xl mx-auto px-4">
          {/* Instagram Analysis Section */}
          <section className="mb-24">
            <div className="flex items-center mb-12">
              <Instagram className="text-indigo-500 mr-4" size={40} />
              <h2 className="text-5xl font-bold text-indigo-600">
                Instagram Engagement Analysis
              </h2>
            </div>

            {instagramImages.map((image, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow mb-12">
                <h3 className="text-3xl font-semibold text-purple-600 mb-6">
                  {image.title}
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {image.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">
                    Important Highlights
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    {image.observations.map((observation, i) => (
                      <li key={i} className="text-lg leading-relaxed">
                        {observation}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`rounded-lg shadow-md ${image.size} h-auto`}
                  />
                </div>
              </div>
            ))}
          </section>

          {/* TikTok Analysis Section */}
          <section className="mb-16 mt-32">
            <div className="flex items-center mb-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-indigo-500 mr-4"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <h2 className="text-5xl font-bold text-indigo-600">
                TikTok Engagement Analysis
              </h2>
            </div>

            {tiktokImages.map((image, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow mb-12">
                <h3 className="text-3xl font-semibold text-purple-600 mb-6">
                  {image.title}
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {image.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">
                    Important Highlights
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    {image.observations.map((observation, i) => (
                      <li key={i} className="text-lg leading-relaxed">
                        {observation}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`rounded-lg shadow-md ${image.size} h-auto`}
                  />
                </div>
              </div>
            ))}
          </section>

          <footer className="text-center text-gray-600 pt-8 border-t border-gray-200">
            <p>© 2024 Digital Wellness Research | Umut Kerem Zengin</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPage;