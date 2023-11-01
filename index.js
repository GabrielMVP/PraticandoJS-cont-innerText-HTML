const titulo = document.getElementById('titulo');

titulo.innerText = "Conteúdo do H1"

console.log(titulo)

const site = document.getElementById('href');

site.innerText = "Link para a Proz"

console.log(site)

const lista = document.getElementById('lista-ordenada');

console.log(lista)

let elementoUl = document.querySelector('ul');

elementoUl.innerHTML = `
<li><a href="https://talentocloud.joyclass.com/app/course/oda?id=97265&courseId=2567&returnUrl=%2Fapp%2Fcourse%3Fid%3D2567%26returnUrl%3D%252Fapp%252Flist%252Ftrail%253FtrailRound%253D209%2526returnUrl%253D%25252Fapp%25252Flist">Conteudo do menu 01</a></li>
<li><a href="https://talentocloud.joyclass.com/app/list">Conteudo do menu 02</a></li>
<li><a href="https://talentocloud.joyclass.com/app/list/trail?trailRound=209&returnUrl=%2Fapp%2Flist">Conteudo do menu 03</a></li>
`