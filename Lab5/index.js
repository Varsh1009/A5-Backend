
import express from 'express';
import PathParameters from './PathParameters.js';
import QueryParameters from './QueryParameters.js';
import WorkingWithArrays from './WorkingWithArrays.js';
import WorkingWithObjects from './WorkingWithObjects.js';

const router = express.Router();

router.use('/path-parameters', PathParameters);
router.use('/query-parameters', QueryParameters);
router.use('/working-with-objects', WorkingWithObjects);
router.use('/working-with-arrays', WorkingWithArrays);


export default (app) => {
    app.use('/lab5', router);
};