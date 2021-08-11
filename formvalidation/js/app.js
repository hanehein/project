//UI
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cfmpassword = document.getElementById('cfmpassword')

// // Event Listener 1
//     form.addEventListener('submit', function(e){
//         e.preventDefault(); //refresh ma phyit ag
//         // console.log('hay');



//     if(username.value === ''){
//         showerror(username,'Username is required');
//     }else{
//         showsuccess(username);
//     }

//     if(email.value === ''){
//         showerror(email, 'Email is required');
//     }else if(!validateEmail(email.value)){
//         showerror(email,'Email is not valid')
//     // Regular Expression ma par yin error pya ag
//     }else{
//         showsuccess(email);
//     }

//     if(password.value === ''){
//         showerror(password, 'Password is required');
//     }else{
//         showsuccess(password);
//     }

//     if(cfmpassword.value === ''){
//         showerror(cfmpassword, 'Comfirm Password is required');
//     }else if(password.value !== cfmpassword.value){
//         showerror(cfmpassword, 'Password do not match')
//     }else{
//         showsuccess(cfmpassword);
//     }
// });



    function showerror(input,message){ 
        const formcontrol = input.parentElement;
        formcontrol.className = "form-control error";

        const small = formcontrol.querySelector('small')
        // const small = document.querySelector('small');
        //document so yin 1 khu lone yae a paw sone ka small ko pl select
        small.innerText = message; 
        //small tag htal ka error message ko change
    }

    function showsuccess(input){
        const formcontrol = input.parentElement;
        formcontrol.className = "form-control success";
        // formcontrol.classlist.add('success');
        // formcontrol.classlist.remove('error');
        // comment pate htr tae a tine ll yay ya dl
    }

// For Checking email format (Regular Expression)
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }



// Check Required Field
    function checkrequired(inputarrs){
    // console.log(inputarrs);

    inputarrs.forEach(function(inputarr){
        // console.log(inputarr);
        // console.log(inputarr.value);
        // console.log(inputarr.id);
        if(inputarr.value === ''){
            showerror(inputarr,`${getfieldname(inputarr)} is required`);
        }else{
            showsuccess(inputarr);
        }
    })
}

// Check Input Length
    function checklength(input,min,max){
        if(input.value.length < min){
            showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
        }else if(input.value.length > max){
            showerror(input, `${getfieldname(input)} must be less than ${max} characters`);
        }else{
            showsuccess(input);
        }
    }

// Get Field Name
    function getfieldname(inputarr){
        return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
    }

// Check email is valid
    function checkemail(input){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // return re.test(String(email).toLowerCase());
            if(re.test(input.value)){
                showsuccess(input);
            }else{
                showerror(input,'Email is not valid');
            }
    }

// Check Passwords Match
    function checkpasswordmatch(input1,input2){
        if(input1.value !== input2.value){
            showerror(input2, 'Password do not match')
        }
    }

//Event Listener (Method 2)
form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log('hey');

    checkrequired([username,email,password,cfmpassword])
                    // [] dr lay ka array
    checklength(username,3,15);
    checklength(password,6,25);

    checkemail(email);

    checkpasswordmatch(password,cfmpassword);
});