// {{
  // const studentList = ["Ices", "Pawan", "Paudyal"];
  
  
  // for (let i = 0; i < 10; i++) {
  //   console.log(i);
  // }
  
  // do{
  //     console.log("i");
  // i++;
  // } while (i < 10);
  // lei i=1;
  // while(i==1){
  // }
  
  
  
  //Array Methods
  // 1.push
  // 2.pap
  // 3.shift
  // 4.unshift
  
  
  //Replacing values in array
//   const studentList = ["Ices", "Pawan", "Paudyal", "bishal", "sujan", "sabin", "sagar", "sushil", "santosh", "sandeep"];
  
//   console.log("Initial:", studentList);
//   studentList.push("sabin");
//   console.log("push:", studentList);
  
//   studentList[2]="sabin";
//   console.log("Replace:", studentList);
  
  //Map 
//   map
//   const newStudentList = studentList.map((student)=>{
//       return student + "WRC";
//   });
//   console.log("Map:", newStudentList);
// }}



// function mapvalue(value,index) {
// //opreation 
// }


// mapsvalue("ramesh",0);;
// mapvalue("sabin",1);
// mapvalue("sagar",2);


// Other methods 
// 1. foreach 
// 2. map
// 3. filter
// 4. reduce

// Finding Even Numbers from 1 to 10 using filter method
 /*const evennumbers = [1,2,3,4,5,6,7,8,9,10].filter((value)=>{
    return value%2==0;
})
    console.log(evennumbers);
*/
    // Finding Odd Numbers from 1 to 10 using filter method
/* const oddnumbers = [1,2,3,4,5,6,7,8,9,10].filter((value)=>{
    return value%2!=0;
})
console.log(oddnumbers);*/


// Object 
const student = {
    name: "Pawan", //attributes 
    age: 20,
    email: "pawanpaudyal3@gmail.com",
    phone: 9841234567,

    greet: function() {
        console.log(`Hello ${student.name}, Welcome to WRC!`); 
    } //method
}; 
student.greet();
console.log(student.name); 
