var prim = new Array ();
var num = prompt("Introduce un número");
num = parseInt(num);
for (i=2; i<=num; i++)
{
  var sPrim=true
  for (j=2; j<=i-1; j++)
  {
    if (i%j==0)
    {
      sPrim=false;
    }
  }
  if (sPrim)
  {
    prim.push(i);
  }
}
console.log(prim);
//console.log(prim.sort());
