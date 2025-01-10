# 📊 Step Count vs. Instagram and TikTok Activity: A Correlation Analysis

## **Motivation**
Physical activity and digital habits are integral parts of modern life, often influencing each other. This analysis investigates the relationship between social media engagement and physical activity patterns. By examining data from Instagram and TikTok alongside daily step counts, the project uncovers insights into how digital activity influences physical activity.

The hypothesis driving this exploration is that an increase in social media likes correlates with a reduction in physical activity, measured through daily steps.

🔗 **You can explore the project in detail on my website:** [Project Website](https://dsa-210-project.vercel.app/)

---

## **Data Collection Process**

### 🏋️ **Step Count Data**
- Synced from my smartphone to the Apple Health app. Retrieved from Apple Health XML files.
- Includes the total number of steps taken each day over a specified period.

### 🔰 **Instagram and TikTok Activity Data**
- TikTok and Instagram like counts extracted in JSON file formats.
- Provides daily engagement metrics.



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
- Use statistical measures to investigate relationships.
- Visualize results through graphs, scatter plots and heatmaps.

### **4. Key Findings & Deductions**
- Analyze whether increased Instagram and TikTok activity correlates with reduced step counts.
- Highlight significant patterns and discuss potential implications.

### **5. Final Report**
- Document results in a comprehensive website.
- Summarize findings, patterns, and implications.
- Provide actionable insights for balancing digital and physical activities.


---
## 🛠 Analysis Files

The data analysis is located in the `main` folder.  
or basically you can find the analysis file here:  
[analysis](https://github.com/umutkeremzengin/DSA210_PROJECT/blob/main/DSA210%20data-checkpoint.ipynb)


---

## **Findings**

### 🔍 **Correlation Observations**
1. **Inverse Trends**: Several visualizations reveal an inverse relationship between step counts and likes, particularly for TikTok, suggesting a potential substitution effect between time spent on the platform and physical activity.
2. **Steady Influence of Instagram**: Instagram likes exhibit steadier patterns compared to TikTok but still show a pronounced inverse relationship with step counts.
3. **Graphs Analysis**: Graphs and plots reveal sporadic periods where higher like counts align with reduced step counts, reinforcing the hypothesis of an inverse relationship. However, these patterns are not uniform across all timeframes, highlighting that external factors such as seasonal changes, lifestyle shifts, or varying platform engagement might mediate this relationship.
### 🧩 **Conclusion on the Hypothesis**
The analysis partially supports the hypothesis. TikTok likes exhibit a stronger inverse relationship with physical activity, while Instagram likes demonstrate a more subtle correlation.

---

## **Limitations and Future Work**

### ⚠️ **Limitations**
- Limited access to detailed usage metrics, such as screen time, restricted a more comprehensive understanding.
- Data is derived solely from personal historical records, which may limit generalizability.

### 🚀 **Future Work**
- Conduct a longitudinal study to analyze the consistency of trends over multiple years.
- Expand metrics to include additional behavioral data (e.g., content type, screen time).
- Explore lifestyle factors and their interactions with digital and physical activity patterns.

  
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
- **Statistical Libraries**: For correlation analysis.

---

### Thank you for exploring this project! 
Feel free to fork the repository, suggest improvements, or reach out with feedback. 🚀
