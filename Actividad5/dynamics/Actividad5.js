var into = prompt("Introduce texo :D ");
let hacker = /(<script>.*)(equisde.*){5,}/i;
let fbi = /(<script>.*)|(equisde.*){5,}/i;
console.log(into.match(hacker));
if (into.match(hacker)!=null)
{
  alert("Oso oso mentiroso, vete lejos antes de que te lanze mis calcetines olor a queso.");
}
else if (into.match(fbi)!=null)
{
  alert("¿Bob? \n ¿Wade?");
}
