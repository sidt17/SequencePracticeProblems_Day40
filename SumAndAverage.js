//UC-4

let totalrandomnumbers=5;
let TotalSum=0;
for(i=0;i<totalrandomnumbers;i++)
{
 let twodigitnumber = Math.floor(Math.random() *100);

 TotalSum =TotalSum+twodigitnumber;
}
let average = TotalSum/5;
console.log("The sum of 5 random two digit number is :" + TotalSum);
console.log("The average of 5 random two digit number is :" + average);
