---
tags:
  - Resource
  - Coding
---

Pandas doc: https://pandas.pydata.org/docs/index.html
Cookbook (useful strips of code): https://pandas.pydata.org/docs/user_guide/cookbook.html#cookbook 


## Overview
**Pandas** is a powerful, flexible, and easy-to-use open-source data analysis and manipulation library built on top of NumPy. It is widely used for data cleaning, transformation, analysis, and visualization in Python.


# Axis:
Axis:
- Default is by columns, Axis=0
- Can override to be by rows, Axis=1
```python
		A     B     C    D    F    E
2013  0.00  0.00 -1.50  5.0  NaN  1.0
2014  1.21 -0.17  0.11  5.0  1.0  1.0
2015 -0.86 -2.10 -0.49  5.0  2.0  NaN
2016  0.72 -0.70 -1.03  5.0  3.0  NaN

df.mean():
	A   -0.00
	B   -0.38
	C   -0.68
	D    5.00
	F    3.00

df.mean(axis=1):
	2013    0.87
	2014    1.43
	2015    0.70
	2016    1.39
```

### Key Features
- Data structures for efficiently storing large datasets
- Tools for reshaping and merging datasets
- Support for time series data
- High-performance operations for aggregating and filtering data

## Core Data Structures
- **Series**: 1-dimensional labeled array capable of holding any data type.
```python
# Default series
data = [10, 20, 30, 40]
series = pd.Series(data)
print(series)
--------
0    10
1    20
2    30
3    40
dtype: int64
```
```python
# Series with custom index
data = [10, 20, 30, 40]
index = ['a', 'b', 'c', 'd']
series = pd.Series(data, index=index)
print(series)
- - - - - - - - - - -
a    10
b    20
c    30
d    40
dtype: int64
```

- **DataFrame**: 2-dimensional labeled data structure with columns of potentially different types.
```python
data = { 
	'Name': ['Alice', 'Bob', 'Charlie'], 
	'Age': [25, 30, 35], 
	'City': ['New York', 'Los Angeles', 'Chicago'] } 
df = pd.DataFrame(data)
print(df)
- - - - - - - - - - -
       Name  Age         City
0     Alice   25     New York
1       Bob   30  Los Angeles
2   Charlie   35      Chicago
```
```python
index = ['person1', 'person2', 'person3'] 
df = pd.DataFrame(data, index=index)
print(df)
- - - - - - - - - - -
              Name  Age         City
person1      Alice   25     New York
person2        Bob   30  Los Angeles
person3    Charlie   35      Chicago
```

## Important Functions and Methods

### Series

- `pd.Series(data, index=index)`: Create a Series. Shown above, start with list / lists
- `series.head(n)`: Returns the first `n` elements.
- `series.tail(n)`: Returns the last `n` elements.
- `series.describe()`: Generates descriptive statistics.
- `series.value_counts()`: Returns a Series with counts of unique values.

### DataFrame

- `pd.DataFrame(data, index=index, columns=columns)`: Create a DataFrame.
- `df.head(n)`: Returns the first `n` rows.
- `df.tail(n)`: Returns the last `n` rows.
- `df.describe()`: Generates descriptive statistics.
- `df.info()`: Provides a concise summary of the DataFrame.
- `df.shape`: Returns a tuple representing the dimensionality of the DataFrame.
- `df.columns`: Returns the column labels.
- `df.index`: Returns the row labels.
- `df.dtypes`: Returns the data type of each column


### Quick Indexing
- `df["A"]`: Passing a single label selects a column and return a Series equivalent to df.A. Effectively, plucking a column out of the df. 
- `df[0:3]`: Will slice the rows, in this case returning the first three rows. When using non-index slices `df['viper':'cobra']`, both start and stop are included. 
- `df.loc()` and `df.at()`: Both finding values, use at if only searching for one value.
	- `df.loc["20130102":"20130104", ["A", "B"]]`: Arg 1 is rows, arg 2 is cols. 
	- `df.iloc()` and `df.iat()`: Integer version of loc and at
- Boolean Indexing: Selects if expression is true
	- `df[df["A"] > 0]`: Selects rows where value of A is greater than 0
	- `df[df > 0]`: Returns values of df that are positive.
	- `s.isin([])`: For a series, returns a boolean value depending on if value is in the array-like input. Can invert with the `~` operator. Strings and ints are not comparable. 
		- Usage for indexing: `df2[df2["E"].isin(["two", "four"])]`
```python
s.isin(['cow', 'llama'])
- - - - - - - - - - - 
0     True
1     True
2     True
3    False
4     True
5    False
```

### Data Manipulation

- `df.sort_values(by, ascending=True)`: Sorts DataFrame by values.
- `df.groupby(by)`: Groups DataFrame using a mapper or by a Series of columns.
- `df.merge(right, how='inner', on=None)`: Merges DataFrame with another DataFrame.
- `df.pivot_table(values, index, columns, aggfunc)`: Creates a pivot table.
- `df.apply(func, axis=0)`: Applies a function along an axis of the DataFrame.

### Data Cleaning

- `df.dropna()`: Removes missing values.
- `df.fillna(value)`: Fills NA/NaN values with a specified value.
- `df.replace(to_replace, value)`: Replaces values in DataFrame.

### Data Input/Output

- `pd.read_csv(filepath_or_buffer, sep=',')`: Reads a CSV file into a DataFrame.
- `df.to_csv(path_or_buf, sep=',')`: Writes DataFrame to a CSV file.
- `pd.read_excel(io, sheet_name=0)`: Reads an Excel file into a DataFrame.
- `df.to_excel(excel_writer, sheet_name='Sheet1')`: Writes DataFrame to an Excel file.

## Documentation & Resources

- Official Documentation
- [Pandas GitHub Repository](https://github.com/pandas-dev/pandas)
- Pandas Tutorials & Examples
- Pandas Cheat Sheet

## Common Use Cases

- Data cleaning and preparation
- Exploratory data analysis (EDA)
- Data manipulation and transformation
- Feature engineering
- Data aggregation and summarization
