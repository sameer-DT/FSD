function register(){
    let fname=document.forms["ExcelRForm"]["fname"].value;
    let arr1=[];
    if(/^$/.test(fname)){
        arr1.push("First Name Cant left Blank");
    }else if(!/^[A-Z0-9a-z$_]{4,6}$/.test(fname)){
        arr1.push("Please Follow rules and regulations");
    }
    document.getElementById("fname_err").innerHTML=arr1.join(",");

    let lname=document.forms["ExcelRForm"]["lname"].value;
    let arr2=[];
    if(/^$/.test(lname)){
        arr2.push("Last Name Cant left Blank");
    }else if(!/^[A-Z0-9a-z$_]{4,6}$/.test(lname)){
        arr2.push("Please Follow rules and regulations");
    }
    document.getElementById("lname_err").innerHTML=arr2.join(",");

    let pwd=document.forms["ExcelRForm"]["pwd"].value;
    let arr3=[];
    if(/^$/.test(pwd)){
        arr3.push("Password Cant left Blank");
    }else if(!/(?=.*[0-9])(?=.*[!@#$%^&])(?=.*[A-Z])(?=.*[a-z]).{6,15}/.test(pwd)){
        arr3.push("Please Follow rules and regulations");
    }
    document.getElementById("pwd_err").innerHTML=arr3.join(",");

    let cpwd=document.forms["ExcelRForm"]["cpwd"].value;
    let arr4=[];
    if(/^$/.test(cpwd)){
        arr4.push("Confirm Password Cant left Blank");
    }else if(pwd!=cpwd){
        arr4.push("Password and Confirm password should be same !!!");
    }
    document.getElementById("cpwd_err").innerHTML=arr4.join(",");


    let mail=document.forms["ExcelRForm"]["email"].value;
    let arr5=[];
    if(/^$/.test(mail)){
        arr5.push("Email ID Cant left Blank");
    }else if(!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)){
        arr5.push("Please follow the email format rule");
    }
    document.getElementById("email_err").innerHTML=arr5.join(",");

    let mobile=document.forms["ExcelRForm"]["mobile"].value;
    let arr6=[];
    if(/^$/.test(mobile)){
        arr6.push("Mobile Number Cant left Blank");
    }else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(mobile)){
        arr6.push("Please follow the Mobile Number format rule");
    }
    document.getElementById("mobile_err").innerHTML=arr6.join(",");


    let gender=document.forms["ExcelRForm"]["gender"].value;
    let arr7=[];
    if(/^$/.test(gender)){
        arr7.push("Gender Must be selected");
    }
    // else if(!/^(male|female|non-binary|other)?$/i.test(gender)){
    //     arr7.push("Please select Your Gender");
    // }
    document.getElementById("gender_err").innerHTML=arr7.join(",");


    let interest=document.forms["ExcelRForm"]["interest"].value;
    let arr8=[];
    if(/^$/.test(interest)){
        arr8.push("Atleast one must be selected");
    }
    document.getElementById("interest_err").innerHTML=arr8.join(",");
    
    return false

    
}