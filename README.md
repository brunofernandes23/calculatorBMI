*__Calculation BMI (Body Mass Index)__*
>In this practical challenge, certain rules were defined:

1) Create an application to calculate the body mass index.
Consider the following criteria:
1) When executing the application script, it must request the input of the person's name.
2) Next, the application must request that the height of the person in
inches
3) Afterwards, the application must require the person's weight to be informed.
4) After the data roads, pay attention to information engineering for data of the type
float.
5) Convert the desired height to meters. (just divide the height by
100).
6) Internally the application must perform the calculation of the body mass index through
of the expression: M = weight (kilograms) ÷ height²
7) Determine the identification of body mass the system must classify into bands
descriptive using the criteria below:
a) If M is below 16: Very severe underweight
b) If M is between 16 and 16.99: Severely underweight
c) If M is between 17 and 18.49: Low weight
d) If M is between 18.50 and 24.99: Normal weight
e) If M is between 25 and 29.99: Overweight
f) If M is between 30 and 34.99: Grade I obesity
g) If M is between 35 and 39.99: Grade II obesity
h) If M for greater than 40: Grade III obesity
8) At the end of the system, it must provide the following output to the user:
"<Name> has a body mass index equal to <m>, being evaluated as:
<classification>. ”
* Information in red are variables ​​and must be replaced by their respective
values ​​calculated within the application *


*__Resolution__*
> Defined the data entries and calculated the bmi where bmi = weight / (height * height)
> After this treatment, if else was used to meet the conditions and classify the bmi
