 // Array is like single Variables which can store multiples value

        // Arrey is basket of vagitables

        // 0   1   2   3   4   5   6 index....no.
        // | 0 | 1 | 2 | 3 | 4 | 5 |  arrey boxes

        // syntax of Array

        const student = ["Pavan", "Saurabh", "Mahesh", "Avinash", "Aditya"];
        console.log(student)

        // how to Access individual value
        console.log(student[0])
        console.log(student[1])
        console.log(student[2])
        const laststudent = student[4];
        console.log(laststudent)

        
        // how to change Array value
        console.log(`Array Before changing: ${student}`)

        student[0] = "Pavanraj";
        console.log(`Array After changing: ${student}`)

   

        // how to fill Empty Array

        const stud = [];
        stud[0] = "Harsh";
        stud[1] = "Saurabh";
        stud[2] = "Jyoti";
        stud[3] = "Payal";
        stud[4] = "Komal";
        stud[5] = "Kalyani";

        console.log(`${stud}`)
     