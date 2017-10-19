function clock()
{
	var dzisiaj = new Date();
	
	var godzina = dzisiaj.getHours();
	var minuta = dzisiaj.getMinutes();
	var sekunda = dzisiaj.getSeconds();
	
	zeruj();
	podziel(godzina, "G");
	podziel(minuta, "M");
	podziel(sekunda, "S");
	
	if (sekunda<10) sekunda = "0" + sekunda;
	if (minuta<10) minuta = "0" + minuta;
	if (godzina<10) godzina = "0" + godzina;
	
	document.getElementById("zegar").innerHTML=godzina+":"+minuta+":"+sekunda;
	
	setTimeout("clock()",1000);
}

function podziel(zmienna, co2)
{
	var a, b;
	
	if (zmienna>9)						//dzieli liczbe na dziesiatki i jednostki
	{
		b=zmienna%10;		//jednosci
		a=zmienna-b;
		a=a/10				//dziesiatki
		
		wstaw(a, co2+co2);		
		wstaw(b, co2);
	}
	else
	{
		a=0;
		b=zmienna;
		wstaw(b, co2);
	}
}

function zeruj()						//zeruje caly zegar
{
	var temp = ['G', 'M', 'S'];
	
	for(i=0;i<4;i++)
		for(j=0; j<3; j++)
		{
			document.getElementById(temp[j]+i).style.backgroundImage="";
			if(i<3 && j!=0)
				document.getElementById(temp[j]+temp[j]+i).style.backgroundImage="";
			if(i<2 && j==0)
				document.getElementById(temp[j]+temp[j]+i).style.backgroundImage="";
		}	
}

function wstaw(liczba, co)
{
	var j;
	
	if(co=="G" || co=="M" || co=="S") j=4;
	if(co=="GG") j=2;
	if(co=="MM" || co=="SS") j=3;
	
	for(i=0; i<j; i++)
	{
		if(liczba%2==1)
		{
			document.getElementById(co+i).style.backgroundImage="url('ball.png')";
			liczba=liczba/2;
			liczba=liczba-0.5;
		} else liczba=liczba/2;
	}
}