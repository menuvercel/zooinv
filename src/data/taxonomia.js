export const filos = [
    {
        id: 'placozoa',
        nombre: 'Placozoa',
        imagen: require('../../assets/images/filos/PLACOZOA.jpg'),
        caracteristicas: [
            'Cuerpo aplanado y macizo',
            'Bordes del cuerpo irregulares',
            'Epitelio flagelado',
            'Células estrelladas contráctiles en el mesénquima (Suficiente)'
        ],
        tieneClases: false
    },
    {
        id: 'porifera',
        nombre: 'Porifera',
        imagen: require('../../assets/images/filos/porifera.jpg'),
        caracteristicas: [
            'Cuerpo con paredes perforadas (Suficiente)',
            'Mesohilo con células móviles',
            'Nivel de organización celular',
            'Elementos esqueléticos (cuando están presentes) compuestos por carbonato de calcio, sílice y/o fibras de colágeno',
            'Asimétricos o con simetría radial'
        ],
        tieneClases: true
    },
    {
        id: 'cnidaria',
        nombre: 'Cnidaria',
        imagen: null,
        caracteristicas: [
            'Forma de pólipo y/o medusa (Suficiente)',
            'Con cnidocitos de origen intrínseco (Suficiente)',
            'Simetría radial, birradial o tetrarradial',
            'Generalmente con tentáculos rodeando a la boca',
            'Organización tisular'
        ],
        tieneClases: true
    },
    {
        id: 'platyhelminthes',
        nombre: 'Platyhelminthes',
        imagen: null,
        caracteristicas: [
            'Parásitos, comensales o de vida libre',
            'Gusanos no segmentados',
            'Con simetría bilateral',
            'Triploblásticos',
            'Acelomados',
            'Bilaterales',
            'Epitelio ciliado o tegumento de origen mesenquimatoso',
            'Sistema digestivo incompleto (al menos boca) o ausente secundariamente',
            'Excretor protonefridial o ausente',
            'Sin sistema circulatorio'
        ],
        tieneClases: true
    },
    {
        id: 'nemertea',
        nombre: 'Nemertea (Rhynchocoela)',
        imagen: null,
        caracteristicas: [
            'Triploblásticos',
            'Bilaterales',
            'Gusanos no segmentados',
            'Acelomados',
            'Sistema digestivo completo',
            'Con sistema circulatorio cerrado',
            'Aparato proboscídeo único situado dorsalmente al sistema digestivo y rodeado por una cámara similar al celoma denominada rincocele (Suficiente)'
        ],
        tieneClases: true
    },
    // Añadir más filos según el documento...
    {
        id: 'arthropoda',
        nombre: 'Arthropoda',
        imagen: null,
        caracteristicas: [
            'Bilaterales',
            'Metamerizados',
            'Con apéndices articulados',
            'Exoesqueleto quitinoso'
        ],
        tieneClases: false,
        tieneSubfilos: true
    }
];

