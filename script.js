
const button = document.querySelector(".istriangle-submit");
const output = document.querySelector("#output");
let sum = 0;

function styling()
{
    output.style.color = "green";
    output.style.fontSize="2rem";
    output.style.padding="2rem";
    output.style.textAlign="center";
    output.style.fontColor="red";
    output.style.fontWeight="bold";

}

button.addEventListener('click',function(){
    const input1 = Number(document.querySelector(".angle1").value);
const input2 = Number(document.querySelector(".angle2").value);
const input3 = Number(document.querySelector(".angle3").value);

    sum = input3 + input2 + input1
    console.log("sum is",sum);
    if(sum === 180 && input1 > 0 && input2 > 0 && input3 > 0) 
    {
        output.textContent="The triangle is valid";
        styling();
        
    }
    else
    {
        output.textContent="The triangle is not valid";
        styling();
    }

});