//selectors
const form= document.getElementsByTagName('form');
const userName= document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const msg_arr= document.querySelectorAll("form .form-control small");

//event handller
document.addEventListener('submit',function(e) {
    e.preventDefault();
    //while changing the name attribute you should also change the value in isvalidate function.
    check(userName,"Username",0);
    check(email,"Email-id",1);
    if(checkBlank(password1,"Password",2)) {
        addSucess(password1.parentNode.parentNode)
    }
    if(checkBlank(password2,"Confirm Password",3)) {
        if(password1.value==password2.value) {
            addSucess(password2.parentNode.parentNode);
        }
        else {
            addError(password2.parentNode.parentNode,msg_arr[3],"Password is not matched");
        }
    }
});

//functions
function check(node,name,i) {
    if (checkBlank(node,name,i)) {
        if(!isvalidate(node.value,name)) {
            addError(node.parentNode.parentNode,msg_arr[i],name+" is not valid");
        }
        else {
            addSucess(node.parentNode.parentNode);
        }
    }
}
function checkBlank(node,name,i) {
    if(node.value=='') {
        addError(node.parentNode.parentNode,msg_arr[i],name+" can not be blank");
        return false;
    }
    return true;
}
function addError(node1,node2,msg) {
    node1.classList.remove('sucess');
    node1.classList.add('error');
    node2.innerHTML=msg;
}
function addSucess(node) {
    node.classList.remove('error');
    node.classList.add('sucess');
}
function isvalidate(value,type) {
    if(type=='Username'){
        return /^([a-z0-9]+$)/.test(value);
    }
    if(type=='Email-id'){
        return /^([a-zA-Z0-9\.\_\-]+)@([a-zA-z0-9]+)\.([a-zA-z]{3})$/.test(value);
    }
}