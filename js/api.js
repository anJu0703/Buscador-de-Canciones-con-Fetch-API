import * as UI from './interfaz.js';

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    };
    
    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado =>{
                
                if (resultado.lyrics) {
                    //Destructuring
                    const {lyrics} = resultado;

                    //Insertando en el HTML
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;  
                }else{
                    //Mensaje de error
                    UI.divMensajes.textContent = 'La cancion no existe';
                    UI.divMensajes.classList.add('error');

                    //Limpiar HTML
                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                };
            });
    };
};

export default API;