container = document.getElementById('container');

let student =
{
  name: "Bjoern",
  age: 20,
  major: "computer science"
}

// console.log(student.name);

function changeRed()
{
  /* for(var i = 0; i < container.length; i ++)
  {
    container[i].style.color = "red";
  } */
  container.style.color = "red";
}
const changeGreen = function ()
{
  container.style.color = "green";
}
const changeBlue = () =>
{
  container.style.color = "Blue";
}
