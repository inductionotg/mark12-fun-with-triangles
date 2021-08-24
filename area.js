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

    sum = (input3 + input2 + input1)/2
    console.log("sum is",sum);
    area = (sum*(sum-input1)*(sum-input2)*(sum-input3))**0.5
    arearound = Math.round(area*100)/100;
    output.textContent = "The area of the triangle is: " + arearound;
    styling();

});


