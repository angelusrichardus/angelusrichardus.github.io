let boton = document.getElementById('gamma');
let respuesta = document.getElementById('respuesta');
let respuesta2 = document.getElementById('respuesta2');

boton.addEventListener('click',Distribucion);

function Gamma(a){
    const e = 2.718281828;
    var k = 0;
    for(i=0; i<=1000; i++){
      x = i*(4*a/1000)
      k+=x**(a-1)*e**(-x)*(4*a/1000)
    }
    return k;
    };

   function Distribucion(){
   let a=parseFloat(document.getElementById('a').value);
   let b=parseFloat(document.getElementById('b').value);
   let  x=parseFloat(document.getElementById('x').value);

       aux=Gamma(a)
       const e = 2.718281828;
        var q=0;
        var p=0;

        p = 1/(b**a*aux)*x**(a-1)*e**(-x/b)

        for(i=0; i<=1000; i++){
           l=i*(x/1000)
          q+=(1/(b**a*aux)*l**(a-1)*e**(-l/b))*(x/1000)
        }

        respuesta.innerHTML=`f(x)= ${p}`;
        respuesta2.innerHTML=`F(x)=${q}`;
        

        var numeros=[];
        var numeros2=[];
        for(i=0; i<=10000; i++){
            numeros[i]=i*0.1
            }
            for(i=0; i<=10000; i++){
            numeros2[i]=1/(b**a*aux)*numeros[i]**(a-1)*e**(-numeros[i]/b)
            }
            var trace1 = {
                x: numeros,
                y: numeros2,
                mode: 'lines',
                connectgaps: true
              };
              var data = [trace1];
              Plotly.newPlot('myDiv', data);
    };




