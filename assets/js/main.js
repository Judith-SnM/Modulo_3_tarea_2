const numVeces = parseInt(prompt("¿Cuántas veces quieres jugar?"));
jugarCachipun(numVeces);

function jugarCachipun(veces) {
    let victoriasusuario = 0;
    let victoriascomputador = 0;

    for (let i = 0; i < veces; i++) {
        const usuario = prompt("Tu debes elegir piedra, papel o tijera:").toLowerCase();
        const computador = ["piedra", "papel", "tijera"][Math.floor(Math.random() * 3)];
        const ganador = cachipun(usuario, computador);

        function cachipun(usuario, computador) {
            if (usuario === computador) {
                alert("empate");
            } else if (usuario === "piedra") {
                if (computador=== "tijera") {
                    alert("ganaste");
                } else {
                    alert("perdiste");
                }
            } else if (usuario === "papel") {
                if (computador === "piedra") {
                    alert("ganaste");
                } else {
                    alert("perdiste");
                }
            } else if (jusuario === "tijera") {
                if (computador === "papel") {
                    alert("ganaste");
                } else {
                    alert("perdiste");
                }
            } else {
                return "Por favor elige piedra, papel o tijera";
            }
        }
        if (ganador === "Usuario") {
            victoriasusuario++;
        } else if (ganador === "computador") {
            victoriascomputador++;
        }
    }
    if (victoriasusuario > victoriascomputador) {
        document.write("Has ganado !!hurra!!");
    } else if (victoriasusuario < victoriascomputador) {
        document.write("lo siento te ha ganado el computador");
    } else {
        document.write("¡¡Empataron!!");
    }
}

