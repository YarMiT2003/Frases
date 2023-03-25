function frases()
{
// Arreglo de opciones
var frase = [
    "No vivas con falsedades ni miedos, porque terminarás odiándote a ti mismo - Uzumaki Naruto. ",
    "¡Un héroe es alguien que supera cada obstáculo que la vida pone en su camino! - My Hero Academia. ",
    " Eres un ser increíble, diste lo mejor de ti y por eso te admiro. Pasaste por varias transformaciones, fuiste tan poderoso que todos nosotros te odiamos - Goku",
    "Levántate y camina hacia adelante, tienes las piernas para hacerlo - Edward Elric",
    "Los sueños comienzan cuando se cree en ellos - Suzumiya Haruhi",
    "Lo importante no es lo que los demás piensen de ti, sino cómo te sientes por ellos - Meliodas",
    "Puede que haya perdido todo, pero jamás dejaré de pelear por lo que creo - Goku",
    "Miedo. Eso es lo que vivimos. Y lo vivimos todos los días. Solo en la muerte estamos libres del miedo - Neji Hyuuga",
    "El futuro se construye con pequeñas nociones del día a día - Doraemon",
    "Solo considera el sufrimiento como otra parte de tu entrenamiento y mantente trabajando duro, muchacho - Klein",]

// Seleccionar una opción aleatoria
var opcionSeleccionada = frase[Math.floor(Math.random() * frase.length)];

// Imprimir la opción seleccionada
alert(opcionSeleccionada);
console.log(opcionSeleccionada);
}