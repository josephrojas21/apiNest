import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
   jsonexample = [{
    "Resp_MT_PORTALPROVEEDOR_ORDENESPENDIENTES": {
       "RETORNO": {
          "codigo_retorno": "0 ",
          "retorno": "Proceso Exitoso"
       },
       "ORDENESPENDIENTES": {
          "CABECERA": [
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 5100038136,
                "orden_fabricacion": "000002022144",
                "material": "000000000000502332",
                "texto_material": "CORSET CORTO STRAPLESS",
                "campana_orden": "2016/05",
                "version": 12,
                "fecha_entrega": 20170331,
                "categoria_stock": "CRML1",
                "usuario": "Jhon Fredy Mejia",
                "DETALLE": [
                   {
                      "valor_matriz": "32BL",
                      "plu": 68117,
                      "cantidad_inicial": "33.000 ",
                      "cantidad_pendiente": "1.000 ",
                      "cantidad_entregar": "31.000 ",
                      "cantidad_confirmada": "1.000 ",
                      "cantidad_maxima": "36.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL",
                      "plu": 68118,
                      "cantidad_inicial": "187.000 ",
                      "cantidad_pendiente": "186.000 ",
                      "cantidad_entregar": "1.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "206.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "36BL",
                      "plu": 68119,
                      "cantidad_inicial": "88.000 ",
                      "cantidad_pendiente": "87.000 ",
                      "cantidad_entregar": "1.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "97.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "38BL",
                      "plu": 68120,
                      "cantidad_inicial": "33.000 ",
                      "cantidad_pendiente": "2.000 ",
                      "cantidad_entregar": "31.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "36.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             },
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 5100038139,
                "orden_fabricacion": "000002022710",
                "material": "000000000000508290",
                "texto_material": "BRASIER NATURAL BRA",
                "campana_orden": "2016/06",
                "version": "F",
                "fecha_entrega": 20170428,
                "categoria_stock": "CRML1",
                "usuario": "ALEX FLOREZ",
                "DETALLE": [
                   {
                      "valor_matriz": "32BL",
                      "plu": 88472,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "99.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "1.000 ",
                      "cantidad_maxima": "110.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL",
                      "plu": 88473,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "99.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "1.000 ",
                      "cantidad_maxima": "110.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "36BL",
                      "plu": 88474,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "110.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             },
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 5100038140,
                "orden_fabricacion": "000002022711",
                "material": "000000000000507777",
                "texto_material": "CHAQUETA MANGA LARGA",
                "campana_orden": "2017/01",
                "version": "F",
                "fecha_entrega": 20170428,
                "categoria_stock": "CRML1",
                "usuario": "ALEX FLOREZ",
                "DETALLE": [
                   {
                      "valor_matriz": "XS  VD",
                      "plu": 85479,
                      "cantidad_inicial": "50.000 ",
                      "cantidad_pendiente": "50.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "55.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "S   VD",
                      "plu": 85480,
                      "cantidad_inicial": "50.000 ",
                      "cantidad_pendiente": "50.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "55.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "M   VD",
                      "plu": 85481,
                      "cantidad_inicial": "50.000 ",
                      "cantidad_pendiente": "50.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "55.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "L   VD",
                      "plu": 85482,
                      "cantidad_inicial": "50.000 ",
                      "cantidad_pendiente": "50.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "55.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             },
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 5100038142,
                "orden_fabricacion": "000002022713",
                "material": "000000000000500891",
                "texto_material": "DUO PANTY",
                "campana_orden": "2016/08",
                "version": "F",
                "fecha_entrega": 20170428,
                "categoria_stock": "PCFK1",
                "usuario": "ALEX FLOREZ",
                "DETALLE": [
                   {
                      "valor_matriz": "S   UN",
                      "plu": 91573,
                      "cantidad_inicial": "200.000 ",
                      "cantidad_pendiente": "200.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "220.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "M   UN",
                      "plu": 91574,
                      "cantidad_inicial": "200.000 ",
                      "cantidad_pendiente": "200.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "220.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "L   UN",
                      "plu": 91575,
                      "cantidad_inicial": "200.000 ",
                      "cantidad_pendiente": "200.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "220.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             },
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 4500044027,
                "material": "000000000000532522",
                "texto_material": "BRASIER SUPER BRA.",
                "campana_orden": "2016/11",
                "version": "F",
                "fecha_entrega": 20180328,
                "categoria_stock": "YBNA1",
                "usuario": "RANGELDA",
                "DETALLE": [
                   {
                      "valor_matriz": "30BL01B",
                      "plu": 18508,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "100.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01B",
                      "plu": 18510,
                      "cantidad_inicial": "200.000 ",
                      "cantidad_pendiente": "200.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "200.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01B",
                      "plu": 18512,
                      "cantidad_inicial": "300.000 ",
                      "cantidad_pendiente": "300.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "300.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             },
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 5100038316,
                "material": "000000000000532522",
                "texto_material": "BRASIER SUPER BRA.",
                "campana_orden": "2016/11",
                "version": "F",
                "fecha_entrega": 20180328,
                "categoria_stock": "YBNA1",
                "usuario": "RANGELDA",
                "DETALLE": [
                   {
                      "valor_matriz": "30BL01C",
                      "plu": 18509,
                      "cantidad_inicial": "20.000 ",
                      "cantidad_pendiente": "20.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "20.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "30BL01B",
                      "plu": 18508,
                      "cantidad_inicial": "10.000 ",
                      "cantidad_pendiente": "10.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "10.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01B",
                      "plu": 18510,
                      "cantidad_inicial": "30.000 ",
                      "cantidad_pendiente": "30.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "30.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01B",
                      "plu": 18512,
                      "cantidad_inicial": "50.000 ",
                      "cantidad_pendiente": "50.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "50.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01C",
                      "plu": 18511,
                      "cantidad_inicial": "40.000 ",
                      "cantidad_pendiente": "40.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "40.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01C",
                      "plu": 18513,
                      "cantidad_inicial": "60.000 ",
                      "cantidad_pendiente": "60.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "60.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             },
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 5100038317,
                "material": "000000000000532522",
                "texto_material": "BRASIER SUPER BRA.",
                "campana_orden": "2016/11",
                "version": "F",
                "fecha_entrega": 20180404,
                "categoria_stock": "YBNA1",
                "usuario": "Julian CARVAJAL",
                "DETALLE": [
                   {
                      "valor_matriz": "30BL01B",
                      "plu": 18508,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "100.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "30BL01C",
                      "plu": 18509,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "100.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01B",
                      "plu": 18510,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "100.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01C",
                      "plu": 18511,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "100.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01B",
                      "plu": 18512,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "100.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01C",
                      "plu": 18513,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "100.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             },
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 4500044035,
                "material": "000000000000532522",
                "texto_material": "BRASIER SUPER BRA.",
                "campana_orden": "2016/11",
                "version": "F",
                "fecha_entrega": 20180417,
                "categoria_stock": "YBNA1",
                "usuario": "RANGELDA",
                "DETALLE": [
                   {
                      "valor_matriz": "30BL01B",
                      "plu": 18508,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "100.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "30BL01C",
                      "plu": 18509,
                      "cantidad_inicial": "110.000 ",
                      "cantidad_pendiente": "110.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "110.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01B",
                      "plu": 18510,
                      "cantidad_inicial": "200.000 ",
                      "cantidad_pendiente": "200.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "200.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01C",
                      "plu": 18511,
                      "cantidad_inicial": "210.000 ",
                      "cantidad_pendiente": "210.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "210.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01B",
                      "plu": 18512,
                      "cantidad_inicial": "300.000 ",
                      "cantidad_pendiente": "300.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "300.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01C",
                      "plu": 18513,
                      "cantidad_inicial": "310.000 ",
                      "cantidad_pendiente": "310.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "310.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             },
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 5100038318,
                "material": "000000000000532522",
                "texto_material": "BRASIER SUPER BRA.",
                "campana_orden": "2016/11",
                "version": "F",
                "fecha_entrega": 20180417,
                "categoria_stock": "YBNA1",
                "usuario": "RANGELDA",
                "DETALLE": [
                   {
                      "valor_matriz": "30BL01B",
                      "plu": 18508,
                      "cantidad_inicial": "100.000 ",
                      "cantidad_pendiente": "100.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "100.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "30BL01C",
                      "plu": 18509,
                      "cantidad_inicial": "110.000 ",
                      "cantidad_pendiente": "110.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "110.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01B",
                      "plu": 18510,
                      "cantidad_inicial": "200.000 ",
                      "cantidad_pendiente": "200.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "200.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01C",
                      "plu": 18511,
                      "cantidad_inicial": "210.000 ",
                      "cantidad_pendiente": "210.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "210.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01B",
                      "plu": 18512,
                      "cantidad_inicial": "300.000 ",
                      "cantidad_pendiente": "300.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "300.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01C",
                      "plu": 18513,
                      "cantidad_inicial": "310.000 ",
                      "cantidad_pendiente": "310.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "310.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             },
             {
                "acreedor": "0901057585",
                "nombre_acreedor": "ARTEM S.A.S.",
                "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                "correo_electronico": "artem.sas@hotmail.com",
                "doc_compra": 5100038328,
                "material": "000000000000532522",
                "texto_material": "BRASIER SUPER BRA.",
                "campana_orden": "2016/11",
                "version": "F",
                "fecha_entrega": 20180627,
                "categoria_stock": "YBNA1",
                "usuario": "RANGELDA",
                "DETALLE": [
                   {
                      "valor_matriz": "30BL01B",
                      "plu": 18508,
                      "cantidad_inicial": "101.000 ",
                      "cantidad_pendiente": "101.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "101.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01B",
                      "plu": 18510,
                      "cantidad_inicial": "200.000 ",
                      "cantidad_pendiente": "200.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "200.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01B",
                      "plu": 18512,
                      "cantidad_inicial": "300.000 ",
                      "cantidad_pendiente": "300.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "300.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "30BL01C",
                      "plu": 18509,
                      "cantidad_inicial": "101.000 ",
                      "cantidad_pendiente": "101.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "101.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "32BL01C",
                      "plu": 18511,
                      "cantidad_inicial": "201.000 ",
                      "cantidad_pendiente": "201.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "201.000 ",
                      "posicion_pedido": "00010"
                   },
                   {
                      "valor_matriz": "34BL01C",
                      "plu": 18513,
                      "cantidad_inicial": "301.000 ",
                      "cantidad_pendiente": "301.000 ",
                      "cantidad_entregar": "0.000 ",
                      "cantidad_confirmada": "0.000 ",
                      "cantidad_maxima": "301.000 ",
                      "posicion_pedido": "00010"
                   }
                ]
             }
          ]
       }
    }
 }
 ]

jsonTable = [
  {

  columns: [
    {
      label: 'Fecha',
      field: 'Fecha',
      sort: 'asc',
      width: 150,
      
    },
    {
      label: 'Documento compra',
      field: 'DocCompra',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Orden fabricacion',
      field: 'OrdenFab',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Codigo material',
      field: 'CodMaterial',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Material',
      field: 'Material',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Descripcion orden',
      field: 'DescOrden',
      sort: 'asc',
      width: 100
    }
  ],
  rows: []
  },
  {
    Details:[]
  }
]

jsonCitas = [{ 
  "Resp_MT_PORTALPROVEEDOR_CONSULTARCITAS28":{ 
     "RETORNO":{ 
        "codigo_retorno":"0 ",
        "retorno":"Proceso Exitoso"
     },
     "CITAREGISTRADA":{ 
        "CABECERA":[ 
           { 
              "acreedor":"0901057585",
              "nombre_acreedor":"ARTEM S.A.S.",
              "direccion":"Cra 48B # 99 Sur 59 Variante Bod.39",
              "correo_electronico":"artem.sas@hotmail.com",
              "doc_compra":5100038136,
              "orden_fabricacion":"000002022144",
              "material":"000000000000502332",
              "texto_material":"CORSET CORTO STRAPLESS",
              "tulas":"00000",
              "cajas":"00000",
              "bolsas":"00001",
              "consecutivo_ord_procesa":"0000000982",
              "fecha_recogida":"00000000",
              "campana_orden":"2016\/05",
              "version":12,
              "fecha_entrega":20170331,
              "categoria_stock":"CRML1",
              "usuario":"JHON FREDY MEJIA SERNA",
              "transporte_propio":false,
              "Fecha_creacion":"2018.06.22",
              "Hora_creacion":"15:33",
              "DETALLE":[ 
                 { 
                    "valor_matriz":"32BL",
                    "plu":68117,
                    "cantidad_inicial":"33.000 ",
                    "cantidad_pendiente":"1.000 ",
                    "cantidad_entregar":"1.000 ",
                    "cantidad_confirmada":"1.000 ",
                    "cantidad_maxima":"3.000 ",
                    "posicion_pedido":"000010"
                 },
                 { 
                    "valor_matriz":"34BL",
                    "plu":68118,
                    "cantidad_inicial":"187.000 ",
                    "cantidad_pendiente":"186.000 ",
                    "cantidad_entregar":"0.000 ",
                    "cantidad_confirmada":"0.000 ",
                    "cantidad_maxima":"19.000 ",
                    "posicion_pedido":"000010"
                 },
                 { 
                    "valor_matriz":"36BL",
                    "plu":68119,
                    "cantidad_inicial":"88.000 ",
                    "cantidad_pendiente":"87.000 ",
                    "cantidad_entregar":"0.000 ",
                    "cantidad_confirmada":"0.000 ",
                    "cantidad_maxima":"9.000 ",
                    "posicion_pedido":"000010"
                 },
                 { 
                    "valor_matriz":"38BL",
                    "plu":68120,
                    "cantidad_inicial":"33.000 ",
                    "cantidad_pendiente":"2.000 ",
                    "cantidad_entregar":"0.000 ",
                    "cantidad_confirmada":"0.000 ",
                    "cantidad_maxima":"3.000 ",
                    "posicion_pedido":"000010"
                 }
              ]
           },
           { 
              "acreedor":"0901057585",
              "nombre_acreedor":"ARTEM S.A.S.",
              "direccion":"Cra 48B # 99 Sur 59 Variante Bod.39",
              "correo_electronico":"artem.sas@hotmail.com",
              "doc_compra":5100038139,
              "orden_fabricacion":"000002022710",
              "material":"000000000000508290",
              "texto_material":"BRASIER NATURAL BRA",
              "tulas":"00000",
              "cajas":"00001",
              "bolsas":"00000",
              "consecutivo_ord_procesa":"0000000976",
              "fecha_recogida":"00000000",
              "campana_orden":"2016\/06",
              "version":"F",
              "fecha_entrega":20170428,
              "categoria_stock":"CRML1",
              "usuario":"ALEXANDER FLOREZ RUIZ",
              "transporte_propio":false,
              "Fecha_creacion":"2018.05.28",
              "Hora_creacion":"16:56",
              "DETALLE":[ 
                 { 
                    "valor_matriz":"32BL",
                    "plu":88472,
                    "cantidad_inicial":"100.000 ",
                    "cantidad_pendiente":"99.000 ",
                    "cantidad_entregar":"1.000 ",
                    "cantidad_confirmada":"1.000 ",
                    "cantidad_maxima":"10.000 ",
                    "posicion_pedido":"000010"
                 },
                 { 
                    "valor_matriz":"34BL",
                    "plu":88473,
                    "cantidad_inicial":"100.000 ",
                    "cantidad_pendiente":"99.000 ",
                    "cantidad_entregar":"1.000 ",
                    "cantidad_confirmada":"1.000 ",
                    "cantidad_maxima":"10.000 ",
                    "posicion_pedido":"000010"
                 },
                 { 
                    "valor_matriz":"36BL",
                    "plu":88474,
                    "cantidad_inicial":"100.000 ",
                    "cantidad_pendiente":"100.000 ",
                    "cantidad_entregar":"0.000 ",
                    "cantidad_confirmada":"0.000 ",
                    "cantidad_maxima":"10.000 ",
                    "posicion_pedido":"000010"
                 }
              ]
           }
        ]
     }
  }
}]

jsonApointments = 
   {
 
   columns: [
     {
       label: 'Cita numero',
       field: 'CitaNumero',
       sort: 'asc',
       width: 150,
       
     },
     {
       label: 'Fecha recogida',
       field: 'FechaRecogida',
       sort: 'asc',
       width: 270
     },
     {
       label: 'Hora recogida',
       field: 'HoraRecogida',
       sort: 'asc',
       width: 200
     },
     {
       label: 'Transportadora',
       field: 'Transportadora',
       sort: 'asc',
       width: 100
     },
     {
       label: 'Documentos',
       field: 'Documentos',
       sort: 'asc',
       width: 150
     },
     {
       label: 'Opciones',
       field: 'Opciones',
       sort: 'asc',
       width: 100
     }
   ],
   rows: []
   }


  getHello(): object {
    //console.log(this.jsonexample[0].Resp_MT_PORTALPROVEEDOR_ORDENESPENDIENTES.ORDENESPENDIENTES.CABECERA);
    let orders = this.jsonexample[0].Resp_MT_PORTALPROVEEDOR_ORDENESPENDIENTES.ORDENESPENDIENTES.CABECERA;
    orders.map((dataTable, index) => {
      this.jsonTable[0].rows.push({
        Fecha: this.dateFormat(dataTable.fecha_entrega),
        DocCompra: dataTable.doc_compra ? dataTable.doc_compra : 'No hay dato',
        OrdenFab: dataTable.orden_fabricacion ? parseInt(dataTable.orden_fabricacion)  : 'No hay dato' ,
        CodMaterial: dataTable.material ? parseInt(dataTable.material) : 'No hay dato',
        Material: dataTable.texto_material ? dataTable.texto_material : 'No hay dato',
        DescOrden: dataTable.usuario ?  dataTable.usuario : 'No hay dato',
        Order: index
      }) 
      this.jsonTable[1].Details.push(
        dataTable.DETALLE
      )
    })

    return this.jsonTable;
  }

  dateFormat(date: number){
    let newDate = date.toString()
    return newDate = newDate.slice(0,4) + "/" + newDate.slice(4,6) + "/" + newDate.slice(7,9)
  }

  getApointments(): Object{
     let apointments = this.jsonCitas[0].Resp_MT_PORTALPROVEEDOR_CONSULTARCITAS28.CITAREGISTRADA.CABECERA
     apointments.map((dataTable,index) => {
         this.jsonApointments.rows.push({
            CitaNumero: dataTable.consecutivo_ord_procesa ? parseInt(dataTable.consecutivo_ord_procesa) : 'No hay dato',
            FechaRecogida: parseInt(dataTable.fecha_recogida) > 0 ? dataTable.fecha_recogida : 'Sin asignar',
            HoraRecogida: parseInt(dataTable.fecha_recogida) > 0 ? 'le del filosofo' : 'Sin asignar',
            
         })
     })
    return this.jsonCitas;
  }
}

