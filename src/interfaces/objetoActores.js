exports.ActorObjeto=function(resp){
    let ActorCaracteristicas = {
        nombre: resp.data.name,
        altura: resp.data.height,
        peso: resp.data.mass,
        colorCabello: resp.data.hair_color,
        ColorPiel: resp.data.skin_color,
        ColorOjos: resp.data.eye_color,
        Cumpleannos: resp.data.birth_year,
        Genero: resp.data.gender,
        MundoHogar: resp.data.homeworld,
        peliculas: resp.data.films,
        species: resp.data.species,
        vehiculos: resp.data.vehicles,
        navesEspaciales: resp.data.starships,
        fechaCreado: resp.data.created,
        fechaEditado: resp.data.edited,
        url: resp.data.url
       }; 
       
       return ActorCaracteristicas;
};