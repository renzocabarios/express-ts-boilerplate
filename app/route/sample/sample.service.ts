import model from "./sample.model";

const getAll = async () => {
  return await model.find();
};

const getById = async (_id: string) => {
  return await model.findById({ _id });
};

const add = async (body: any) => {
  return await model.create(body);
};

const update = async (_id: string, body: any) => {
  return await model.findByIdAndUpdate({ _id }, body);
};

const deleteById = async (_id: string) => {
  return await model.findByIdAndDelete({ _id });
};

export default { getAll, getById, add, update, deleteById };
