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
    

})

function busca1(lista){
    var busca = document.querySelector('#buscar')
    busca.addEventListener('click',()=>{
        center_dados()
    })
    document.addEventListener('keypress',(event)=>{
        console.log(event.charCode)
        if(event.charCode===13){
            center_dados()
        }
    })  

    function center_dados(){
        var nome = document.querySelector("#input_busca")
        console.log("<>>>>>>>>>>",nome)
        if (nome.value!==''){
            lista_dos_nomes = lista.filter((item)=>{
                return item.name.first.toUpperCase().includes(nome.value.toUpperCase())            
            });
            montar_lista_nomes(lista_dos_nomes)
            montar_estatisticas(lista_dos_nomes)
            calculo_media(lista_dos_nomes)
        }else{
            limpar()
        }
    }


    function montar_lista_nomes(lista){
        console.log(lista)
        limpar()
        lista.map((lista)=>{
            document.querySelector("#nomes").innerHTML += `
            <li>
                <p>${lista.name.first} ${lista.name.last}  <img src="${lista.picture.medium}"></p>
           </li>
            `
        })
        label_usuarios(lista.length)
 
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
        const soma_idades = lista.reduce((accumulator, currentValue)=>{
            return accumulator + (currentValue.dob.age)
        },0)
        console.log("teste",soma_idades)
        document.querySelector("#soma_idades").innerHTML = soma_idades

        return soma_idades
    }
    function calculo_media(lista){
        let soma_idades = somas_idades(lista_dos_nomes)
        document.querySelector("#medias_idades").innerHTML = ((soma_idades/lista.length).toFixed(2))
        
    }
    function limpar(){
        document.querySelector("#medias_idades").innerHTML = 0
        document.querySelector("#soma_idades").innerHTML = 0
        document.querySelector("#sexo_masculino").innerHTML = 0
        document.querySelector("#sexo_feminino").innerHTML = 0
        document.querySelector("#nomes").innerHTML = ""
        label_usuarios(0)

    }
    function label_usuarios(numero){
        document.querySelector("#usuarios").innerHTML = `
            ${numero} usuáiros encontrados
        `
        
    }
}