
const auth = require('../auth');

const TABLA = 'team';

module.exports = function (injectedStore) {
    let store = injectedStore;
    

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function upsert(body) {
        const team = {
            name: body.name,
            league: body.league,
            country: body.country,    
            

        }

        

       

        return store.upsert(TABLA, team);
    }

    

    return {
        list,
        get,
        upsert,
      
    };
}