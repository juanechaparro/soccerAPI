const express = require('express');

const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
 router.get('/position/:position', getByPosition)
 router.get('/country/:nationality',secure('log'), getByCountry)
 router.get('/team/:team_id',secure('log'), getByTeam)
router.post('/', insert);
router.put('/update', update);
router.delete('/delete',secure('log'), deletePlayer)
// router.put('/', secure('update'), upsert);

// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(next);
}
function getByPosition(req, res, next){
    Controller.getByPosition(req.params.position)
    .then((user) => {
        response.success(req, res, user, 200);
    })
    .catch(next);
}

function getByTeam(req, res, next){
    Controller.getByTeam(req.params.team_id)
    .then((user) => {
        response.success(req, res, user, 200);
    })
    .catch(next);
}
function getByCountry(req, res, next){
    Controller.getByCountry(req.params.nationality)
    .then((user) => {
        response.success(req, res, user, 200);
    })
    .catch(next);
}

function insert(req, res, next) {
    Controller.insert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch(next);
}
function deletePlayer(req, res, next) {
    Controller.deletePlayer(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch(next);
}
function update(req, res, next) {
    Controller.update()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
}

module.exports = router;