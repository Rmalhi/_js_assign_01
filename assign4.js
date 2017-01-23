const myVal=process.argv;
 
 let arry1 = [];
 let mealcost=arry1.push(Number(myVal[2]));
 let tipPercent=arry1.push(Number(myVal[3]));
 const tipAmount = (Number(myVal[3])/100) * Number(myVal[2])
 
 const TotalSalary = tipAmount + Number(myVal[2])
 const output = `Your Meal is $${Number(myVal[2])} + $${tipAmount} = $${TotalSalary}`
 
 
 console.log(output)