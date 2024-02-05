exports.ActorObjeto=function(resp){
    let ActorCaracteristicas = {
        Nombre: resp.data.name,
        Altura: resp.data.height,
        Peso: resp.data.mass,
        colorCabello: resp.data.hair_color,
        ColorPiel: resp.data.skin_color,
        ColorOjos: resp.data.eye_color,
        Cumpleannos: resp.data.birth_year,
        Genero: resp.data.gender,
        MundoHogar: resp.data.homeworld,
        Peliculas: resp.data.films,
        species: resp.data.species,
        vehiculos: resp.data.vehicles,
        navesEspaciales: resp.data.starships,
        FechaCreado: resp.data.created,
        FechaEditado: resp.data.edited,
        url: resp.data.url
       }; 
       
       return ActorCaracteristicas;
};