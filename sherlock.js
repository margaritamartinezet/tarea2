//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
//Input Example

//_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------

console.log(_INPUT);	//Imprimir Input
_INPUT = _INPUT.split("\n");
T= _INPUT[0];
console.log("Los resultados son");
i=0;
z=0;	
for (i=1; i<=T; i++)
{
	range = _INPUT[i];
	rango = range.split(" ");
	z=0;
	
	//if(1 <= rango[0] && rango[0] <= rango[1] && rango[1] <= 1000000000)
	{
		for(k = rango[0]; k <= rango[1]; k++){
			num = Math.sqrt(k); // saca la raíz cuadrada
			num = num%1; // % operador module
			
			if(num==0)
			{
				z = (z+1);
			}
			//console.log ("hola");
		} 
	
	}
	console.log(z);
	}
 //console.log("");
