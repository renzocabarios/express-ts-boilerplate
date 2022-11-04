import sampleService from "./sample.service";
import { Request, Response } from 'express';

const getAll = async (_req: Request<any>, _res: Response<any>) => {
  const samples = await sampleService.getAll();
  _res.send({ samples });
};

const getById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const sample = await sampleService.getById(id);
  _res.send({ sample });
};

const add = async (_req: Request<any>, _res: Response<any>) => {
  const sample = await sampleService.add(_req.body);
  _res.send({ sample });
};

const update = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const sample = await sampleService.update(id, _req.body);
  _res.send({ sample });
};

const deleteById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const sample = await sampleService.deleteById(id);
  _res.send({ sample });
};

export { getAll, getById, add, update, deleteById };
