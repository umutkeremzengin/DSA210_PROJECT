export const processStepData = async () => {
    try {
      // Using fetch instead of window.fs.readFile
      const response = await fetch('/stepcount.txt');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const text = await response.text();
      
      const lines = text.split('<Record');
      const stepData = [];
      
      lines.forEach(line => {
        if (line.includes('HKQuantityTypeIdentifierStepCount')) {
          const startDateMatch = line.match(/startDate="([^"]+)"/);
          const valueMatch = line.match(/value="(\d+)"/);
          
          if (startDateMatch && valueMatch) {
            const dateStr = startDateMatch[1].split(' ')[0]; // Get only the date part
            const steps = parseInt(valueMatch[1], 10);
            
            stepData.push({
              date: dateStr,
              steps: steps
            });
          }
        }
      });
  
      // Group by date
      const groupedData = {};
      stepData.forEach(({ date, steps }) => {
        if (!groupedData[date]) {
          groupedData[date] = 0;
        }
        groupedData[date] += steps;
      });
  
      // Convert to array format for the chart
      return Object.entries(groupedData)
        .map(([date, steps]) => ({
          date,
          steps
        }))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
  
    } catch (error) {
      console.error('Error in processStepData:', error);
      throw error;
    }
  };