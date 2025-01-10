# 📊 Step Count vs. Instagram and TikTok Activity: A Correlation Analysis

## **Motivation**
Physical activity and digital habits are integral parts of modern life, often influencing each other. This analysis investigates the relationship between social media engagement and physical activity patterns. By examining data from Instagram and TikTok alongside daily step counts, the project uncovers insights into how digital activity influences physical activity.

The hypothesis driving this exploration is that an increase in social media likes correlates with a reduction in physical activity, measured through daily steps.

🔗 **You can explore the project in detail on my website:** [Project Website](https://dsa-210-project.vercel.app/)

---

## **Data Source**

### 🏋️ **Step Count Data**
- Retrieved from Apple Health XML files.
- Includes the total number of steps taken each day over a specified period.

### 🔍 **Instagram and TikTok Activity Data**
- TikTok and Instagram like counts extracted in JSON file formats.
- Provides daily engagement metrics.

---

## **Data Collection Process**

### 📊 **Step Count**
- Synced from my smartphone to the Apple Health app.
- Exported as `.xml` files for analysis.

### 🔰 **Instagram and TikTok Activity**
- Instagram and TikTok engagement data extracted in `.json` formats.
- Logged with daily timestamps.

---

## **Project Idea**

This project investigates whether there is a correlation between my step count and social media activity.

### 🕵️ **Hypothesis**
- Increased social media activity might lead to a decrease in physical activity (**negative correlation**).
- Conversely, higher physical activity might reduce social media usage.

### 🎯 **Objective**
To identify and interpret any correlation (**positive, negative, or none**) between these variables and derive meaningful insights based on the findings.

---

## **Workflow**

### **1. Data Preprocessing**
- Clean and format all datasets (step count, Instagram, and TikTok activity).
- Align datasets by date for consistency.
- Combine the datasets into a unified structure for analysis.

### **2. Exploratory Data Analysis (EDA)**
- Visualize step count, Instagram, and TikTok activity trends over time.
- Calculate basic statistics (mean, median, standard deviation).
- Identify initial patterns and anomalies.

### **3. Correlation Analysis**
- Use statistical measures (Pearson’s or Spearman’s correlation coefficients) to investigate relationships.
- Visualize results through scatter plots and heatmaps.

### **4. Key Findings & Deductions**
- Analyze whether increased Instagram and TikTok activity correlates with reduced step counts.
- Highlight significant patterns and discuss potential implications.

### **5. Final Report**
- Document results in a comprehensive report.
- Summarize findings, patterns, and implications.
- Provide actionable insights for balancing digital and physical activities.

---

## **Expected Deliverables**

- 📄 A cleaned and well-structured dataset combining step count and social media activity data.
- 🔦 Visualizations and statistical analysis demonstrating any observed relationships.
- 🔒 A final report detailing findings and their implications for lifestyle balance.

---

## **Important Notes**

- This project is based entirely on my personal, historical data.
- No assumptions were made for missing or non-existent data.
- All insights are derived directly from the available records.

---

## **Technologies Used**

- **Python**: Data preprocessing, analysis, and visualization.
- **React**: For building the user interface and visualizing results.
- **JavaScript**: For integrating functionalities and enhancing interactivity.
- **Pandas**: For data manipulation and cleaning.
- **Matplotlib/Seaborn**: For creating insightful visualizations.
- **Statistical Libraries**: For correlation analysis (Pearson/Spearman).

---

### Thank you for exploring this project! 
Feel free to fork the repository, suggest improvements, or reach out with feedback. 🚀
