function student(name, branch, cgpa) {
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}
function studentDefault(name, branch, cgpa) {
    if (name === void 0) { name = "ravi"; }
    if (branch === void 0) { branch = "cse"; }
    if (cgpa === void 0) { cgpa = 95; }
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}
function studentDetails(name, rollno, sgpa) {
    console.log("student name:" + name);
    console.log("student rollno:" + rollno);
    console.log("student sgpa:" + sgpa);
}
function studentMarks(l) {
    var i;
    var sum = 0;
    var avg;
    for (i = 0; i < l.length; i++) {
        sum += l[i];
    }
    console.log("total marks:" + sum);
    console.log("average marks:" + (sum / l.length));
}
student("dinesh", "cse", 89);
studentDefault();
studentDetails("varni", "cse", 85);
studentMarks([94, 97, 99, 66, 89, 85]);
studentDetails("sandeep", "512", 80);
studentMarks([100, 67, 83, 76, 98]);
