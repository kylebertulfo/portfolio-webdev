const message1 = document.getElementById("message")
const button1 = document.getElementById("button")

const Profile = document.getElementById("profile")
const Grades = document.getElementById("grades")
const Sched = document.getElementById("sched")

button1.addEventListener("click", function(){
    message1.innerHTML = "Loading Dashboard...";

    Profile.innerHTML = "Prodile: Waiting...";
    Grades.innerHTML = "Grades: Waiting...";
    Sched.innerHTML = "Schedule: Wating...";

    const ProfilePromise = new Promise(function(resolve){

        setTimeout(function(){
            Profile.innerHTML = "Profile: Loaded"
            resolve();
        },1000)
    })

const GradesPromise = new Promise(function(resolve){

        setTimeout(function(){
            Grades.innerHTML = "Grade: Loaded"
            resolve();
        },1500)
    })

const SchedPromise = new Promise(function(resolve){

        setTimeout(function(){
            Sched.innerHTML = "Schedule: Loaded"
            resolve();
        },2000)
    })

    Promise.all([ProfilePromise,GradesPromise,SchedPromise])

    .then(function(){
        setTimeout(function(){
            message1.innerHTML = "Dashboard Ready!"
        },1000)
    })
 
})

    




