const myVal = process.argv

let ra = [];


ra.push(Number(myVal[2]));
ra.push(Number(myVal[3]));


console.log(ra);

let a = Number(myVal[2]) + Number(myVal[3]);


if (a < 10)
{ 
   console.log(' The given sum is less than 10');
}

else if  ( a>10 && a<100)
{
    console.log('The given sum is greater than 10 but less than 100');
}

else if ( a>100 && a<1000)
{
    console.log('The given sum is greater than 100 but less than 1000')
}
    else
    {
        console.log('The given sum is greater than 1000')
    }
