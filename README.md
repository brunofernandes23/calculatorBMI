
*__Calculation of BMI (Body Mass Index)__*

> In this practical challenge, some rules were defined:

1) Create an app to calculate body mass index.
Consider the following criteria:
1) When executing the application script, the person's name must be entered.
2) Then the application must ask that the person's height in
inches
3) Next, an application must require that the person's weight be reported.
4) After the data roads, pay attention to information engineering for data type
float.
5) Convert the desired height to meters. (just divide the height by
100).
6) Internally, the application must calculate the body mass index through
of the expression: M = weight (kilograms) ÷ height²
7) Determine the identification of the body mass that the system should classify into bands
descriptive using the criteria below:
a) If M is below 16: very severe underweight
b) If M is between 16 and 16.99: Severely underweight
c) If M is between 17 and 18.49: Low weight
d) If M is between 18.50 and 24.99: Normal weight
e) If M is between 25 and 29.99: Overweight
f) If M is between 30 and 34.99: grade I obesity
g) If M is between 35 and 39.99: grade II obesity
h) If M for greater than 40: grade III obesity
8) At the end of the system, it should provide the following output to the user:
“<Name> has a body mass index equal to <m>, being evaluated as:
<classification>. ”
* Information in red is variable and should be replaced by your best
Values calculated within the app *

*__Resolution__*

> I defined data entry using prompt and calculated bmi, where bmi = weight / (height * height)
> After this treatment, if else was used to meet the conditions and classify the bmi
