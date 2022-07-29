var Firstname=label("label","for","Firstname","Firstname");
var br1=linebreak("br")
var inputFirstname=inputfield("input","type","Firstname","id","Firstname");
var br2=linebreak("br");

var Lastname=label("label","for","Lastname","Lastname");
var br3=linebreak("br")
var inputLastname=inputfield("input","type","Lastname","id","Lastname");
var br4=linebreak("br");

var Email=label("label","for","Email","Email");
var br5=linebreak("br")
var inputEmail=inputfield("input","type","Email","id","Email");
var br6=linebreak("br");

var Phonenumber=label("label","for","Phonenumber","Phonenumber");
var br7=linebreak("br")
var inputPhonenumber=inputfield("input","type","Phonenumber","id","Phonenumber");
var br8=linebreak("br");

var button=label("button","type","button","Click me");

document.body.append(Firstname,br1,inputFirstname,br2,Lastname,br3,inputLastname,br4,Email,br5,inputEmail,br6,Phonenumber,br7,inputPhonenumber,br8,button);

function label(tagname,attrname,attrvalue,content){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    element.innerHTML=content;
    return element;
}

function inputfield(tagname,attrname,attrvalue,attrname1,attrvalue1){
var input=document.createElement(tagname);
input.setAttribute(attrname,attrvalue);
input.setAttribute(attrname1,attrvalue1);
return input;
}

function linebreak(breaker){
    var b1=document.createElement(breaker);
    return b1;
}
