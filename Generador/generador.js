let lista=document.getElementById("listapokemon")

            function consultarpokemon(id,num){
                fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(function(response){
                    response.json()
                    .then(function(pokemon){
                        crearpokemon(pokemon,num)
                    })
    
                })
            }
    
            function consultarpokemones(){
                let primerId=Math.round(Math.random()*150)
                let segundoId=Math.round(Math.random()*150)
                consultarpokemon(primerId,1)
                consultarpokemon(segundoId,2)
            }
            function crearpokemon(pokemon,num){
                let item = lista.querySelector(`#pokemon-${num}`)
                let imagen = item.getElementsByTagName("img")[0]
                imagen.setAttribute("src",pokemon.sprites.front_default)
    
                let nombre = item.getElementsByTagName("p")[0]
                nombre.textContent=pokemon.name
            }
            consultarpokemones()