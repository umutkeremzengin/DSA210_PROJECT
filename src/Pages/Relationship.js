import React from "react";
import styles from '../styles/IntroductionPage.module.css';
import { BarChart } from 'lucide-react';
import Relation1 from "../assets/Relationship_img/Relation_1.png";
import Relation3 from "../assets/Relationship_img/Relation_3.png";
import Relation4 from "../assets/Relationship_img/Relation_4.png";
import Relation5 from "../assets/Relationship_img/Relation_5.png";
import Relation6 from "../assets/Relationship_img/Relation_6.png";
import Relation7 from "../assets/Relationship_img/Relation_7.png";
import Relation8 from "../assets/Relationship_img/Relation_8.png";
import Relation9 from "../assets/Relationship_img/Relation_9.png";
import Relation10 from "../assets/Relationship_img/Relation_10.png";
import Relation11 from "../assets/Relationship_img/Relation_11.png";

const RelationshipPage = () => {
  const relationshipImages = [
    {
      src: Relation1,
      title: "Normalized Trends: Step Counts vs Instagram Likes (5-day Rolling Avg)",
      size: "w-full",
      description: "This graph showcases the normalized trends of daily step counts (orange) and Instagram likes (purple) over a two-year period. The normalization allows for direct comparison despite differing scales of the two variables.",
      observations: [
        "The orange trendline displays frequent peaks and troughs, indicating significant variability in step counts, which could be influenced by external factors like weather, events, or personal schedules.",
        "Instagram activity appears more stable but exhibits its own fluctuations, with periods of high activity often corresponding to specific spikes or dips.",
        "Certain overlaps between dips in step counts and spikes in Instagram likes suggest a potential negative correlation during specific intervals (e.g., early 2024)."
      ],
      comparison: "Physical Activity vs Digital Engagement: There are instances where higher Instagram activity coincides with lower physical activity, possibly reflecting increased screen time and reduced movement."
    },
    {
      src: Relation3,
      title: "Normalized Trends: Step Counts vs TikTok Likes (5-day Rolling Avg)",
      size: "w-full",
      description: "This graph compares normalized step counts (orange) against TikTok likes (blue) over time. Both variables are smoothed with a 5-day rolling average to highlight underlying trends.",
      observations: [
        "TikTok activity generally declines over time, with a noticeable drop after mid-2024, whereas step counts maintain periodic spikes throughout the dataset.",
        "Spikes in TikTok likes occasionally overlap with dips in step counts, particularly during periods of high digital engagement."
      ],
      comparison: "Tiktok like vs Activity: Similar to Instagram, periods of increased TikTok usage might correlate with reduced movement."
    },
    {
      src: Relation4,
      title: "Combined Visualization: Monthly and Temporal Trends of Instagram and TikTok Likes",
      size: "w-3/4",
      description: "This visualization combines three perspectives: monthly variations in likes, smoothed trends over time, and the overall distribution of engagement between Instagram and TikTok. Together, they provide insights into how engagement fluctuates over months, trends across days, and the relative contribution of each platform.",
      observations: [
        "Monthly Likes Comparison (Bar Chart): TikTok shows a sharp peak in March and April, indicating periods of significantly higher engagement. Conversely, Instagram likes remain relatively steady, with minor peaks in May and June. Both platforms see a gradual decline in engagement toward the end of the year.",
        "Smoothed Likes Over Time (Line Plot): TikTok exhibits more dramatic fluctuations, with rapid increases in likes during early spring and sharp declines later. Instagram displays steadier trends, with slight increases in late spring and consistent activity afterward.",
        "Overall Likes Distribution (Pie Chart): TikTok dominates with nearly 58% of total likes, showcasing higher engagement levels compared to Instagram, which accounts for 42%."
      ],
      comparison: "Monthly Comparison: TikTok's bar heights show greater volatility, with significant spikes in spring months, contrasting Instagram's steady but lower bar heights throughout the year. Smoothed Temporal Trends: The smoothed plot reveals TikTok's engagement is driven by specific events or trends, while Instagram provides consistent interaction across the year. Distribution Comparison: The pie chart confirms TikTok as the dominant platform in terms of total likes, with Instagram contributing a smaller but steadier share. This aligns with TikTok's peaks in monthly and smoothed trends."
    },
    {
      src: Relation5,
      title: "Smoothed Line Plot of Instagram and TikTok Likes Over Time",
      size: "w-3/4",
      description: "This line plot highlights smoothed trends of Instagram (orange) and TikTok likes (green), emphasizing their respective activity patterns.",
      observations: [
        "TikTok activity exhibits sharp rises and falls, peaking dramatically in early 2024, whereas Instagram shows steadier, less volatile trends.",
        "A visible decline in both platforms' activity occurs post-mid-2024, suggesting external influences, such as increasing outdoor activities."
      ],
      comparison: "Interaction Between Platforms: While Instagram and TikTok usage peaks align occasionally, their trends are largely independent. This suggests that engagement strategies or personal usage habits for each platform may differ."
    },
    {
      src: Relation6,
      title: "Comparative Smoothed Line Plot of Step Counts and TikTok Likes Over Time",
      size: "w-3/4",
      description: "This plot juxtaposes step counts (blue) and TikTok likes (green) to reveal their temporal relationship.",
      observations: [
        "Periods of increased TikTok engagement often coincide with reduced step counts, such as early 2024, hinting at a potential inverse relationship.",
        "However, there are also instances where both metrics increase simultaneously, suggesting that social media usage and physical activity are not strictly oppositional."
      ],
      comparison: "Correlation Complexity: The relationship between TikTok activity and step counts appears inversely proportional. However it is wise to keep in mind that while extended screen time might reduce physical activity, other factors—such as engaging in TikTok trends that require movement (e.g., dance challenges)—might positively influence step counts."
    },
    {
      src: Relation7,
      title: "Comparative Smoothed Line Plot of Step Counts and Instagram Likes Over Time",
      size: "w-3/4",
      description: "This smoothed line graph represents the trends for step counts (blue) and Instagram likes (orange) over a specified period. Both variables are scaled to allow for direct comparison of their fluctuations and interactions.",
      observations: [
        "Step Counts (Blue): Show consistent fluctuations with notable peaks in early 2024 and mid-2024. The overall trend suggests periodic increases in physical activity.",
        "Instagram Likes (Orange): Demonstrate a declining trend after a peak in late 2023. There are smaller fluctuations in early 2024, but the general trajectory decreases steadily over time."
      ],
      comparison: "The inverse relationship between step counts and Instagram likes is evident during specific periods: Late 2023: A sharp rise in Instagram likes coincides with a  decline in step counts, indicating a potential shift towards increased digital engagement at the expense of physical activity reinforcing the hypothesis that increased social media activity is associated with decreased physical movement. The long-term decline in Instagram likes during mid-2024 until the end of year appears to align with a more consistent trend in step counts, suggesting a possible reallocation of time away from social media towards physical activity."
    },
    {
      src: Relation8,
      title: "Normalized Monthly Averages (Step Counts, Instagram Likes, TikTok Likes)",
      size: "w-3/4",
      description: "This bar chart visualizes normalized averages of step counts, Instagram likes, and TikTok likes across months. Step counts are shown in blue, Instagram likes in orange, and TikTok likes in green, with values scaled between 0 and 1 for easy comparison.",
      observations: [
        "Step Counts: Consistently higher in most months, peaking in April and August.",
        "Instagram Likes: Show moderate values, with a peak in April and a decline afterward.",
        "TikTok Likes: Peak sharply in March and April, then decline significantly."
      ],
      comparison: "During months like March and April, where TikTok and Instagram likes peak, step counts either plateau or slightly decline, indicating a potential inverse relationship. In contrast, August sees high step counts with low social media activity, further supporting the hypothesis that increased digital engagement may coincide with reduced physical movement."
    },
    {
      src: Relation9,
      title: "Scatterplot Matrix of Step Counts, Instagram Likes, and TikTok Likes",
      size: "w-3/4",
      description: "This scatterplot matrix presents pairwise relationships between step counts, Instagram likes, and TikTok likes. Diagonal histograms represent the distribution of each variable.",
      observations: [
        "Step Counts vs Instagram/TikTok Likes: Scatterplots indicate no strong linear correlation between step counts and social media likes.",
        "Instagram vs TikTok Likes: A clustering pattern suggests that activity on the two platforms may correlate positively with each other."
      ],
      comparison: "Clusters of low step counts paired with higher Instagram/TikTok likes suggest moments where increased social media engagement may coincide with reduced physical activity. The absence of a strong linear relationship highlights variability in how these variables interact, indicating the influence of other factors."
    },
    {
      src: Relation10,
      title: "Normalized Comparison of Step Counts, Instagram Likes, and TikTok Likes (Smoothed)",
      size: "w-3/4",
      description: "This smoothed line graph compares normalized trends for step counts (blue), Instagram likes (red), and TikTok likes (green) over time. Each variable is scaled between 0 and 1 for trend visualization.",
      observations: [
        "Step counts exhibit periodic peaks, while Instagram and TikTok likes show irregular surges, particularly in early 2024.",
        "A noticeable dip in step counts corresponds to peaks in social media activity, especially during March-April 2024."
      ],
      comparison: "The inverse trends between step counts and social media activity during peak months reinforce the hypothesis that increased social media engagement may lead to reduced physical movement. For example, during March-April 2024, high likes coincide with low step counts, aligning with the hypothesis."
    },
    {
      src: Relation11,
      title: "Comparative Smoothed Line Plot of Step Counts, TikTok Likes, and Instagram Likes",
      size: "w-3/4",
      description: "This smoothed line graph shows trends for step counts (blue), TikTok likes (green), and Instagram likes (orange) over time. Each line represents the scaled average for better comparison.",
      observations: [
        "Step counts maintain strong peaks in April and August, while TikTok and Instagram likes decline during these periods.",
        "TikTok likes experience steeper drops compared to Instagram likes after their respective peaks."
      ],
      comparison: "Step counts increase when social media activity decreases (e.g., in April and August), suggesting an inverse relationship. Declines in digital engagement appear to correspond with higher physical activity levels, further supporting the hypothesis."
    }
  ];

  return (
    <div className={`${styles.container} pt-28 min-h-screen bg-gray-50`}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Activity-Social Media Relationship Analysis
          </h1>
          <p className={styles.subtitle}>
            Exploring the Correlation Between Digital Engagement and Physical Activity
          </p>
        </header>

        <div className="max-w-7xl mx-auto px-4">
          <section className="mb-24">
            <div className="flex items-center mb-12">
              <BarChart className="text-indigo-500 mr-4" size={40} />
              <h2 className="text-5xl font-bold text-indigo-600">
                Correlation Analysis
              </h2>
            </div>

            {relationshipImages.map((image, index) => (
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
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="text-xl font-semibold text-purple-600 mb-3">
                      Comparison Analysis
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {image.comparison}
                    </p>
                  </div>
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
            {/* Final Insights Section */}
  <section className="mb-16 relative">
    <div className="bg-white p-8 rounded-lg shadow-[0_0_30px_rgba(79,_70,_229,_0.2)] hover:shadow-[0_20px_70px_rgba(79,_70,_229,_0.4),_0_-20px_70px_rgba(236,_72,_153,_0.3)] transition-shadow duration-500 border border-red-100 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-5 rounded-lg"></div>
      <h3 className="text-3xl font-semibold text-purple-600 mb-6">
        Final Insights: Evaluating the Hypothesis
      </h3>
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        The hypothesis driving this analysis was that <span className="font-semibold">an increase in social media likes correlates with a reduction in physical activity, measured through daily steps</span>. The visualizations and comparisons provide moderate-strong correlations into the relationship between these variables:
      </p>
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h4 className="text-xl font-semibold text-purple-600 mb-4">
          Correlation Observations
        </h4>
        <ul className="space-y-6">
          <li>
            <h5 className="text-lg font-semibold text-gray-700 mb-2">1. Inverse Trends:</h5>
            <p className="text-lg text-gray-700 leading-relaxed ml-4">
              Several visualizations, such as the smoothed temporal trends, reveal an inverse relationship between step counts and likes, particularly for TikTok. For instance, TikTok likes peak in March and April when step counts are relatively low, suggesting a potential substitution effect between time spent on the platform and physical activity.
            </p>
          </li>
          <li>
            <h5 className="text-lg font-semibold text-gray-700 mb-2">2. Steady Influence of Instagram:</h5>
            <p className="text-lg text-gray-700 leading-relaxed ml-4">
              Instagram likes exhibit steadier patterns compared to TikTok and do not show a pronounced inverse relationship with step counts. This implies that Instagram usage may not significantly disrupt daily physical activity, or its effects might be subtler.
            </p>
          </li>
          <li>
            <h5 className="text-lg font-semibold text-gray-700 mb-2">3. Scatter Plot Analysis:</h5>
            <p className="text-lg text-gray-700 leading-relaxed ml-4">
              The scatter plots highlight a weak correlation between step counts and like counts overall. While isolated periods show some negative correlations, the relationship is not uniformly strong across all days or months.
            </p>
          </li>
        </ul>
      </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">
                    Conclusion on the Hypothesis
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    The analysis provides partial support for the hypothesis. <span className="font-semibold">TikTok likes exhibit a stronger inverse relationship with physical activity</span>, suggesting that increased engagement on this platform may coincide with decreased physical activity. However, Instagram likes appear to have an existing correlation with step counts, indicating that its impact on physical activity cannot be negligible.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To further validate these insights, additional factors such as time spent on each platform, content types, or other lifestyle variables could provide a more comprehensive understanding of the dynamics between physical activity and social media engagement.
                  </p>
                </div>
              </div>
          </section>
          <footer className="text-center text-gray-600 pt-8 border-t border-gray-200">
            <p>© 2024 Digital Wellness Research | Umut Kerem Zengin</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default RelationshipPage;