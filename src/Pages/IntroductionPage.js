import React from 'react';
import { BarChart, Activity, Instagram, Braces, Code, Component, Binary, MessagesSquare, LightbulbIcon } from 'lucide-react';
import styles from '../styles/IntroductionPage.module.css';

const IntroductionPage = () => {
  return (
    <div className={`${styles.container} pt-28`}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>
          Digital and Physical Life Analysis
          </h1>
          <p className={styles.subtitle}>
            Introduction to understanding the Impact of Social Media on Physical Activity
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">
            Motivation
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow">
            <p className="text-xl text-gray-700 leading-relaxed">
              The primary motivation for this project was to explore how daily activities are distributed, 
              particularly focusing on the dynamic interaction between digital and physical activities. 
              This analysis investigates the relationship between social media engagement and physical 
              activity patterns. By examining data from Instagram and TikTok alongside daily step counts, 
              the project uncovers insights into how digital activity influences physical activity. <strong>The hypothesis driving this exploration is that an increase in social media likes correlates 
              with a reduction in physical activity, measured through daily steps.</strong>
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-indigo-600">
            Research Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Data Collection
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Braces className="text-indigo-500 flex-shrink-0" size={32} />
                  <p className="text-gray-600 text-lg">
                    <strong>TikTok and Instagram like counts:</strong> Extracted in JSON file formats
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Code className="text-indigo-500 flex-shrink-0" size={32} />
                  <p className="text-gray-600 text-lg">
                    <strong>Daily step counts:</strong> Retrieved from Apple Health XML files
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Techniques Used
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Component className="text-indigo-500 flex-shrink-0" size={32} />
                  <p className="text-gray-600 text-lg">
                    <strong>React:</strong> For building the user interface and visualizing results
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Binary className="text-indigo-500 flex-shrink-0" size={32} />
                  <p className="text-gray-600 text-lg">
                    <strong>Python:</strong> For data cleaning, processing, and analysis
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <MessagesSquare className="text-indigo-500 flex-shrink-0" size={32} />
                  <p className="text-gray-600 text-lg">
                    <strong>JavaScript:</strong> For integrating functionalities and enhancing interactivity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-indigo-600">
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
                icon: LightbulbIcon,
                title: "Insights",
                desc: "The results derived from the correlations and testing the hypothesis"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow">
                <item.icon size={36} className="text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-indigo-600">
            Limitations and Future Work
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow">
            <p className="text-lg text-gray-700 mb-4">
              The project encountered certain limitations that impacted the accuracy of the results. 
              Specifically, detailed usage data from Instagram and TikTok, such as time spent on 
              these platforms, could not be accessed. This limitation restricted a more nuanced 
              understanding of the correlation between social media activity and physical activity.
            </p>
            <p className="text-lg text-gray-700">
              For future work, I aim to expand the project to include a longitudinal study, 
              analyzing whether the relationship between step counts and social media likes 
              remains consistent over the years. This would provide deeper insights into how 
              digital habits evolve and continue to influence physical activity patterns over time.
            </p>
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