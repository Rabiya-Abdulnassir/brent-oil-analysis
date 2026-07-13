# Brent Oil Price Change Point Analysis Report

## 1. Project Objective

The objective of this project is to analyze historical Brent crude oil prices and identify significant changes in price behavior over time. The analysis focuses on understanding how major geopolitical events, OPEC decisions, and economic shocks relate to changes in the Brent oil market.

The project uses historical Brent oil price data together with a structured dataset of major oil-related events to investigate trends, volatility patterns, and possible structural breaks using change point analysis.

---

## 2. Data Analysis Workflow

The analysis follows a structured time series workflow:

### Step 1: Data Collection and Preparation

The Brent oil price dataset is loaded and prepared for analysis. The main preprocessing steps include:

* Loading the historical Brent oil price data.
* Converting date values into a datetime format.
* Setting the date as the time series index.
* Checking for missing values and data quality issues.
* Preparing the dataset for statistical analysis.

A separate event dataset is created containing major oil market events, including geopolitical conflicts, OPEC decisions, financial crises, and global economic shocks.

---

### Step 2: Exploratory Data Analysis

Exploratory analysis is performed to understand the behavior of Brent oil prices.

The analysis includes:

* Visualizing the historical price trend.
* Identifying periods of rapid increases and decreases.
* Examining major price fluctuations.
* Calculating rolling statistics to observe changes in volatility.

These observations help identify important periods that may require further investigation.

---

### Step 3: Time Series Property Analysis

Before applying statistical models, the main properties of the Brent oil price time series are examined.

### Trend Analysis

The historical price plot is used to identify long-term movements, including:

* Periods of price growth.
* Major declines.
* Market instability.
* Long periods of stable prices.

Understanding the trend helps determine the overall behavior of the oil market.

### Stationarity Testing

The Augmented Dickey-Fuller (ADF) test is used to determine whether the Brent oil price series is stationary.

Stationarity is important because many time series models require stable statistical properties. If the series is non-stationary, transformations or alternative modeling approaches may be required.

### Volatility Analysis

Rolling standard deviation is calculated to measure changes in price variability over time.

High volatility periods may indicate the influence of major market events, uncertainty, or supply and demand shocks.

---

## 3. Change Point Analysis

Change point models are statistical methods used to identify points in time where the characteristics of a time series change significantly.

For Brent oil prices, change points may represent periods where:

* The average price level changes.
* Market volatility increases or decreases.
* The relationship between supply and demand changes.

These structural breaks may occur around important events such as wars, OPEC production decisions, financial crises, or global economic disruptions.

---

## 4. Expected Outputs of Change Point Analysis

The expected outputs include:

* Dates where significant changes occurred.
* Changes in average price levels.
* Changes in volatility patterns.
* Comparison between detected change points and historical events.

The results will help identify important periods in Brent oil price history and provide insights into possible market drivers.

---

## 5. Assumptions and Limitations

### Assumptions

* The Brent oil price dataset accurately represents historical market prices.
* The collected event dates are approximately correct.
* Statistical changes detected in the data represent meaningful changes in market behavior.

### Limitations

* Change point detection identifies statistical changes but does not prove that a specific event caused the change.
* Oil prices are influenced by many factors, including production levels, demand, currency exchange rates, investor expectations, and government policies.
* Some events may influence prices gradually rather than immediately.

### Correlation vs Causation

A change occurring near the date of a major event indicates a possible relationship in time, but it does not prove causation. Demonstrating causal impact requires additional economic analysis, controlled variables, and further statistical testing.

---

## 6. Communication of Results

The final results will be communicated through:

* Jupyter Notebook analysis with code and visualizations.
* A written technical report.
* Charts showing price trends, volatility, and detected change points.
* A presentation summarizing important findings for stakeholders.

The goal is to provide clear insights into Brent oil price behavior and the impact of major market events.
