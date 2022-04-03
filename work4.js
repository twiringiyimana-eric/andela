 setStudentAgeApi = (student, age) => {
 
    return new Promise( (resolve, reject)=> {
        setTimeout(() => {
            student.age = age;
            if(age < 0)
                reject ("Bad Age")
         else
                  resolve(student)
        },
            500);
  
    });
 }
 

 let student = {name:"Eric" }

 setStudentAgeApi(student,10).then(data => console.log(data)).catch(err => console.log(err));