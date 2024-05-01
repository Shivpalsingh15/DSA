// Q 1 Print "Masai School" in the console followed by "A Transformation in Education" in next line

// console.log("Masai School \nA Transformation in Education")

// ===========================================================================================================================================

// Q 2 Define a variable called name with your Name as the assigned value
// Print the value stored in the variable name
// Change the variable to store your father's name
// Print the value stored in the variable name
// Change the variable again to store your mother's name.
// Print the value stored in the variable name


// let name = 'Shivpal';
// console.log('name:', name)
// name = "Uday Singh Chauhan"
// console.log('name:', name)
// name = "Sundar bai Singh Chauhan"
// console.log('name:', name)

// ===========================================================================================================================================


// Q.3 Create a variable name to store your name
// Create a variable age to store your age
// Print the values stored in the variable on one line followed by the type of the variable in the next line


// let Myname = "Shivpal";
// let age = 23;
// console.log('Myname:', Myname, 'age:', age)
// console.log(typeof(Myname), typeof(age))


// ===========================================================================================================================================


// Q.4  cubeOfNumber

// function cubeOfNumber(N) {
//     console.log(N*N*N)
// }

// cubeOfNumber(2)


// ===========================================================================================================================================

// Q.5  squareAndSum

// function squareAndSum(one, two, three) {
//     let sum = one*one + two*two + three*three;
//     console.log(sum);
//   }


//   squareAndSum(2, 4, 6)
// ===========================================================================================================================================

// Q.6 updateAndCompare


// function updateAndCompare(num1, num2, num3) {
    //     if(num1 > num2 ){
        //         console.log(true)
        //     }else{
            //         console.log(false)
            //     }
            //     // let ans = num1+num3
            //     if((num1+num3) > num2 ){
                //         console.log(true)
                //     }else{
                    //         console.log(false)
                    //     }
                    
// }


// updateAndCompare(3, 4, 5)


// ===========================================================================================================================================


// Q.7 areaofrectangel

// function areaofrectangel(L, B){
//     console.log(L*B);
// }

// areaofrectangel(10, 12)


// ===========================================================================================================================================
// Q.8 perimeterofrectangel

// function perimeterofrectangel(L, B){
//     console.log(2*(L+B));
// }

// perimeterofrectangel(10, 12)
// ===========================================================================================================================================


// Q.9 given stored username and password and input username and password, Print if the user can login or not.

let  username = "Shivpal Singh";
let  password = "ShivSingh123456";

function loginOrnot(login_username, login_password){
    if(login_username==username && login_password==password){
        console.log("Login");
    }else{
        
        console.log("not");
    }
}

loginOrnot("Shivpal Singh", "ShivSingh123456")

