import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

class Empresa extends Model {
  static fields = {
    _id: {
      primaryKey: true,
    },
    razaoSocial: {
      type: DataTypes.STRING
    },
    nomeFantasia: {
      type: DataTypes.STRING
    },
    cnpj: {
      type: DataTypes.STRING
    },
    foto: {
      type: DataTypes.STRING
    }
  };
}

export default Empresa;