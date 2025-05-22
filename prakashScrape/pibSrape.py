from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
import time
import os

# === Step 1: Setup WebDriver with correct Chrome path ===
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"  # <- Your Chrome path
options = webdriver.ChromeOptions()
options.binary_location = chrome_path

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
driver.maximize_window()

# === Step 2: Navigate to All Releases Page ===
driver.get('https://www.pib.gov.in/allRel.aspx')
print("✅ Successfully navigated to All Releases page")
time.sleep(5)

# === Step 3: Method to Refresh Selectors ===
def refresh_selectors():
    """
    Re-fetches the dropdown elements to avoid StaleElementReferenceException.
    """
    global day_select, month_select, year_select

    day_select_element = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "ContentPlaceHolder1_ddlday"))
    )
    day_select = Select(day_select_element)
    day_select.select_by_visible_text("All")
    print("✅ Day dropdown set to All")

    month_select_element = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "ContentPlaceHolder1_ddlMonth"))
    )
    month_select = Select(month_select_element)
    
    # Print available options for debug
    available_months = [option.text for option in month_select.options]
    print(f"🗓️ Available Months: {available_months}")
    
    print("✅ Month dropdown found")

    year_select_element = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "ContentPlaceHolder1_ddlYear"))
    )
    year_select = Select(year_select_element)
    print("✅ Year dropdown found")

# Initial load of selectors
refresh_selectors()

# === Step 4: Loop through Years and Months ===
years = ['2024', '2025']
months_2024 = ["May", "June", "July", "August", "September", "October", "November", "December"]
months_2025 = ["January", "February", "March", "April", "May"]

for year in years:
    print(f"🗓️ Setting Year: {year}")
    
    # Refresh the selectors and select the year
    refresh_selectors()
    year_select.select_by_visible_text(year)
    time.sleep(5)

    # Choose months based on the year
    months = months_2024 if year == '2024' else months_2025
    
    for month in months:
        print(f"🗓️ Setting Month: {month} {year}")
        
        # Refresh selectors and select the month
        refresh_selectors()
        
        # Retry mechanism to select month if it fails
        retry_attempts = 3
        while retry_attempts > 0:
            try:
                month_select.select_by_visible_text(month)
                print(f"✅ Month '{month}' selected")
                break
            except:
                print(f"⚠️ Retry selecting month '{month}'... Remaining attempts: {retry_attempts}")
                time.sleep(2)
                refresh_selectors()
                retry_attempts -= 1
        
        if retry_attempts == 0:
            print(f"❌ Could not select '{month}' for the year '{year}'. Skipping...")
            continue

        time.sleep(5)  # Wait for the page to load

        # Scroll down to load all elements
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(5)  # Wait for lazy loading to complete

        # Find all ministry headers
        ministry_headers = driver.find_elements(By.XPATH, "//h3")

        # Data storage
        data = []

        # Loop through all ministries
        for header in ministry_headers:
            ministry_name = header.text.strip()
            print(f"    📌 Scraping Ministry: {ministry_name}")
            
            # Find all releases under that header
            releases = header.find_elements(By.XPATH, "following-sibling::ul[1]/li")

            for release in releases:
                try:
                    # Extract Title and Date
                    title = release.find_element(By.TAG_NAME, 'a').text.strip()
                    date_element = release.find_element(By.XPATH, ".//span[@class='publishdatesmall']")
                    date = date_element.text.replace("Posted On: ", "").strip()

                    print(f"        ➡️ Found: {title} | Date: {date}")

                    # Append to data
                    data.append({
                        "Ministry": ministry_name,
                        "Year": year,
                        "Month": month,
                        "Title": title,
                        "Date": date,
                    })

                except Exception as e:
                    print(f"⚠️ Skipping release due to error: {e}")

        # Save to CSV
        for ministry_name, group_data in pd.DataFrame(data).groupby('Ministry'):
            folder_path = f"PIB_Data/{ministry_name}/{year}/{month}"
            os.makedirs(folder_path, exist_ok=True)
            file_name = f"{folder_path}/{ministry_name}_{month}_{year}.csv"
            group_data.to_csv(file_name, index=False)
            print(f"💾 Data saved to {file_name}")

print("✅ All scraping completed successfully.")
driver.quit()
