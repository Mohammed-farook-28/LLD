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
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors')
options.add_argument('--disable-gpu')
options.add_argument('--disable-dev-shm-usage')
options.add_argument('--no-sandbox')

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
driver.maximize_window()

# === Step 2: Navigate to All Releases Page ===
driver.get('https://www.pib.gov.in/allRel.aspx')
print("✅ Successfully navigated to All Releases page")
time.sleep(5)

# === Step 3: Setup Selectors with New IDs ===
try:
    # Verify and wait for Day dropdown
    day_select_element = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "ContentPlaceHolder1_ddlday"))
    )
    day_select = Select(day_select_element)
    print("✅ Day dropdown found")
except:
    print("❌ Day dropdown not found. Please verify the ID.")
    driver.quit()

try:
    # Verify and wait for Month dropdown
    month_select_element = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "ContentPlaceHolder1_ddlMonth"))
    )
    month_select = Select(month_select_element)
    print("✅ Month dropdown found")
except:
    print("❌ Month dropdown not found. Please verify the ID.")
    driver.quit()

try:
    # Verify and wait for Year dropdown
    year_select_element = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "ContentPlaceHolder1_ddlYear"))
    )
    year_select = Select(year_select_element)
    print("✅ Year dropdown found")
except:
    print("❌ Year dropdown not found. Please verify the ID.")
    driver.quit()

# === Step 4: Set Values ===
day_select.select_by_visible_text("All")
print("✅ All dates selected successfully.")
