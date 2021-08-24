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
    
    area = Math.sqrt(input1**2+input2**2);
    arearound = Math.round(area*100)/100;
    output.textContent = "The area of the triangle is: " + arearound;
    styling();

});


