
let Ns = [];
let N = 1;
let jeunes = 0;
let adultes = 0;
let âgées = 0;

while (true) 
{
  N = parseInt(prompt('Ecrire un âge'));
  console.log("Nombre :"+N+" n° "+Ns.length);

  if (N<20)
  {
    jeunes++;
  }
  else if (N>= 20 && N<=40)
  {
    adultes++;
  }
  else if (N>40 && N<100)
  {
    âgées++;
  }
  else if (N >= 100)
  {
    âgées++;
    break;
  } 
  else 
  {
      Ns.push(N);
  }
}


console.table(Ns);

console.log("il y a "+jeunes+" personnes âgées de moins de 20 ans");
console.log("il y a "+adultes+" personnes âgées de plus de 20 ans et moins de 40 ans");
console.log("il y a "+âgées+" personnes âgées de plus de 40 ans");



// function triTab(Ns)
// {
//     for (i = 0; i < Ns.length; i++) 
//     { 
//         for (let j = 0; j < (Ns.length - i - 1); j++) 
//         { 
//             if (Ns[j] > Ns[j + 1]) 
//             {
//                 let tmp = Ns[j]; 
//                 Ns[j] = Ns[j + 1]; 
//                 Ns[j + 1] = tmp; 
//             }
//         }        
//     }
//     return Ns;
// }

// triTab(Ns);

// console.table(Ns);


