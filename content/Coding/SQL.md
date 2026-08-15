---
created:
  - " 08-05-2026 21:41"
tags:
---

## SQL Cheat Sheet

I'll use this mostly to refresh before an interview

There are 3 types of SQL categories:
Structured Query Langauge (SQL) includes:
- *DQL* (Data Query Language). DQL is the most tested, and what most of these notes are on.
- *DDL* (Data Definition Language). This is about defining tables/structure. (CREATE/ALTER/DROP TABLE)
- *DML* (Data Manipulation Language). This is about writing/changing data. (INSERT INTO/UPDATE/DELETE FROM)

### Syntax
Keywords are traditionally ALL CAPS: 
**Full clause order:** `SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT;`
**Execution order:** `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT`
#### Core
**Core order:** `SELECT → FROM → WHERE;`
*SELECT* - What columns do you want (name, salary)
- Also has globbing for "all columns" (`*`). 
*FROM* - What tables you're pulling from (employees)
*WHERE* - Conditional operators
- Includes: ` =, != (same as <>), >, <,  >=, <=`
- Also includes booleans: `AND, OR` - `department = 'Engineering' AND salary > 90000;`
- Nulls: `IS NULL` - `WHERE manager_id IS NULL;`
*ORDER BY* - Sorting
- Operators: `DESC` (h to l) and `ASC` (l to h) - `FROM employees ORDER BY salary DESC;`
- Can order by multiple things: `ORDER BY a, b;` Will sort by a, and on ties evaluate b

##### AS - Aliasing
*AS* - Aliasing. 
```sql
SELECT name AS employee_name, salary AS pay
FROM employees AS e;
```

##### DISTINCT - Dedupe
*DISTINCT* - Dedupe. `SELECT DISTINCT department FROM employees;`

##### Aggregators
*COUNT* 
- `COUNT(*)` gives number of rows, `COUNT(column)` gives number of non-null vals in col
*SUM* / *AVG* / *MIN* / *MAX* - Do as expected on a column

#### Additional WHERE (filtering) tools
*IN* - `WHERE department IN ('Sales', 'Marketing');`
*BETWEEN* - `WHERE salary BETWEEN 60000 AND 90000;`
*LIKE* - `WHERE name LIKE 'A%';   -- starts with A`

#### Buckets
*GROUP BY* - Aggregates per bucket
```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```
- Reads as: "bucket rows by department, then compute AVG(salary) within each bucket."
- Can also group by multiple things to avoid when referencing them above: `GROUP BY a, b;`
#### HAVING - filter after aggregation
*HAVING* - Filters rows after aggregating. The expression below is impossible with WHERE.
```sql
SELECT department, AVG(salary) AS avg_sal
FROM employees
GROUP BY department
HAVING AVG(salary) > 70000;
```

#### JOINS
> We'll use tables: *departments*{id, name} and *employees*{name, department_id}. 

Types of joins:
1) Core: INNER / LEFT / SELF
2) Rare: FULL OUTER / CROSS
3) Unnecessary: RIGHT (its just left but flipped. People tend to just learn left and mirror results)
##### INNER JOIN - Matching in both tables
```sql
SELECT e.name, d.name AS department
FROM employees e
JOIN departments d ON e.department_id = d.id;
```
**JOIN** alone is an inner join. 
INNER joins combine rows that match in both tables
##### LEFT JOIN - All rows from left, matching in right
```sql
SELECT e.name, d.name AS department
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;
```
This returns all rows from left tables (even employees with no department) and matched rows from right
- If no matches, then NULL
##### SELF JOIN - A table joined to itself
Not a 'real' join between two different tables, but can simplify queries
```sql
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```
- Note that we use left join, SELF JOIN is not a keyword
##### FULL OUTER JOIN - Everything from both sides
Matches from both sides where possible, NULLs where not

##### CROSS JOIN - Creates a display table, rarely useful
Creates a cartesian product between every row of the first table and every row of the second table
- rarely useful outside generating combinations/test grids

#### Subqueries
##### Default
```sql
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```
The inner query returns first, returns a value that is used by outer query

##### CTEs (Common Table Expressions)
These are just named subqueries, defined for readability
```sql
WITH dept_avg AS (
  SELECT department_id, AVG(salary) AS avg_sal
  FROM employees
  GROUP BY department_id
)
SELECT e.name, e.salary, d.avg_sal
FROM employees e
JOIN dept_avg d ON e.department_id = d.department_id
WHERE e.salary > d.avg_sal;
```

#### Window Functions
Allows for applying aggregator functions controllably

```sql
SELECT column_name1, 
       window_function(column_name2) 
       OVER ([PARTITION BY column_name3] [ORDER BY column_name4]) AS new_column
FROM table_name;
```
window_function - Aggregate or ranking function. SUM/AVG/ROW_NUMBER/RANK
PARTITION - same as group by, bucketing
##### Ranking
*ROW_NUMBER* - Unique serial number, no ties
*RANK* - Ties get the same rank, then skip (1,1,3)
*DENSE_RANK* - Ties get same rank, no skips (1,1,2)
*LAG/LEAD* - previous/next rows value (time series comparisons)

#### UNION
Combining results of select queries vertically. Must have identical columns (same names, order, number)
*UNION* - Combines rows and removes duplicates (implicit DISTINCT across result)
*UNION ALL* - UNION but keeps duplicates

#### Scalar Functions
These functions operate per-row, can modify input
##### String functions
*LENGTH(str)* - character count
*SUBSTRING(str, start, len)* - extract portion. Also LEFT(str, n) / RIGHT(str, n)
*CONCAT(a, b)* - join strings. SQLite/Postgres also support `a || b`
*UPPER(str)* / *LOWER(str)* - case conversion
*TRIM(str)* - strip leading/trailing whitespace
*REPLACE(str, old, new)* - substring replacement
*POSITION(substr IN str)* - index of substring. MySQL/SQLite: INSTR(str, substr)
##### Numeric functions
*ROUND(val, decimals)*
*CEIL(val)* / *FLOOR(val)*
*ABS(val)*
*MOD(a, b)* - remainder, also `a % b`
##### Date functions
*YEAR(date)* / *MONTH(date)* / *DAY(date)*
*DATEDIFF(date1, date2)* - difference between dates
*CURDATE()* / *CURRENT_DATE* - today
##### Conditional / NULL-handling
*CASE WHEN ... THEN ... ELSE ... END* - inline if/else logic
```sql
SELECT name,
  CASE WHEN salary > 80000 THEN 'High' ELSE 'Standard' END AS pay_tier
FROM employees;
```
*COALESCE(col, default)* - returns first non-null value, common NULL-handling pattern