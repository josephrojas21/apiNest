import { Injectable, ParseIntPipe } from '@nestjs/common';

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
                        "cantidad_inicial": "33 ",
                        "cantidad_pendiente": "1 ",
                        "cantidad_entregar": "31 ",
                        "cantidad_confirmada": "1 ",
                        "cantidad_maxima": "36 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL",
                        "plu": 68118,
                        "cantidad_inicial": "187 ",
                        "cantidad_pendiente": "186 ",
                        "cantidad_entregar": "1 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "206 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "36BL",
                        "plu": 68119,
                        "cantidad_inicial": "88 ",
                        "cantidad_pendiente": "87 ",
                        "cantidad_entregar": "1 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "97 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "38BL",
                        "plu": 68120,
                        "cantidad_inicial": "33 ",
                        "cantidad_pendiente": "2 ",
                        "cantidad_entregar": "31 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "36 ",
                        "posicion_pedido": "10"
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
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "99 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "1 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL",
                        "plu": 88473,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "99 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "1 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "36BL",
                        "plu": 88474,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10"
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
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "55 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "S   VD",
                        "plu": 85480,
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "55 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "M   VD",
                        "plu": 85481,
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "55 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "L   VD",
                        "plu": 85482,
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "55 ",
                        "posicion_pedido": "10"
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
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "220 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "M   UN",
                        "plu": 91574,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "220 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "L   UN",
                        "plu": 91575,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "220 ",
                        "posicion_pedido": "10"
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
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "200 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "300 ",
                        "cantidad_pendiente": "300 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "300 ",
                        "posicion_pedido": "10"
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
                        "cantidad_inicial": "20 ",
                        "cantidad_pendiente": "20 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "20 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "30BL01B",
                        "plu": 18508,
                        "cantidad_inicial": "10 ",
                        "cantidad_pendiente": "10 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "10 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "30 ",
                        "cantidad_pendiente": "30 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "30 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "50 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "40 ",
                        "cantidad_pendiente": "40 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "40 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "60 ",
                        "cantidad_pendiente": "60 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "60 ",
                        "posicion_pedido": "10"
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
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "30BL01C",
                        "plu": 18509,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10"
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
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "30BL01C",
                        "plu": 18509,
                        "cantidad_inicial": "110 ",
                        "cantidad_pendiente": "110 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "200 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "210 ",
                        "cantidad_pendiente": "210 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "210 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "300 ",
                        "cantidad_pendiente": "300 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "300 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "310 ",
                        "cantidad_pendiente": "310 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "310 ",
                        "posicion_pedido": "10"
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
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "30BL01C",
                        "plu": 18509,
                        "cantidad_inicial": "110 ",
                        "cantidad_pendiente": "110 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "200 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "210 ",
                        "cantidad_pendiente": "210 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "210 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "300 ",
                        "cantidad_pendiente": "300 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "300 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "310 ",
                        "cantidad_pendiente": "310 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "310 ",
                        "posicion_pedido": "10"
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
                        "cantidad_inicial": "101 ",
                        "cantidad_pendiente": "101 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "101 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "200 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "300 ",
                        "cantidad_pendiente": "300 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "300 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "30BL01C",
                        "plu": 18509,
                        "cantidad_inicial": "101 ",
                        "cantidad_pendiente": "101 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "101 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "201 ",
                        "cantidad_pendiente": "201 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "201 ",
                        "posicion_pedido": "10"
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "301 ",
                        "cantidad_pendiente": "301 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "301 ",
                        "posicion_pedido": "10"
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
               label: 'Item',
               field: 'Item',
               sort: 'asc',
               width: 50
            },
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
               width: 200
            },
            {
               label: 'Orden fabricacion',
               field: 'OrdenFab',
               sort: 'asc',
               width: 170
            },
            {
               label: 'Codigo material',
               field: 'CodMaterial',
               sort: 'asc',
               width: 90
            },
            {
               label: 'Material',
               field: 'Material',
               sort: 'asc',
               width: 150
            },   
            {
               label: 'Descripcion orden',
               field: 'DescOrdenTabulado',
               sort: 'asc',
               width: 200
            }  
         ],
         rows: []
      },
      {
         Details: []
      }
   ]

   jsonCitas = [{
      "Resp_MT_PORTALPROVEEDOR_CONSULTARCITAS28": {
         "RETORNO": {
            "codigo_retorno": "0 ",
            "retorno": "Proceso Exitoso"
         },
         "CITAREGISTRADA": {
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
                  "tulas": "00000",
                  "cajas": "00000",
                  "bolsas": "01",
                  "consecutivo_ord_procesa": "0000000982",
                  "fecha_recogida": "00000000",
                  "campana_orden": "2016\/05",
                  "version": 12,
                  "fecha_entrega": 20170331,
                  "categoria_stock": "CRML1",
                  "usuario": "JHON FREDY MEJIA SERNA",
                  "transporte_propio": false,
                  "Fecha_creacion": "2018.06.22",
                  "Hora_creacion": "15:33",
                  "DETALLE": [
                     {
                        "valor_matriz": "32BL",
                        "plu": 68117,
                        "cantidad_inicial": "33 ",
                        "cantidad_pendiente": "1 ",
                        "cantidad_entregar": "1 ",
                        "cantidad_confirmada": "1 ",
                        "cantidad_maxima": "3 ",
                        "posicion_pedido": "010"
                     },
                     {
                        "valor_matriz": "34BL",
                        "plu": 68118,
                        "cantidad_inicial": "187 ",
                        "cantidad_pendiente": "186 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "19 ",
                        "posicion_pedido": "010"
                     },
                     {
                        "valor_matriz": "36BL",
                        "plu": 68119,
                        "cantidad_inicial": "88 ",
                        "cantidad_pendiente": "87 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "9 ",
                        "posicion_pedido": "010"
                     },
                     {
                        "valor_matriz": "38BL",
                        "plu": 68120,
                        "cantidad_inicial": "33 ",
                        "cantidad_pendiente": "2 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "3 ",
                        "posicion_pedido": "010"
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
                  "tulas": "00000",
                  "cajas": "01",
                  "bolsas": "00000",
                  "consecutivo_ord_procesa": "0000000976",
                  "fecha_recogida": "00000000",
                  "campana_orden": "2016\/06",
                  "version": "F",
                  "fecha_entrega": 20170428,
                  "categoria_stock": "CRML1",
                  "usuario": "ALEXANDER FLOREZ RUIZ",
                  "transporte_propio": false,
                  "Fecha_creacion": "2018.05.28",
                  "Hora_creacion": "16:56",
                  "DETALLE": [
                     {
                        "valor_matriz": "32BL",
                        "plu": 88472,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "99 ",
                        "cantidad_entregar": "1 ",
                        "cantidad_confirmada": "1 ",
                        "cantidad_maxima": "10 ",
                        "posicion_pedido": "010"
                     },
                     {
                        "valor_matriz": "34BL",
                        "plu": 88473,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "99 ",
                        "cantidad_entregar": "1 ",
                        "cantidad_confirmada": "1 ",
                        "cantidad_maxima": "10 ",
                        "posicion_pedido": "010"
                     },
                     {
                        "valor_matriz": "36BL",
                        "plu": 88474,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "10 ",
                        "posicion_pedido": "010"
                     }
                  ]
               }
            ]
         }
      }
   }]

   jsonApointments =[
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
      },
      {
         Details: []
      }
   ]

   jsonReports = [{
      "Resp_MT_PORTALPROVEEDOR_REPORTEORDENES": {
         "RETORNO": {
            "codigo_retorno": "0 ",
            "retorno": "Proceso Exitoso"
         },
         "ORDENESPENDIENTES": {
            "CABECERA": [
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 5100038136,
                  "orden_fabricacion": "2022144     ",
                  "material": 502332,
                  "texto_material": "CORSET CORTO STRAPLESS",
                  "campana_orden": "2016\/05",
                  "version": 12,
                  "fecha_entrega": 20170331,
                  "categoria_stock": "CRML1",
                  "usuario": "Jhon Fredy Mejia",
                  "DETALLE": [
                     {
                        "valor_matriz": "32BL",
                        "plu": 68117,
                        "cantidad_inicial": "33 ",
                        "cantidad_pendiente": "1 ",
                        "cantidad_entregar": "31 ",
                        "cantidad_confirmada": "1 ",
                        "cantidad_maxima": "36 ",
                        "posicion_pedido": "10",
                        "consecutivocita": 982
                     },
                     {
                        "valor_matriz": "34BL",
                        "plu": 68118,
                        "cantidad_inicial": "187 ",
                        "cantidad_pendiente": "186 ",
                        "cantidad_entregar": "1 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "206 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "36BL",
                        "plu": 68119,
                        "cantidad_inicial": "88 ",
                        "cantidad_pendiente": "87 ",
                        "cantidad_entregar": "1 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "97 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "38BL",
                        "plu": 68120,
                        "cantidad_inicial": "33 ",
                        "cantidad_pendiente": "2 ",
                        "cantidad_entregar": "31 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "36 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               },
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 5100038139,
                  "orden_fabricacion": "2022710     ",
                  "material": 508290,
                  "texto_material": "BRASIER NATURAL BRA",
                  "campana_orden": "2016\/06",
                  "version": "F",
                  "fecha_entrega": 20170428,
                  "categoria_stock": "CRML1",
                  "usuario": "ALEX FLOREZ",
                  "DETALLE": [
                     {
                        "valor_matriz": "32BL",
                        "plu": 88472,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "99 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "1 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10",
                        "consecutivocita": 976
                     },
                     {
                        "valor_matriz": "34BL",
                        "plu": 88473,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "99 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "1 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10",
                        "consecutivocita": 976
                     },
                     {
                        "valor_matriz": "36BL",
                        "plu": 88474,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               },
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 5100038140,
                  "orden_fabricacion": "2022711     ",
                  "material": 507777,
                  "texto_material": "CHAQUETA MANGA LARGA",
                  "campana_orden": "2017\/01",
                  "version": "F",
                  "fecha_entrega": 20170428,
                  "categoria_stock": "CRML1",
                  "usuario": "ALEX FLOREZ",
                  "DETALLE": [
                     {
                        "valor_matriz": "XS  VD",
                        "plu": 85479,
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "55 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "S   VD",
                        "plu": 85480,
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "55 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "M   VD",
                        "plu": 85481,
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "55 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "L   VD",
                        "plu": 85482,
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "55 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               },
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 5100038142,
                  "orden_fabricacion": "2022713     ",
                  "material": 500891,
                  "texto_material": "DUO PANTY",
                  "campana_orden": "2016\/08",
                  "version": "F",
                  "fecha_entrega": 20170428,
                  "categoria_stock": "PCFK1",
                  "usuario": "ALEX FLOREZ",
                  "DETALLE": [
                     {
                        "valor_matriz": "S   UN",
                        "plu": 91573,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "220 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "M   UN",
                        "plu": 91574,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "220 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "L   UN",
                        "plu": 91575,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "220 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               },
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 4500044027,
                  "orden_fabricacion": "",
                  "material": 532522,
                  "texto_material": "BRASIER SUPER BRA.",
                  "campana_orden": "2016\/11",
                  "version": "F",
                  "fecha_entrega": 20180328,
                  "categoria_stock": "YBNA1",
                  "usuario": "RANGELDA",
                  "DETALLE": [
                     {
                        "valor_matriz": "30BL01B",
                        "plu": 18508,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "200 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "300 ",
                        "cantidad_pendiente": "300 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "300 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               },
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 5100038316,
                  "orden_fabricacion": "",
                  "material": 532522,
                  "texto_material": "BRASIER SUPER BRA.",
                  "campana_orden": "2016\/11",
                  "version": "F",
                  "fecha_entrega": 20180328,
                  "categoria_stock": "YBNA1",
                  "usuario": "RANGELDA",
                  "DETALLE": [
                     {
                        "valor_matriz": "30BL01C",
                        "plu": 18509,
                        "cantidad_inicial": "20 ",
                        "cantidad_pendiente": "20 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "20 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "30BL01B",
                        "plu": 18508,
                        "cantidad_inicial": "10 ",
                        "cantidad_pendiente": "10 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "10 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "30 ",
                        "cantidad_pendiente": "30 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "30 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "50 ",
                        "cantidad_pendiente": "50 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "50 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "40 ",
                        "cantidad_pendiente": "40 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "40 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "60 ",
                        "cantidad_pendiente": "60 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "60 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               },
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 5100038317,
                  "orden_fabricacion": "",
                  "material": 532522,
                  "texto_material": "BRASIER SUPER BRA.",
                  "campana_orden": "2016\/11",
                  "version": "F",
                  "fecha_entrega": 20180404,
                  "categoria_stock": "YBNA1",
                  "usuario": "Julian CARVAJAL",
                  "DETALLE": [
                     {
                        "valor_matriz": "30BL01B",
                        "plu": 18508,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "30BL01C",
                        "plu": 18509,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               },
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 4500044035,
                  "orden_fabricacion": "",
                  "material": 532522,
                  "texto_material": "BRASIER SUPER BRA.",
                  "campana_orden": "2016\/11",
                  "version": "F",
                  "fecha_entrega": 20180417,
                  "categoria_stock": "YBNA1",
                  "usuario": "RANGELDA",
                  "DETALLE": [
                     {
                        "valor_matriz": "30BL01B",
                        "plu": 18508,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "30BL01C",
                        "plu": 18509,
                        "cantidad_inicial": "110 ",
                        "cantidad_pendiente": "110 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "200 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "210 ",
                        "cantidad_pendiente": "210 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "210 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "300 ",
                        "cantidad_pendiente": "300 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "300 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "310 ",
                        "cantidad_pendiente": "310 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "310 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               },
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 5100038318,
                  "orden_fabricacion": "",
                  "material": 532522,
                  "texto_material": "BRASIER SUPER BRA.",
                  "campana_orden": "2016\/11",
                  "version": "F",
                  "fecha_entrega": 20180417,
                  "categoria_stock": "YBNA1",
                  "usuario": "RANGELDA",
                  "DETALLE": [
                     {
                        "valor_matriz": "30BL01B",
                        "plu": 18508,
                        "cantidad_inicial": "100 ",
                        "cantidad_pendiente": "100 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "100 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "30BL01C",
                        "plu": 18509,
                        "cantidad_inicial": "110 ",
                        "cantidad_pendiente": "110 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "110 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "200 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "210 ",
                        "cantidad_pendiente": "210 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "210 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "300 ",
                        "cantidad_pendiente": "300 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "300 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "310 ",
                        "cantidad_pendiente": "310 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "310 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               },
               {
                  "acreedor": "901057585 ",
                  "nombre_acreedor": "ARTEM S.A.S.",
                  "direccion": "Cra 48B # 99 Sur 59 Variante Bod.39",
                  "correo_electronico": "artem.sas@hotmail.com",
                  "doc_compra": 5100038328,
                  "orden_fabricacion": "",
                  "material": 532522,
                  "texto_material": "BRASIER SUPER BRA.",
                  "campana_orden": "2016\/11",
                  "version": "F",
                  "fecha_entrega": 20180627,
                  "categoria_stock": "YBNA1",
                  "usuario": "RANGELDA",
                  "DETALLE": [
                     {
                        "valor_matriz": "30BL01B",
                        "plu": 18508,
                        "cantidad_inicial": "101 ",
                        "cantidad_pendiente": "101 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "101 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01B",
                        "plu": 18510,
                        "cantidad_inicial": "200 ",
                        "cantidad_pendiente": "200 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "200 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01B",
                        "plu": 18512,
                        "cantidad_inicial": "300 ",
                        "cantidad_pendiente": "300 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "300 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "30BL01C",
                        "plu": 18509,
                        "cantidad_inicial": "101 ",
                        "cantidad_pendiente": "101 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "101 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "32BL01C",
                        "plu": 18511,
                        "cantidad_inicial": "201 ",
                        "cantidad_pendiente": "201 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "201 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     },
                     {
                        "valor_matriz": "34BL01C",
                        "plu": 18513,
                        "cantidad_inicial": "301 ",
                        "cantidad_pendiente": "301 ",
                        "cantidad_entregar": "0 ",
                        "cantidad_confirmada": "0 ",
                        "cantidad_maxima": "301 ",
                        "posicion_pedido": "10",
                        "consecutivocita": ""
                     }
                  ]
               }
            ]
         }
      }
   }]


   jsonReportsFinal = [
      {

         columns: [
            {
               label: 'Documento compra',
               field: 'doc_compra',
               sort: 'asc',
               width: 50,

            },
            {
               label: 'O.Fabricación',
               field: 'orden_fabricacion',
               sort: 'asc',
               width: 50
            },
            {
               label: 'Texto Material',
               field: 'texto_material',
               sort: 'asc',
               width: 300
            },
            {
               label: 'Campaña',
               field: 'campana_orden',
               sort: 'asc',
               width: 100
            },
            {
               label: 'Categoria Stock',
               field: 'categoria_stock',
               sort: 'asc',
               width: 100
            },
            {
               label: 'Valor Matriz',
               field: 'valor_matriz',
               sort: 'asc',
               width: 80
            },
            {
               label: 'Cantidad Inicial',
               field: 'cantidad_inicial',
               sort: 'asc',
               width: 80
            }, 
            {
               label: 'Cantidad Solicitadas en Citas',
               field: 'cantidad_confirmada',
               sort: 'asc',
               width: 80
            },
            {
               label: 'Cantidad Entregada',
               field: 'cantidad_entregar',
               sort: 'asc',
               width: 100
            },
            {
               label: 'Cantidad Pendiente',
               field: 'cantidad_pendiente',
               sort: 'asc',
               width: 100
            },
            {
               label: 'Nro. Cita',
               field: 'consecutivocita',
               sort: 'asc',
               width: 150
            }
         ],
         rows: []
      }
   ]


   getDeliveryCategories(): object {
      //console.log(this.jsonexample[0].Resp_MT_PORTALPROVEEDOR_ORDENESPENDIENTES.ORDENESPENDIENTES.CABECERA);
      let orders = this.jsonexample[0].Resp_MT_PORTALPROVEEDOR_ORDENESPENDIENTES.ORDENESPENDIENTES.CABECERA;
      orders.map((dataTable, index) => {
         this.jsonTable[0].rows.push({
            Fecha: this.dateFormat(dataTable.fecha_entrega),
            DocCompra: dataTable.doc_compra ? dataTable.doc_compra : ' ',
            OrdenFab: dataTable.orden_fabricacion ? parseInt(dataTable.orden_fabricacion) : ' ',
            CodMaterial: dataTable.material ? parseInt(dataTable.material) : ' ',
            Material: dataTable.texto_material ? dataTable.texto_material : ' ',
            DescOrdenCampana: dataTable.campana_orden ? 'Campaña: ' +  dataTable.campana_orden : ' ' ,
            DescOrdenVersion: dataTable.version ? 'Version: ' + dataTable.version : ' ' ,
            DescOrdenPedido: dataTable.usuario ? 'Resp.Pedido: ' + dataTable.usuario : ' ',
            Order: index
         })
         this.jsonTable[1].Details.push(
            dataTable.DETALLE
         )
      })
      return this.jsonTable;
   }

// Modificando
   getdeliveryCategoriesById(id: number): Object{
      return this.jsonexample[0].Resp_MT_PORTALPROVEEDOR_ORDENESPENDIENTES.ORDENESPENDIENTES.CABECERA[id].DETALLE;
   }


   dateFormat(date: number) {
      let newDate = date.toString()
      return newDate = newDate.slice(0, 4) + "/" + newDate.slice(4, 6) + "/" + newDate.slice(7, 9)
   }

   getApointments(): Object {
      let apointments = this.jsonCitas[0].Resp_MT_PORTALPROVEEDOR_CONSULTARCITAS28.CITAREGISTRADA.CABECERA
      apointments.map((dataTable, index) => {
         this.jsonApointments[0].rows.push({
            CitaNumero: dataTable.consecutivo_ord_procesa ? parseInt(dataTable.consecutivo_ord_procesa) : 'No hay dato',
            FechaRecogida: parseInt(dataTable.fecha_recogida) > 0 ? dataTable.fecha_recogida : 'Sin asignar',
            HoraRecogida: parseInt(dataTable.fecha_recogida) > 0 ? 'le del filosofo' : 'Sin asignar',
            Transportadora: dataTable.transporte_propio ?  dataTable.transporte_propio : 'Sin asignar',
            Documentos: `Doc. Compra: ${dataTable.doc_compra} \n Ord.Fabricacion: ${parseInt(dataTable.orden_fabricacion)} `,
            Order: index
         })
         this.jsonApointments[1].Details.push({
            table: dataTable.DETALLE,
            tulas: parseInt(dataTable.tulas),
            bolsas: parseInt(dataTable.bolsas),
            cajas: parseInt(dataTable.cajas),
            nit: parseInt(dataTable.acreedor),
            nombre: dataTable.nombre_acreedor,
            dir: dataTable.direccion,
            mail: dataTable.correo_electronico,
            doc_compra: dataTable.doc_compra,
            cod_material:  parseInt(dataTable.material),
            orden: parseInt(dataTable.orden_fabricacion),
            material: dataTable.texto_material,
            ord_proceso: parseInt(dataTable.consecutivo_ord_procesa),
            categoria: dataTable.categoria_stock
         }
            
         )
     })
    return this.jsonApointments;
  }

   getDetailsApoinments(id: number): Object{

      return this.jsonApointments[1].Details[id]
   }


   getReport(): Object {
      let reports = this.jsonReports[0].Resp_MT_PORTALPROVEEDOR_REPORTEORDENES.ORDENESPENDIENTES.CABECERA;
      
      reports.map((dataTable, vc) => {
        
         for (let vc2 of dataTable.DETALLE) {

            this.jsonReportsFinal[0].rows.push({
               doc_compra: dataTable.doc_compra,
               orden_fabricacion: dataTable.orden_fabricacion.trim() === '' ? " " : dataTable.orden_fabricacion.trim(),            
               texto_material: dataTable.texto_material ? dataTable.texto_material : 'No hay dato',
               campana_orden : dataTable.campana_orden,            
               categoria_stock : dataTable.categoria_stock,
               valor_matriz : vc2.valor_matriz ? vc2.valor_matriz : 'No hay dato',
               cantidad_inicial : vc2.cantidad_inicial ? vc2.cantidad_inicial : 'No hay dato',
               cantidad_confirmada : vc2.cantidad_confirmada,
               DescOrden : vc2.posicion_pedido,
               cantidad_pendiente : vc2.cantidad_pendiente,
               cantidad_entregar : vc2.cantidad_entregar,
               consecutivocita : vc2.consecutivocita === '' ? " " : vc2.consecutivocita
            
            })
          }   
      })
      return this.jsonReportsFinal;
   }



}