// Función para obtener clases por ID de filo
export const getClasesByFiloId = (filoId) => {
    switch (filoId) {
        case 'porifera':
            return [
                {
                    id: 'calcarea',
                    filoId: 'porifera',
                    nombre: 'Calcarea o Calcispongia',
                    imagen: null,
                    caracteristicas: [
                        'Estructura asconoide, siconoide o leuconoide',
                        'Espículas calcáreas solamente (Suficiente)'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'hexactinellida',
                    filoId: 'porifera',
                    nombre: 'Hexactinellida o Hyalospongiae',
                    imagen: null,
                    caracteristicas: [
                        'Estructura siconoide',
                        'Espículas silíceas hexactinélidas y no hexactinélidas (Suficiente)'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'demospongiae',
                    filoId: 'porifera',
                    nombre: 'Demospongiae',
                    imagen: null,
                    caracteristicas: [
                        'Estructura leuconoide',
                        'Fibras de espongina solamente (suficiente) o espículas silíceas no hexactinélidas solamente o fibras de espongina con espículas silíceas no hexactinélidas (Suficiente) o sin esqueleto'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'homoscleromorpha',
                    filoId: 'porifera',
                    nombre: 'Homoscleromorpha',
                    imagen: null,
                    caracteristicas: [
                        'Estructura leuconoide',
                        'Esqueleto rígido casi siempre ausente; solo espículas tetraxonas pequeñas (<100 μm) sin diferenciarse en microscleras y megascleras (Suficiente)'
                    ],
                    tieneSubclases: false
                }
            ];
        case 'cnidaria':
            return [
                {
                    id: 'hydrozoa',
                    filoId: 'cnidaria',
                    nombre: 'Hydrozoa',
                    imagen: null,
                    caracteristicas: [
                        'Marinos o de agua dulce',
                        'Pólipo y/o medusa',
                        'Medusa con velo (Suficiente)',
                        'Con mesoglea',
                        'Cavidad gastrovascular no tabicada',
                        'Cnidocitos sólo en la epidermis',
                        'Gónadas epidérmicas o gastrodérmicas',
                        'Desove por la pared'
                    ],
                    tieneSubclases: true
                },
                {
                    id: 'scyphozoa',
                    filoId: 'cnidaria',
                    nombre: 'Scyphozoa',
                    imagen: null,
                    caracteristicas: [
                        'Marinos',
                        'Pólipo y medusa',
                        'Medusa sin velo (acráspedota) y con ropalios (Suficiente)',
                        'Con mesénquima',
                        'Cavidad gastrovascular con tabiques en alguna etapa del ciclo de vida',
                        'Cnidocitos en la epidermis y en la gastrodermis',
                        'Gónadas gastrodérmicas'
                    ],
                    tieneSubclases: false,
                    tieneOrdenes: true
                },
                {
                    id: 'cubozoa',
                    filoId: 'cnidaria',
                    nombre: 'Cubozoa',
                    imagen: null,
                    caracteristicas: [
                        'Marinos',
                        'Pólipo y medusa',
                        'Medusa con velarium y con cuatro ropalios (Suficiente)',
                        'Tentáculos surgen de los pedalios (Suficiente)',
                        'Con mesénquima',
                        'Cavidad gastrovascular con tabiques en alguna etapa del ciclo de vida',
                        'Cnidocitos en la epidermis y en la gastrodermis',
                        'Gónadas gastrodérmicas',
                        'Brazos orales no ramificados y boca presente',
                        'Sin canales radiales',
                        'Con tabiques en el adulto'
                    ],
                    tieneSubclases: false,
                    tieneOrdenes: true
                },
                {
                    id: 'staurozoa',
                    filoId: 'cnidaria',
                    nombre: 'Staurozoa',
                    imagen: null,
                    caracteristicas: [
                        'Campana sésil con pedúnculo (Suficiente)',
                        'Con ocho agrupaciones de tentáculos marginales capitados',
                        'Brazos orales no ramificados y boca presente',
                        'Sin canales radiales',
                        'Con tabiques en el adulto',
                        'Bentónicos'
                    ],
                    tieneSubclases: false,
                    tieneOrdenes: true
                },
                {
                    id: 'anthozoa',
                    filoId: 'cnidaria',
                    nombre: 'Anthozoa',
                    imagen: null,
                    caracteristicas: [
                        'Marinos',
                        'Pólipo solamente',
                        'Pólipo con faringe (Suficiente)',
                        'Con mesénquima',
                        'Cavidad gastrovascular tabicada',
                        'Cnidocitos en la epidermis y en la gastrodermis',
                        'Gónadas gastrodérmicas',
                        'Desove por la boca'
                    ],
                    tieneSubclases: true
                }
            ];
        case 'platyhelminthes':
            return [
                {
                    id: 'turbellaria',
                    filoId: 'platyhelminthes',
                    nombre: 'Turbellaria',
                    imagen: null,
                    caracteristicas: [
                        'Vida libre, comensales o parásitos',
                        'Agua dulce, marinos o suelos húmedos',
                        'Digestivo presente (al menos boca)',
                        'Gusanos no segmentados',
                        'Pared del cuerpo con epidermis celular y ciliada',
                        'Desarrollo directo o indirecto con una larva'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'monogenea',
                    filoId: 'platyhelminthes',
                    nombre: 'Monogenea',
                    imagen: null,
                    caracteristicas: [
                        'Ecto o endoparásitos',
                        'Cuerpo cubierto por tegumento',
                        'Con proaptor y opistaptor (Suficiente)',
                        'Digestivo presente',
                        'Desarrollo indirecto con una sola larva'
                    ],
                    tieneSubclases: true
                },
                {
                    id: 'trematoda',
                    filoId: 'platyhelminthes',
                    nombre: 'Trematoda',
                    imagen: null,
                    caracteristicas: [
                        'Ecto y endoparásitos',
                        'Cuerpo cubierto por tegumento',
                        'Con una o más ventosas',
                        'Sin proaptor ni opistaptor',
                        'Desarrollo indirecto con 2 ó 3 hospederos'
                    ],
                    tieneSubclases: true
                },
                {
                    id: 'cestoda',
                    filoId: 'platyhelminthes',
                    nombre: 'Cestoda',
                    imagen: null,
                    caracteristicas: [
                        'Endoparásitos de vertebrados',
                        'Cuerpo cubierto por tegumento',
                        'Sin sistema digestivo',
                        'Desarrollo indirecto con 1 ó más hospederos'
                    ],
                    tieneSubclases: true
                }
            ];
        case 'nemertea':
            return [
                {
                    id: 'anopla',
                    filoId: 'nemertea',
                    nombre: 'Anopla',
                    imagen: null,
                    caracteristicas: [
                        'Proboscis no armada',
                        'Boca separada del poro de la proboscis',
                        'Boca localizada inmediatamente debajo o algo posterior al ganglio cerebral'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'enopla',
                    filoId: 'nemertea',
                    nombre: 'Enopla',
                    imagen: null,
                    caracteristicas: [
                        'Proboscis armada con estiletes',
                        'Boca y poro de la proboscis unidos generalmente en una abertura común',
                        'Boca localizada anterior al ganglio cerebral'
                    ],
                    tieneSubclases: false
                }
            ];
        case 'arthropoda':
            return []; // No tiene clases directamente, sino subfilos
        // Añadir más casos para otros filos...
        default:
            return [];
    }
};

// Función para obtener subclases por ID de clase
export const getSubclasesByClaseId = (filoId, claseId) => {
    if (filoId === 'cnidaria' && claseId === 'hydrozoa') {
        return [
            {
                id: 'hydroidolina',
                filoId: 'cnidaria',
                claseId: 'hydrozoa',
                nombre: 'Hydroidolina',
                imagen: null,
                caracteristicas: [
                    'Marinos o de agua dulce',
                    'Pólipo y/o medusa',
                    'Pólipo solitario o colonial',
                    'Estatocistos de origen ectodérmico'
                ],
                tieneOrdenes: true
            },
            {
                id: 'trachylina',
                filoId: 'cnidaria',
                claseId: 'hydrozoa',
                nombre: 'Trachylina',
                imagen: null,
                caracteristicas: [
                    'Marinos',
                    'Pólipo y/o medusa',
                    'Estatocistos ecto-endodérmicos'
                ],
                tieneOrdenes: true
            }
        ];
    } else if (filoId === 'cnidaria' && claseId === 'anthozoa') {
        return [
            {
                id: 'hexacorallia',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                nombre: 'Hexacorallia (=Zoantharia)',
                imagen: null,
                caracteristicas: [
                    'Con seis, ocho o más de ocho tentáculos',
                    'Con espirocistos',
                    'Mesenterios pares, usualmente en múltiplos de seis'
                ],
                tieneOrdenes: true
            },
            {
                id: 'octocorallia',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                nombre: 'Octocorallia (=Alcyonaria)',
                imagen: null,
                caracteristicas: [
                    'Pólipos con ocho tentáculos',
                    'Nematocistos en forma de cono',
                    'Con ocho mesenterios completos'
                ],
                tieneOrdenes: true
            }
        ];
    } else if (filoId === 'platyhelminthes' && claseId === 'monogenea') {
        return [
            {
                id: 'monopisthocotylea',
                filoId: 'platyhelminthes',
                claseId: 'monogenea',
                nombre: 'Monopisthocotylea',
                imagen: null,
                caracteristicas: [
                    'Opistaptor simple y único, aunque a veces dividido por septos (Suficiente)',
                    'Ventosa oral reducida o ausente'
                ],
                tieneOrdenes: false
            },
            {
                id: 'polyopisthocotylea',
                filoId: 'platyhelminthes',
                claseId: 'monogenea',
                nombre: 'Polyopisthocotylea',
                imagen: null,
                caracteristicas: [
                    'Opistaptor complejo, con múltiples ventosas (Suficiente)',
                    'Ventosa oral ausente'
                ],
                tieneOrdenes: false
            }
        ];
    } else if (filoId === 'platyhelminthes' && claseId === 'trematoda') {
        return [
            {
                id: 'digenea',
                filoId: 'platyhelminthes',
                claseId: 'trematoda',
                nombre: 'Digenea',
                imagen: null,
                caracteristicas: [
                    'Con ventosa oral y usualmente una ventosa ventral (acetábulo)',
                    'Con 2 ó 3 hospederos durante el ciclo de vida; el primer hospedero es un molusco, el último es un vertebrado'
                ],
                tieneOrdenes: false,
                tieneFamilias: true
            },
            {
                id: 'aspidogastrea',
                filoId: 'platyhelminthes',
                claseId: 'trematoda',
                nombre: 'Aspidogastrea',
                imagen: null,
                caracteristicas: [
                    'Ventosa oral ausente y ventosa ventral grande, dividida por septos como una hilera de ventosas',
                    'La mayoría con un solo hospedero (un molusco); el segundo hospedero (cuando está presente) es un pez o una tortuga'
                ],
                tieneOrdenes: false
            }
        ];
    } else if (filoId === 'platyhelminthes' && claseId === 'cestoda') {
        return [
            {
                id: 'cestodaria',
                filoId: 'platyhelminthes',
                claseId: 'cestoda',
                nombre: 'Cestodaria',
                imagen: null,
                caracteristicas: [
                    'Cuerpo aplanado sin escólex ni proglótides',
                    'Endoparásitos del digestivo o de las cavidades celómicas de peces cartilaginosos y peces óseos primitivos, menos comúnmente en tortugas'
                ],
                tieneOrdenes: false
            },
            {
                id: 'eucestoda',
                filoId: 'platyhelminthes',
                claseId: 'cestoda',
                nombre: 'Eucestoda',
                imagen: null,
                caracteristicas: [
                    'Cuerpo dividido en escólex, cuello y estróbilo (Suficiente)',
                    'Endoparásitos del digestivo de diferentes vertebrados'
                ],
                tieneOrdenes: false,
                tieneFamilias: true
            }
        ];
    }
    // Añadir más casos para otras combinaciones de filo y clase
    return [];
};

// Función para obtener órdenes por ID de subclase
export const getOrdenesBySubclaseId = (filoId, claseId, subclaseId) => {
    if (filoId === 'cnidaria' && claseId === 'hydrozoa' && subclaseId === 'hydroidolina') {
        return [
            {
                id: 'anthoathecata',
                filoId: 'cnidaria',
                claseId: 'hydrozoa',
                subclaseId: 'hydroidolina',
                nombre: 'Anthoathecata',
                imagen: null,
                caracteristicas: [
                    'Marinos o de agua dulce',
                    'Pólipo y/o medusa',
                    'Pólipos solitarios o coloniales',
                    'Pólipos sin exoesqueleto (atecado)',
                    'Medusa en forma de campana',
                    'Gónadas surgen del manubrio'
                ]
            },
            {
                id: 'leptothecata',
                filoId: 'cnidaria',
                claseId: 'hydrozoa',
                subclaseId: 'hydroidolina',
                nombre: 'Leptothecata',
                imagen: null,
                caracteristicas: [
                    'Marinos',
                    'Pólipo y medusa',
                    'Pólipo colonial tecado (Suficiente)',
                    'Pólipos con tentáculos dispuestos en un solo círculo',
                    'Medusa con campana aplanada',
                    'Gónadas en los canales radiales'
                ]
            },
            {
                id: 'siphonophorae',
                filoId: 'cnidaria',
                claseId: 'hydrozoa',
                subclaseId: 'hydroidolina',
                nombre: 'Siphonophorae',
                imagen: null,
                caracteristicas: [
                    'Marinos',
                    'Colonia polimórfica de pólipo y medusas muy modificadas',
                    'Colonia a partir de una medusa que origina el flotador',
                    'Pólipos sin tentáculos orales',
                    'Medusa nunca desarrollada como una medusa libre nadadora',
                    'Flotador globoso (Suficiente)'
                ]
            }
        ];
    } else if (filoId === 'cnidaria' && claseId === 'hydrozoa' && subclaseId === 'trachylina') {
        return [
            {
                id: 'actinulida',
                filoId: 'cnidaria',
                claseId: 'hydrozoa',
                subclaseId: 'trachylina',
                nombre: 'Actinulida',
                imagen: null,
                caracteristicas: [
                    'Pólipo solamente, solitario y semejante a una actínula. Sin medusa',
                    'Intersticiales'
                ]
            },
            {
                id: 'limnomedusae',
                filoId: 'cnidaria',
                claseId: 'hydrozoa',
                subclaseId: 'trachylina',
                nombre: 'Limnomedusae',
                imagen: null,
                caracteristicas: [
                    'Pólipo y/o medusa',
                    'Pólipos solitarios atecados, de pequeño tamaño, sin tentáculos orales',
                    'Medusa sin canales radiales'
                ]
            },
            // Añadir más órdenes según el documento...
        ];
    }
    // Añadir más casos para otras combinaciones de filo, clase y subclase
    return [];
};

// Función para obtener subfilos por ID de filo
export const getSubfilosByFiloId = (filoId) => {
    if (filoId === 'arthropoda') {
        return [
            {
                id: 'cheliceriformes',
                filoId: 'arthropoda',
                nombre: 'Cheliceriformes',
                imagen: null,
                caracteristicas: [
                    'Exoesqueleto sin impregnaciones calcáreas',
                    'Con quelíceros',
                    'Apéndices de una sola rama'
                ],
                tieneClases: true
            },
            {
                id: 'crustacea',
                filoId: 'arthropoda',
                nombre: 'Crustacea',
                imagen: null,
                caracteristicas: [
                    'Exoesqueleto con impregnaciones calcáreas',
                    'Con dos pares de antenas',
                    'Sin quelíceros',
                    'Apéndices con dos ramas en alguna etapa de la vida'
                ],
                tieneClases: true
            }
            // Añadir más subfilos si es necesario
        ];
    }
    return [];
};

// Función para obtener clases por ID de subfilo
export const getClasesBySubfiloId = (filoId, subfiloId) => {
    if (filoId === 'arthropoda' && subfiloId === 'cheliceriformes') {
        return [
            {
                id: 'pycnogonida',
                filoId: 'arthropoda',
                subfiloId: 'cheliceriformes',
                nombre: 'Pycnogonida',
                imagen: null,
                caracteristicas: [
                    'Cuerpo no dividido en tagmas reconocibles',
                    'Proboscis anterior única',
                    'Ovígeros (apéndices especiales para la cría) en los machos',
                    'Múltiples gonoporos (en el segundo segmento coxal de casi todas las patas caminadoras)'
                ],
                tieneSubclases: false
            },
            {
                id: 'chelicerata',
                filoId: 'arthropoda',
                subfiloId: 'cheliceriformes',
                nombre: 'Chelicerata',
                imagen: null,
                caracteristicas: [],
                tieneSubclases: true
            }
        ];
    } else if (filoId === 'arthropoda' && subfiloId === 'crustacea') {
        return [
            {
                id: 'remipedia',
                filoId: 'arthropoda',
                subfiloId: 'crustacea',
                nombre: 'Remipedia',
                imagen: null,
                caracteristicas: [
                    'Troglobios',
                    'Cuerpo dividido en cefalón y tronco homónomo (hasta 32 segmentos)',
                    'Tronco con un par de apéndices birramosos por segmento',
                    'Sin carapacho, pero con escudo cefálico que cubre la cabeza',
                    'Telson con ramas caudales',
                    'Dioicos'
                ],
                tieneSubclases: false
            },
            {
                id: 'cephalocarida',
                filoId: 'arthropoda',
                subfiloId: 'crustacea',
                nombre: 'Cephalocarida',
                imagen: null,
                caracteristicas: [
                    'Intersticiales',
                    'Cuerpo diminuto de menos de 4 mm dividido en una cabeza y un tronco de 19 segmentos',
                    'Sin ojos',
                    'Dos pares de antenas cortas',
                    'Apéndices solo en 9 segmentos del tronco, todos se parecen entre sí y presentan seudoepipodito (S)',
                    'Labro y labio no formando cono bucal',
                    'Último segmento abdominal sin modificaciones especiales',
                    'Hermafroditas'
                ],
                tieneSubclases: false
            },
            // Añadir más clases según el documento...
        ];
    }
    return [];
};

// Función para obtener familias por ID de subclase (para casos específicos)
// Función para obtener familias por ID de subclase (para casos específicos)
export const getFamiliasBySubclaseId = (filoId, claseId, subclaseId) => {
    if (filoId === 'platyhelminthes' && claseId === 'trematoda' && subclaseId === 'digenea') {
        return [
            {
                id: 'schistosomatidae',
                filoId: 'platyhelminthes',
                claseId: 'trematoda',
                subclaseId: 'digenea',
                nombre: 'Schistosomatidae',
                imagen: null,
                caracteristicas: [
                    'Dioicos (Suficiente)',
                    'Machos con canal ginecóforo donde se aloja la hembra',
                    'Ventosa ventral cerca de la ventosa oral',
                    'Sin faringe',
                    'Ciegos intestinales unidos posteriormente',
                    'Huevos con espina terminal o lateral',
                    'Parásitos del sistema vascular sanguíneo de aves y mamíferos'
                ]
            },
            {
                id: 'fasciolidae',
                filoId: 'platyhelminthes',
                claseId: 'trematoda',
                subclaseId: 'digenea',
                nombre: 'Fasciolidae',
                imagen: null,
                caracteristicas: [
                    'Hermafroditas',
                    'Cuerpo grande, aplanado, con forma de hoja',
                    'Ventosa ventral cerca de la ventosa oral',
                    'Ciegos intestinales muy ramificados (Suficiente)',
                    'Testículos muy ramificados',
                    'Ovario ramificado',
                    'Parásitos del hígado o intestino de mamíferos'
                ]
            },
            {
                id: 'paramphistomidae',
                filoId: 'platyhelminthes',
                claseId: 'trematoda',
                subclaseId: 'digenea',
                nombre: 'Paramphistomidae',
                imagen: null,
                caracteristicas: [
                    'Hermafroditas',
                    'Cuerpo cónico',
                    'Ventosa oral terminal o subterminal',
                    'Ventosa ventral grande, terminal o subterminal (Suficiente)',
                    'Ciegos intestinales simples',
                    'Parásitos del tracto digestivo de vertebrados'
                ]
            }
            // Añadir más familias según el documento...
        ];
    } else if (filoId === 'platyhelminthes' && claseId === 'cestoda' && subclaseId === 'eucestoda') {
        return [
            {
                id: 'taeniidae',
                filoId: 'platyhelminthes',
                claseId: 'cestoda',
                subclaseId: 'eucestoda',
                nombre: 'Taeniidae',
                imagen: null,
                caracteristicas: [
                    'Escólex con cuatro ventosas y rostelo armado con ganchos',
                    'Proglótides más anchas que largas',
                    'Poros genitales alternados irregularmente',
                    'Útero con un tronco longitudinal mediano y ramas laterales',
                    'Parásitos del intestino delgado de carnívoros',
                    'Larvas (cisticercos, cenuro o hidátide) en herbívoros u omnívoros'
                ]
            },
            {
                id: 'diphyllobothriidae',
                filoId: 'platyhelminthes',
                claseId: 'cestoda',
                subclaseId: 'eucestoda',
                nombre: 'Diphyllobothriidae',
                imagen: null,
                caracteristicas: [
                    'Escólex con dos botrios (Suficiente)',
                    'Sin rostelo ni ganchos',
                    'Proglótides más anchas que largas',
                    'Poros genitales en la superficie ventral de las proglótides',
                    'Útero en forma de roseta',
                    'Parásitos del intestino de vertebrados piscívoros'
                ]
            }
            // Añadir más familias según el documento...
        ];
    }
    return [];
};

// Datos adicionales para la sección de "Identificar Incógnita"
export const caracteristicasClaves = [
    {
        id: 'cuerpo_perforado',
        pregunta: '¿El organismo tiene el cuerpo con paredes perforadas?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: null,
                resultado: 'porifera'
            },
            {
                texto: 'No',
                siguientePregunta: 'cnidocitos'
            }
        ]
    },
    {
        id: 'cnidocitos',
        pregunta: '¿El organismo tiene cnidocitos?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: 'forma_cnidaria'
            },
            {
                texto: 'No',
                siguientePregunta: 'aparato_proboscideo'
            }
        ]
    },
    {
        id: 'forma_cnidaria',
        pregunta: '¿Qué forma tiene el organismo?',
        opciones: [
            {
                texto: 'Pólipo con faringe',
                siguientePregunta: null,
                resultado: 'anthozoa'
            },
            {
                texto: 'Medusa con velo',
                siguientePregunta: null,
                resultado: 'hydrozoa'
            },
            {
                texto: 'Medusa sin velo y con ropalios',
                siguientePregunta: null,
                resultado: 'scyphozoa'
            },
            {
                texto: 'Medusa con velarium y cuatro ropalios',
                siguientePregunta: null,
                resultado: 'cubozoa'
            },
            {
                texto: 'Campana sésil con pedúnculo',
                siguientePregunta: null,
                resultado: 'staurozoa'
            }
        ]
    },
    {
        id: 'aparato_proboscideo',
        pregunta: '¿El organismo tiene un aparato proboscídeo único situado dorsalmente al sistema digestivo?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: 'proboscis_armada',
                resultado: 'nemertea'
            },
            {
                texto: 'No',
                siguientePregunta: 'apendices_articulados'
            }
        ]
    },
    {
        id: 'proboscis_armada',
        pregunta: '¿La proboscis está armada con estiletes?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: null,
                resultado: 'enopla'
            },
            {
                texto: 'No',
                siguientePregunta: null,
                resultado: 'anopla'
            }
        ]
    },
    {
        id: 'apendices_articulados',
        pregunta: '¿El organismo tiene apéndices articulados y exoesqueleto quitinoso?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: 'exoesqueleto_calcareo',
                resultado: 'arthropoda'
            },
            {
                texto: 'No',
                siguientePregunta: 'proaptor_opistaptor'
            }
        ]
    },
    {
        id: 'exoesqueleto_calcareo',
        pregunta: '¿El exoesqueleto tiene impregnaciones calcáreas?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: null,
                resultado: 'crustacea'
            },
            {
                texto: 'No',
                siguientePregunta: 'queliceros',
                resultado: 'cheliceriformes'
            }
        ]
    },
    {
        id: 'queliceros',
        pregunta: '¿El organismo tiene quelíceros?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: null,
                resultado: 'chelicerata'
            },
            {
                texto: 'No',
                siguientePregunta: null,
                resultado: 'pycnogonida'
            }
        ]
    },
    {
        id: 'proaptor_opistaptor',
        pregunta: '¿El organismo tiene proaptor y opistaptor?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: 'opistaptor_tipo',
                resultado: 'monogenea'
            },
            {
                texto: 'No',
                siguientePregunta: 'sistema_digestivo'
            }
        ]
    },
    {
        id: 'opistaptor_tipo',
        pregunta: '¿Cómo es el opistaptor?',
        opciones: [
            {
                texto: 'Simple y único',
                siguientePregunta: null,
                resultado: 'monopisthocotylea'
            },
            {
                texto: 'Complejo con múltiples ventosas',
                siguientePregunta: null,
                resultado: 'polyopisthocotylea'
            }
        ]
    },
    {
        id: 'sistema_digestivo',
        pregunta: '¿El organismo tiene sistema digestivo?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: 'ventosas'
            },
            {
                texto: 'No',
                siguientePregunta: 'cuerpo_dividido',
                resultado: 'cestoda'
            }
        ]
    },
    {
        id: 'ventosas',
        pregunta: '¿El organismo tiene ventosas?',
        opciones: [
            {
                texto: 'Sí, una ventosa oral y una ventosa ventral',
                siguientePregunta: null,
                resultado: 'digenea'
            },
            {
                texto: 'Sí, una ventosa ventral grande dividida por septos',
                siguientePregunta: null,
                resultado: 'aspidogastrea'
            },
            {
                texto: 'No tiene ventosas',
                siguientePregunta: null,
                resultado: 'turbellaria'
            }
        ]
    },
    {
        id: 'cuerpo_dividido',
        pregunta: '¿El cuerpo está dividido en escólex, cuello y estróbilo?',
        opciones: [
            {
                texto: 'Sí',
                siguientePregunta: null,
                resultado: 'eucestoda'
            },
            {
                texto: 'No, es aplanado sin escólex ni proglótides',
                siguientePregunta: null,
                resultado: 'cestodaria'
            }
        ]
    }
];

