let gradepoints = prompt("Enter your grade points: ");
if(gradepoints>=90 && gradepoints<=100)
{
    console.log("Grade A");
}
else if(gradepoints>=80 && gradepoints<90)
{
    console.log("Grade B");
}
else if(gradepoints>=70 && gradepoints<80)
{
    console.log("Grade C");
}  
else if(gradepoints>=60 && gradepoints<70)
{
    console.log("Grade D");
}
else if(gradepoints>=50 && gradepoints<60)
{
    console.log("Grade E");
}   
else if(gradepoints>=0 && gradepoints<50)
{
    console.log("Grade F");
}   
else
{
    console.log("Invalid grade points");
}
