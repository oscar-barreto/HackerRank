let grades = [ 73,67,38,33];

function gradingStudents(grades) {
  for(let i =0; i < grades.length; i++){
  let count =0;
  if(grades[i] % 5 !==0){
    while(grades[i] % 5!==0 && grades[i]%5 >=3){
      grades[i]++;
      count++;
    };
    if(grades[i]<40){
      console.log(count);
      console.log(grades[i]);
       grades[i] = grades[i]-count;
    }
  }

}
  
  return grades;
}
gradingStudents(grades);
console.log(grades);