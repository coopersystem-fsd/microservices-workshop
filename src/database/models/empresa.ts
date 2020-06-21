import { Model } from 'https://deno.land/x/denodb/mod.ts';

class Empresa extends Model {
  static fields = {
    _id: {
      primaryKey: true,
    },
  };
}

export default Empresa;