window.addEventListener("load", function(event) {  
    fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo').then(function(res){ 
        res.json().then(function(data){
            const lista = data.results

            busca1(lista)

        })
      })
      .catch(function(err){
        console.error('Não foi possível achar a informação', err)
      })
    
    console.log("gustavo") 
})

function busca1(lista){
    var busca = document.querySelector('#buscar')
    busca.addEventListener('click',()=>{
        //lista.map((e)=>{
        //    var nome = document.querySelector("#input_busca")
        //    if(e.name.first.toUpperCase().includes(nome.value.toUpperCase())){
        //        console.log("dd",e)
        //        montar_lista_nomes(e)
        //        montar_estatisticas(e)
        //    }
        //})
        var nome = document.querySelector("#input_busca")
        lista_dos_nomes = lista.filter((item)=>{
            return item.name.first.toUpperCase().includes(nome.value.toUpperCase())            
        });
        montar_lista_nomes(lista_dos_nomes)
        montar_estatisticas(lista_dos_nomes)
        somas_idades(lista_dos_nomes)


    })
    document.addEventListener('keypress',(event)=>{
        //lista.map((e)=>{
        //    var nome = document.querySelector("#input_busca")
        //    if(e.name.first.toUpperCase().includes(nome.value.toUpperCase())){
        //        console.log(e,)
        //    }
        //})
        if(event.charCode){}
        console.log(event.charCode)
    })  

    function montar_lista_nomes(lista){
        console.log(lista)
        lista.map((lista)=>{
            document.querySelector("#nomes").innerHTML += `
            <li>
                <p>${lista.name.first} ${lista.name.last}  <img src="${lista.picture.medium}"></p>
           </li>
            `
        })
 
    }
    function montar_estatisticas(lista){
        homens = lista.filter((lista)=>{
            return lista.gender==='male'
        })
        mulheres = lista.filter((lista)=>{
            return lista.gender==='female'
        })

         
        document.querySelector("#sexo_masculino").innerHTML = homens.length
        document.querySelector("#sexo_feminino").innerHTML = mulheres.length
    }

    function somas_idades(lista){


// 1 + 2 + 3 + 4
        lista.reduce((accumulator, currentValue)=> accumulator + currentValue)
// expected output: 10
    }
}