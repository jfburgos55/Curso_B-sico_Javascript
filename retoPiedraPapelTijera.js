var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

function juego(jugador, pc){
    if(jugador != pc){
        if(jugador === piedra && pc === tijera){
            console.log("Jugador gano con "+ piedra)
        }else if(jugador === papel && pc === piedra){
            console.log( "Jugador gano con " + papel)
        }else if(jugador === tijera && pc === papel){
            console.log("Jugador gano con " + tijera)
        }else{
            console.log("Máquina GANO!!")
        }
    }else if(jugador === pc){
        console.log("¡¡Empate!!")
    }
};

juego(piedra,tijera) //el usuario GANO con Piedra```