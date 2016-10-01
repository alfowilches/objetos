
//Crear objeto Animal
var Animal = function(
     //Parameters
     nombre = null,
     numero_patas=4,
     carnivoro=true,
     pelaje=true,
     numero_ojos=2

   ){
        return { //Creacion del objeto
              //Atributes
              numero_patas: numero_patas,
              carnivoro: carnivoro,
              pelaje: pelaje,
              numero_ojos: numero_ojos,
              nombre: nombre,
              //Methods
              comer: function(){
                if(carnivoro){
                  return "carnivoro";
                }else {
                  return "no carnivoro";
                }
              }
          }//return
      };//Animal)()

var jirafa = new Animal("jirafa",4,false,true,2);
console.log(jirafa);
var perro = new Animal("perro");
console.log(perro);

// Crear objeto Pokemon
/*var Pokemon = function(){
    var parent = new Animal();
    var animal_pokemon = Object.create(parent);
    animal_pokemon.tipo = "tipo_pokemon",
    animal_pokemon.poder = "poder_pokemon",
    animal_pokemon.energia = "energia_pokemon",
    animal_pokemon.fuerza = "fuerza_pokemon",
    animal_pokemon.atacar =
    return animal_pokemon;
}*/
