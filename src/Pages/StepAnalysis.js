import React from "react";
import StepCount1 from "../assets/Step_count_img/Step_count_1.png";
import StepCount2 from "../assets/Step_count_img/Step_count_2.png";
import StepCount3 from "../assets/Step_count_img/Step_count_3.png";
import StepCount4 from "../assets/Step_count_img/Step_count_4.png";
import StepCount5 from "../assets/Step_count_img/Step_Count_5.png";

const StepAnalysis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 p-16 mb-8 rounded-lg shadow-lg">
        <header className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4 font-serif">
            Step Count Analysis
          </h1>
          <p className="text-xl text-gray-100">
            Understanding Daily Activity Patterns and Movement Trends
          </p>
        </header>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Section 1: Step Count Trends and Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Step Count Trends and Distribution
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            This visualization highlights the daily step trends and the overall
            distribution of step counts over time. The left graph depicts the daily
            recorded steps with significant fluctuations, while the right graph
            illustrates the frequency of step counts in a histogram format to provide an
            overall distribution of activity levels.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>
              <strong>Daily Step Trends (Left Graph):</strong> The data shows substantial
              variability in daily steps, with multiple outliers where step counts exceed
              30,000.
            </li>
            <li>
              There are notable dips indicating days of minimal activity, possibly due to
              rest, illness, or sedentary routines.
            </li>
            <li>
              The consistent pattern of highs and lows reflects a dynamic lifestyle with
              occasional bursts of high physical activity.
            </li>
            <li>
              <strong>Step Count Distribution (Right Graph):</strong> The histogram reveals
              that the most common daily step counts fall between 5,000 and 10,000.
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={StepCount1}
              alt="Line Plot of Step Count Over Time"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>

        {/* Section 2: Line Plot of Step Count Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Line Plot of Step Count Over Time
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            This graph displays the trend of your step count over time. Peaks
            represent days of high activity, while troughs indicate lower
            activity.
          </p>
          <img
            src={StepCount2}
            alt="Line Plot of Step Count Over Time"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Additional sections continue with the same styling pattern... */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Weekly Average Step Counts
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            This graph highlights the weekly trends in your step count, showing
            how activity levels fluctuate week by week.
          </p>
          <img
            src={StepCount3}
            alt="Weekly Average Step Counts"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Weekly Average Step Count (Separated by Year)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            This graph separates your weekly step count averages by year, helping
            to visualize how your activity has changed year over year.
          </p>
          <img
            src={StepCount4}
            alt="Weekly Average Step Count by Year"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Average Step Counts by Weekday vs Weekend
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            This graph compares the average step counts for weekdays and weekends,
            providing insights into your overall activity patterns.
          </p>
          <img
            src={StepCount5}
            alt="Average Step Counts by Weekday vs Weekend"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <footer className="text-center text-gray-600 pt-8 border-t border-gray-200">
          <p>© 2024 Digital Wellness Research | Umut Kerem Zengin</p>
        </footer>
      </div>
    </div>
  );
};

export default StepAnalysis;