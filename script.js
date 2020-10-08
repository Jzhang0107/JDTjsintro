container = document.getElementsByClassName("container");

let student =
{
  name: "Bjoern",
  age: 20,
  major: "computer science"
}

console.log(student.major);

function changeRed()
{
  for(var i = 0; i < container.length; i ++)
  {
    container[i].style.color = "red";
  }
}
const changeGreen = function ()
{
  for(var i = 0; i < container.length; i ++)
  {
    container[i].style.color = "green";
  }
}
const changeBlue = () =>
{
  for(var i = 0; i < container.length; i ++)
  {
    container[i].style.color = "blue";
  }
}
