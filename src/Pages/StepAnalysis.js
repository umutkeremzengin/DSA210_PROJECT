import React from "react";
import { Footprints } from 'lucide-react';
import StepCount1 from "../assets/Step_count_img/Step_count_1.png";
import StepCount2 from "../assets/Step_count_img/Step_count_2.png";
import StepCount3 from "../assets/Step_count_img/Step_count_3.png";
import StepCount4 from "../assets/Step_count_img/Step_count_4.png";
import StepCount5 from "../assets/Step_count_img/Step_Count_5.png";
import StepCount6 from "../assets/Step_count_img/Step_count_6.png";
import styles from '../styles/IntroductionPage.module.css';

const StepAnalysis = () => {
  const graphData = [
    {
      image: StepCount2,
      title: "Line Plot of Step Count Over Time",
      description: "This graph provides a weekly view of step counts, showing fluctuations in activity levels over time. Peaks in the blue line represent high-activity weeks, while valleys highlight periods of reduced movement.",
      insights: [
        "The weekly data reveals distinct activity cycles, with periodic increases suggesting organized efforts to stay active, such as during vacations or fitness programs.",
        "Periods of consistent activity are evident, though some weeks show noticeable drops, indicating potential disruptions or breaks from routine.",
        "The smooth trendline enables an easy assessment of activity consistency and identifies periods of increased motivation."
      ],
      size: "w-3/4" // Smaller size for this graph
    },
    {
      image: StepCount3,
      title: "Weekly Average Step Counts",
      description: "This graph examines weekly average step counts over multiple years, separating data by year to highlight long-term trends. The use of distinct colors for each year provides clarity for comparing yearly patterns.",
      insights: [
        "Weekly step averages vary year-to-year, with some years showing consistent activity, while others experience more fluctuations.",
        "Seasonal changes are evident, with activity peaking in certain weeks, possibly during favorable weather conditions or annual fitness goals.",
        "A noticeable trend shows improved weekly activity in specific periods across all years, highlighting potential behavioral shifts."
      ],
      size: "w-11/12" // Larger size
    },
    {
      image: StepCount4,
      title: "Weekly Average Step Count (Separated by Year)",
      description: "This visualization compares weekly step count averages for different years, analyzing activity across weekdays and weekends. The left panel focuses on day-of-week trends, while the right panel examines weekday vs. weekend activity differences.",
      insights: [
        "Daily activity peaks on Tuesdays, followed closely by Mondays, suggesting structured activity early in the week.",
        "Weekend averages are slightly lower than weekdays, indicating less structured physical activity during leisure time.",
        "The year-by-year comparison emphasizes consistency in activity patterns, with variations likely influenced by external factors such as schedules or fitness goals."
      ],
      size: "w-11/12" // Larger size
    },
    {
      image: StepCount5,
      title: "Average Step Counts by Weekday vs. Weekend",
      description: "This graph visualizes the distribution of step counts for each day of the week, distinguishing between weekdays and weekends. Box plots provide a clear picture of variability and outliers.",
      insights: [
        "Step counts tend to be more consistent on weekdays, with narrower distributions compared to weekends.",
        "Saturdays and Sundays show slightly more variability, reflecting diverse activity patterns during leisure days.",
        "Outliers are observed across all days, suggesting occasional bursts of high activity, possibly during events or outdoor excursions."
      ],
      size: "w-4/5" // Medium size
    },
    {
      image: StepCount6,
      title: "Monthly Activity Pattern Analysis",
      description: "This visualization breaks down average step counts by month, highlighting seasonal variations and trends. The gradient color palette emphasizes changes across months, with warmer colors for higher averages.",
      insights: [
        "Activity peaks in April and August, potentially reflecting seasonal preferences for outdoor activities or fitness challenges.",
        "Step counts dip in colder months like December and January, indicating reduced outdoor movement, typical of winter months.",
        "The monthly trends provide a clear view of how activity aligns with seasonal and environmental conditions."
      ],
      size: "w-3/4" // Smaller size
    }
  ];

  return (
    <div className={`${styles.container} pt-28 min-h-screen bg-gray-50`}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Step Count Analysis
          </h1>
          <p className={styles.subtitle}>
            Understanding Daily Activity Patterns and Movement Trends
          </p>
        </header>
     
        {/* New Title Section with Step Icon */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-12">
            <Footprints className="text-indigo-500 mr-4" size={40} />
            <h2 className="text-5xl font-bold text-indigo-600">
              Steps Analysis
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4"> {/* Increased max-width of main container */}
          {/* First Graph - Special Layout */}
          <div className="bg-white p-8 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow mb-12">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">
              Daily Step Patterns and Frequency Distribution
            </h2>
            <div className="mx-auto">  {/* Removed max-width constraint */}
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                This visualization highlights the daily step count trends and the overall distribution of 
                steps across a period. The left panel illustrates the daily recorded steps, with the blue line
                showcasing significant fluctuations, while the right panel presents the frequency distribution 
                of step counts using a histogram.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Important Highlights</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li className="text-lg">
                    The daily step count displays substantial variability, with occasional outliers exceeding 30,000 steps, 
                    which might align with specific events or heightened activity.
                  </li>
                  <li className="text-lg">
                    Periodic dips suggest days of rest, illness, or other factors limiting activity.
                  </li>
                  <li className="text-lg">
                    The histogram reveals that the most common daily step counts fall between 5,000 and 10,000 steps, 
                    aligning with general fitness guidelines for moderate activity.
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <img
                  src={StepCount1}
                  alt="Step Count Trends and Distribution"
                  className="rounded-lg shadow-md w-11/12 h-auto" // Using w-11/12 for larger size
                />
              </div>
            </div>
          </div>

          {/* Remaining Graphs */}
          {graphData.map((graph, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow mb-12">
              <h2 className="text-3xl font-bold text-indigo-600 mb-6">
                {graph.title}
              </h2>
              <div className="mx-auto"> {/* Removed max-width constraint */}
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {graph.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                    Important Highlights
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    {graph.insights.map((insight, i) => (
                      <li key={i} className="text-lg">{insight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <img
                    src={graph.image}
                    alt={graph.title}
                    className={`rounded-lg shadow-md ${graph.size} h-auto`}
                  />
                </div>
              </div>
            </div>
          ))}

          <footer className="text-center text-gray-600 pt-8 border-t border-gray-200">
            <p>© 2024 Digital Wellness Research | Umut Kerem Zengin</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default StepAnalysis;  