// Función para obtener el siguiente paso en la clave dicotómica
export const getSiguientePregunta = (preguntaActualId, respuesta) => {
    const preguntaActual = caracteristicasClaves.find(p => p.id === preguntaActualId);
    if (!preguntaActual) return null;

    const opcionSeleccionada = preguntaActual.opciones.find(o => o.texto === respuesta);
    if (!opcionSeleccionada) return null;

    if (opcionSeleccionada.resultado) {
        return {
            tipo: 'resultado',
            id: opcionSeleccionada.resultado
        };
    } else if (opcionSeleccionada.siguientePregunta) {
        return {
            tipo: 'pregunta',
            id: opcionSeleccionada.siguientePregunta
        };
    }

    return null;
};

// Función para obtener información de un taxón por su ID
export const getTaxonById = (taxonId) => {
    // Buscar en filos
    let taxon = filos.find(f => f.id === taxonId);
    if (taxon) return { ...taxon, tipo: 'filo' };

    // Buscar en todas las clases de todos los filos
    for (const filo of filos) {
        const clases = getClasesByFiloId(filo.id);
        taxon = clases.find(c => c.id === taxonId);
        if (taxon) return { ...taxon, tipo: 'clase' };

        // Buscar en todas las subclases de todas las clases
        for (const clase of clases) {
            const subclases = getSubclasesByClaseId(filo.id, clase.id);
            taxon = subclases.find(sc => sc.id === taxonId);
            if (taxon) return { ...taxon, tipo: 'subclase' };
        }
    }

    return null;
};
