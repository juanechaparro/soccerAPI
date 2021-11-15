const {nanoid} = require('nanoid');
const auth = require('../auth');

const TABLA = 'futbolista';

module.exports = function (injectedStore) {
    let store = injectedStore;
    

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }
    function getByPosition(position) {
        return store.getByPosition(TABLA, position);
    }
    function getByTeam(team) {
        return store.getByTeam(TABLA, team);
    }
    function getByCountry(nationality) {
        return store.getByCountry(TABLA, nationality);
    }

    async function insert(body) {
        const futbolist = {
            name: body.name,
            team_id: body.team_id,
            squad_number: body.squad_number,    
            position:body.position,
            nationality:body.nationality,

        }

        if (body.id) {
            futbolist.id = body.id;
        } else {
            futbolist.id = nanoid();
        }

       

        return store.insert(TABLA, futbolist);
    }
    async function update(body) {
        const futbolist = {
            id:body.id,
            name: body.name,
            team_id: body.team_id,
            squad_number: body.squad_number,    
            position:body.position,
            nationality:body.nationality,

        }


       

        return store.insert(TABLA, futbolist);
    }
    async function deletePlayer(body){
     store.deletePlayer(body.id)
    }
  

    return {
        list,
        get,
        getByPosition,
        getByTeam,
        getByCountry,
        insert,
        deletePlayer,
        update,
    };
}