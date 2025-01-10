import React from "react";
import styles from '../styles/IntroductionPage.module.css';
import Relation1 from "../assets/Relationship_img/Relation_1.png";
import Relation3 from "../assets/Relationship_img/Relation_3.png";
import Relation4 from "../assets/Relationship_img/Relation_4.png";
import Relation5 from "../assets/Relationship_img/Relation_5.png";
import Relation6 from "../assets/Relationship_img/Relation_6.png";
import Relation7 from "../assets/Relationship_img/Relation_7.png";
import Relation8 from "../assets/Relationship_img/Relation_8.png";
import Relation9 from "../assets/Relationship_img/Relation_9.png";
import Relation10 from "../assets/Relationship_img/Relation_10.png";
import { BarChart } from 'lucide-react';

const RelationshipPage = () => {
  const relationshipImages = [
    { src: Relation1, title: "Overall Correlation Analysis" },
    { src: Relation3, title: "Time Series Relationship" },
    { src: Relation4, title: "Pattern Distribution" },
    { src: Relation5, title: "Daily Usage Impact" },
    { src: Relation6, title: "Weekly Trends Analysis" },
    { src: Relation7, title: "Activity vs Social Media Usage" },
    { src: Relation8, title: "Platform Specific Effects" },
    { src: Relation9, title: "Engagement Patterns" },
    { src: Relation10, title: "Long-term Impact Analysis" }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Activity-Social Media Relationship Analysis
          </h1>
          <p className={styles.subtitle}>
            Exploring the Correlation Between Digital Engagement and Physical Activity
          </p>
        </header>

        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BarChart className="text-indigo-500 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-indigo-600">
              Correlation Analysis
            </h2>
          </div>

          <div className="space-y-12">
            {relationshipImages.map((image, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  {image.title}
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-lg text-gray-600">
                    [Analysis text placeholder for relationship graph {index + 1}]
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

export default RelationshipPage;