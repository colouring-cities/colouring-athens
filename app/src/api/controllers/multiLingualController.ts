import { processParam, parsePositiveIntParam } from '../parameters';
import asyncController from '../routes/asyncController';
import * as multiLingualService from '../services/multilingual_fields';

const getMultiLingualOptions = asyncController(async (req, res) => {
    const fieldName = processParam(req.query, 'field_name', x => x, true);
    const language = processParam(req.query, 'language', x => x, true);

    const options = await multiLingualService.getMultiLingualOptions(fieldName, language);
    res.send({ options: options });
});


const getMultiLingualLabel = asyncController(async (req, res) => {
    const fieldName = processParam(req.query, 'field_name', x => x, true);
    const language = processParam(req.query, 'language', x => x, true);
    const id = processParam(req.query, 'id', parsePositiveIntParam);

    const options = await multiLingualService.getMultiLingualLabel(fieldName, id, language);

    res.send({ options: options });
});

export default {
    getMultiLingualOptions,
    getMultiLingualLabel
};
