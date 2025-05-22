import pandas as pd
import os

# Get the current working directory
base_directory = os.getcwd()
pib_data_path = os.path.join(base_directory, "PIB_Data")

# Prepare the DataFrame structure
months = [
    "May 2024", "June 2024", "July 2024", "August 2024", "September 2024", 
    "October 2024", "November 2024", "December 2024", 
    "January 2025", "February 2025", "March 2025", "April 2025", "May 2025"
]

consolidated_data = pd.DataFrame(columns=months)

# Loop through all ministries
for ministry in os.listdir(pib_data_path):
    ministry_path = os.path.join(pib_data_path, ministry)
    if os.path.isdir(ministry_path):
        monthly_data = {}
        for year in ["2024", "2025"]:
            year_path = os.path.join(ministry_path, year)
            if os.path.exists(year_path):
                for month in os.listdir(year_path):
                    month_path = os.path.join(year_path, month)
                    for file in os.listdir(month_path):
                        if file.endswith(".csv"):
                            csv_path = os.path.join(month_path, file)
                            df = pd.read_csv(csv_path)
                            month_year = f"{month} {year}"
                            if not df.empty:
                                monthly_data[month_year] = "\n".join(df['Title'].tolist())
        
        # Add to the consolidated DataFrame
        consolidated_data.loc[ministry] = [monthly_data.get(month, "") for month in months]

# Display the DataFrame
print(consolidated_data)

# Save to CSV
output_path = os.path.join(base_directory, "Consolidated_PIB_Data.csv")
consolidated_data.to_csv(output_path, index=True)
print(f"✅ Consolidated Data Saved to: {output_path}")
