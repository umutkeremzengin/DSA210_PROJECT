import React from 'react';
import { BarChart, Activity, Instagram, Clock } from 'lucide-react';
import styles from '../styles/IntroductionPage.module.css';

const IntroductionPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Digital Life Balance Analysis</h1>
          <p className={styles.subtitle}>
            Understanding the Impact of Social Media on Physical Activity
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-600">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            My analysis delves into the intricate relationship between social media engagement
            and physical activity patterns. By examining data from Instagram, TikTok, and daily
            step counts, we uncover insights about digital habits and their influence on our
            physical well-being.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: "Activity Tracking",
                desc: "Continuous monitoring of daily step counts and physical movement patterns"
              },
              {
                icon: Instagram,
                title: "Social Engagement",
                desc: "Analysis of Instagram and TikTok usage patterns and interaction metrics"
              },
              {
                icon: BarChart,
                title: "Data Analysis",
                desc: "Statistical correlation between digital engagement and physical activity"
              },
              {
                icon: Clock,
                title: "Time Patterns",
                desc: "Temporal analysis of activity distribution throughout the day"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <item.icon size={24} className="text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">
            Research Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Data Collection
              </h3>
              <p className="text-gray-600">
                Comprehensive gathering of step count data, social media metrics, and engagement patterns
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Analysis Framework
              </h3>
              <p className="text-gray-600">
                Statistical analysis using advanced correlation techniques and pattern recognition
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-600 pt-8 border-t border-gray-200">
          <p>© 2024 Digital Wellness Research | Umut Kerem Zengin</p>
        </footer>
      </div>
    </div>
  );
};

export default IntroductionPage;