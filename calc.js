//to view content inside result whenever we click on the button
function displayNum(num)
{
result.value += num
}
function allclear(){
    result.value = " "
}
function evalexp() {
    result.value=eval(result.value)
}
function lastdigit(){
    result.value=result.value.slice(0,-1)
}