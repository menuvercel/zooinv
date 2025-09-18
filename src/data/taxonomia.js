export const filos = [
    {
        id: 'placozoa',
        nombre: 'Placozoa',
        imagen: require('../../assets/images/filos/placozoa.jpg'),
        imagenes: [
            require('../../assets/images/filos/placozoa.jpg')
        ],
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
        imagenes: [
            require('../../assets/images/filos/porifera.jpg'),
            require('../../assets/images/filos/porifera2.jpg'),
            require('../../assets/images/filos/porifera3.jpg')
        ],
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
        imagen: require('../../assets/images/filos/cnidaria.jpg'),
        imagenes: [
            require('../../assets/images/filos/cnidaria.jpg'),
            require('../../assets/images/filos/cnidaria2.jpg'),
            require('../../assets/images/filos/cnidaria3.jpg'),
            require('../../assets/images/filos/cnidaria4.jpg'),
            require('../../assets/images/filos/cnidaria5.jpg'),
            require('../../assets/images/filos/cnidaria6.jpg'),
        ],
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
        imagen: require('../../assets/images/filos/platyhelminthes.jpg'),
        imagenes: [
            require('../../assets/images/filos/platyhelminthes.jpg'),
        ],
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
        imagen: require('../../assets/images/filos/nemertea.jpg'),
        imagenes: [
            require('../../assets/images/filos/nemertea.jpg')
        ],
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
    {
        id: 'rhombozoa',
        nombre: 'Rhombozoa',
        imagen: require('../../assets/images/filos/rhombozoa.jpg'),
        imagenes: [
            require('../../assets/images/filos/rhombozoa.jpg')
        ],
        caracteristicas: [
            'Bilaterales',
            'Parásitos',
            'Protostomados',
            'Acelomados',
            'Con una capa de células somático-nutritivas que rodea a células reproductivas'
        ],
        tieneClases: false
    },
    {
        id: 'orthonectida',
        nombre: 'Orthonectida',
        imagen: require('../../assets/images/filos/orthonectida.jpg'),
        imagenes: [
            require('../../assets/images/filos/orthonectida.jpg')
        ],
        caracteristicas: [
            'Parásitos de otros invertebrados',
            'Bilaterales',
            'Protostomados',
            'Acelomados',
            'Sin digestivo ni sistema nervioso. No hay órganos internos',
            'Cuerpo ciliado',
            'Generalmente dioicos'
        ],
        tieneClases: false
    },
    {
        id: 'gnathostomulida',
        nombre: 'Gnathostomulida',
        imagen: require('../../assets/images/filos/gnathostomulida.jpg'),
        imagenes: [
            require('../../assets/images/filos/gnathostomulida.jpg')
        ],
        caracteristicas: [
            'Bilaterales',
            'Acelomados',
            'Epitelio con células monociliadas con collar',
            'Digestivo incompleto. Boca medio-ventral y subterminal',
            'Placa pinnada en el labio ventral de la boca',
            'Con bulbo faríngeo complejo que presenta un aparato mandibular cuticular (Suficiente)'
        ],
        tieneClases: false
    },
    {
        id: 'cycliophora',
        nombre: 'Cycliophora',
        imagen: require('../../assets/images/filos/cycliophora.jpg'),
        imagenes: [
            require('../../assets/images/filos/cycliophora.jpg')
        ],
        caracteristicas: [
            'Cuerpo dividido en cono bucal, tronco y tallo adhesivo (Suficiente)',
            'Sistema digestivo completo en forma de U. Ano que desemboca en el tronco',
            'Con anillo bucal ciliado',
            'Marinos',
            'Acelomados',
            'Dioicos'
        ],
        tieneClases: false
    },
    {
        id: 'micrognathozoa',
        nombre: 'Micrognathozoa',
        imagen: require('../../assets/images/filos/micrognathozoa.jpg'),
        imagenes: [
            require('../../assets/images/filos/micrognathozoa.jpg')
        ],
        caracteristicas: [
            'Marinos o de agua dulce',
            'Microscópicos',
            'Bilaterales',
            'No segmentados',
            'Acelomados',
            'Cuerpo dividido en cabeza, acordion (=tórax) y abdomen',
            'Sistema digestivo incompleto',
            'Faringe con un complejo aparato mandibular que incluye 4 grupos de mandíbulas (S)'
        ],
        tieneClases: false
    },
    {
        id: 'entoprocta',
        nombre: 'Entoprocta',
        imagen: require('../../assets/images/filos/entoprocta.jpg'),
        imagenes: [
            require('../../assets/images/filos/entoprocta.jpg')
        ],
        caracteristicas: [
            'Marinos o de agua dulce',
            'Sésiles. Solitarios o coloniales',
            'Digestivo completo en forma de U',
            'Anillo de tentáculos que encierra la boca y el ano (Suficiente)',
            'Un par de protonefridios'
        ],
        tieneClases: false
    },
    {
        id: 'nematoda',
        nombre: 'Nematoda (Nemata)',
        imagen: require('../../assets/images/filos/nematoda.jpg'),
        imagenes: [
            require('../../assets/images/filos/nematoda.jpg'),
        ],
        caracteristicas: [
            'Blastocelomados',
            'Digestivo completo',
            'Faringe con lumen triangular',
            'Con eutelia',
            'No segmentados',
            'Cuerpo cilíndrico al menos un sexo',
            'Sólo músculos longitudinales',
            'Células musculares con una región contráctil y otra no',
            'Excretor glandular o tubular',
            'Gónadas tubulares',
            'Cloaca en el macho'
        ],
        tieneClases: true
    },
    {
        id: 'acanthocephala',
        nombre: 'Acanthocephala',
        imagen: require('../../assets/images/filos/acanthocephala.jpg'),
        imagenes: [
            require('../../assets/images/filos/acanthocephala.jpg')
        ],
        caracteristicas: [
            'Bilaterales',
            'Blastocelomados',
            'Endoparásitos',
            'Cuerpo del adulto con proboscis espinosa, cuello y tronco (Suficiente)',
            'Sin sistema digestivo',
            'Con sistema lagunar (Suficiente)'
        ],
        tieneClases: false
    },
    {
        id: 'gastrotricha',
        nombre: 'Gastrotricha',
        imagen: require('../../assets/images/filos/gastrotricha.jpg'),
        imagenes: [
            require('../../assets/images/filos/gastrotricha.jpg')
        ],
        caracteristicas: [
            'Marinos o de agua dulce',
            'Epitelio ventral ciliado',
            'Cutícula formando placas o espinas',
            'Faringe con lumen triangular',
            'Excretor protonefridial',
            'Hermafroditas'
        ],
        tieneClases: false
    },
    {
        id: 'nematomorpha',
        nombre: 'Nematomorpha',
        imagen: require('../../assets/images/filos/nematomorpha.jpg'),
        imagenes: [
            require('../../assets/images/filos/nematomorpha.jpg')
        ],
        caracteristicas: [
            'Bilaterales',
            'Blastocelomados',
            'Protostomados',
            'Marinos, agua dulce o terrestres',
            'Cuerpo filamentoso y muy largo',
            'Sistema digestivo vestigial',
            'Cloaca en ambos sexos',
            'Gónadas tubulares',
            'Epitelio formado por líneas longitudinales internas'
        ],
        tieneClases: false
    },
    {
        id: 'kinorhyncha',
        nombre: 'Kinorhyncha',
        imagen: require('../../assets/images/filos/kinorhyncha.jpg'),
        imagenes: [
            require('../../assets/images/filos/kinorhyncha.jpg')
        ],
        caracteristicas: [
            'Bilaterales',
            'Blastocelomados',
            'Protostomados',
            'Marinos e intersticiales',
            'Cutícula dividida en 13 segmentos o zonitas (Suficiente)',
            'Epidermis sin cilios',
            'Hay mudas en la cutícula',
            'Sistema digestivo completo',
            'Dioicos'
        ],
        tieneClases: false
    },
    {
        id: 'loricifera',
        nombre: 'Loricifera',
        imagen: require('../../assets/images/filos/loricifera.jpg'),
        imagenes: [
            require('../../assets/images/filos/loricifera.jpg')
        ],
        caracteristicas: [
            'Bilaterales',
            'Protostomados',
            'Blastocelomados',
            'Marinos',
            'Cuerpo dividido en cabeza, cuello y tórax, todos retraíbles en el abdomen',
            'Abdomen recubierto por lórica cuticular',
            'Sistema digestivo completo',
            'Con un par de protonefridios',
            'Dioicos',
            'Boca sobre un cono oral rodeado por estiletes (Suficiente)'
        ],
        tieneClases: false
    },
    {
        id: 'rotifera',
        nombre: 'Rotifera',
        imagen: require('../../assets/images/filos/rotifera.jpg'),
        imagenes: [
            require('../../assets/images/filos/rotifera.jpg'),
        ],
        caracteristicas: [
            'Bilaterales',
            'Blastocelomados',
            'Marinos, de agua dulce o terrestres húmedo',
            'Sistema digestivo completo',
            'Protostomados',
            'Con corona ciliar anterior (Suficiente)',
            'Faringe (mástax) con 7 piezas cuticulares (trophi) (Suficiente)',
            'Con protonefridios',
            'Dioicos'
        ],
        tieneClases: false
    },
    {
        id: 'priapulida',
        nombre: 'Priapulida',
        imagen: require('../../assets/images/filos/priapulida.jpg'),
        imagenes: [
            require('../../assets/images/filos/priapulida.jpg')
        ],
        caracteristicas: [
            'Bilaterales',
            'Marinos',
            'Blastocelomados',
            'Vermiformes y cilíndricos',
            'Sistema digestivo completo',
            'Protostomados',
            'Cuerpo formado por un introverto, un largo tronco y a veces uno o dos apéndices caudales (Suficiente)',
            'Dioicos',
            'Sin sistema circulatorio'
        ],
        tieneClases: false
    },
    {
        id: 'mollusca',
        nombre: 'Mollusca',
        imagen: require('../../assets/images/filos/mollusca.jpg'),
        imagenes: [
            require('../../assets/images/filos/mollusca.jpg'),
        ],
        caracteristicas: [
            'Bilateralmente simétricos o asimétricos secundariamente',
            'Protostomados celomados',
            'Celoma reducido a vestigios alrededor de los nefridios, corazón, gónadas y parte del sistema digestivo',
            'Cuerpo cubierto por el manto. Cavidad paleal que aloja las branquias, osfradios, nefridioporos, gonoporos y ano',
            'Con espículas calcáreas epidérmicas, o con concha externa, interna o ausente',
            'Pie musculoso bien definido o sin él'
        ],
        tieneClases: true
    },
    {
        id: 'annelida',
        nombre: 'Annelida',
        imagen: require('../../assets/images/filos/annelida.jpg'),
        imagenes: [
            require('../../assets/images/filos/annelida.jpg'),
        ],
        caracteristicas: [
            'Marinos, terrestres o dulceacuícolas',
            'Metamerizados',
            'Bilaterales',
            'Vermiformes',
            'Sin apéndices articulados',
            'Respiración cutánea y/o branquial',
            'Sistema digestivo completo',
            'Sistema circulatorio cerrado'
        ],
        tieneClases: true
    },
    {
        id: 'echiura',
        nombre: 'Echiura',
        imagen: require('../../assets/images/filos/echiura.jpg'),
        imagenes: [
            require('../../assets/images/filos/echiura.jpg')
        ],
        caracteristicas: [
            'Marinos, bentónicos',
            'Bilaterales',
            'Gusanos no segmentados con el cuerpo dividido en una proboscis preoral no retraible y un tronco (S)',
            'Sistema digestivo completo con el ano en posición terminal'
        ],
        tieneClases: false
    },
    {
        id: 'sipunculida',
        nombre: 'Sipunculida',
        imagen: require('../../assets/images/filos/sipunculida.jpg'),
        imagenes: [
            require('../../assets/images/filos/sipunculida.jpg')
        ],
        caracteristicas: [
            'Marinos, bentónicos',
            'Bilaterales',
            'Gusanos no segmentados con el cuerpo dividido en introverto retraible y tronco (S)',
            'Sistema digestivo completo con el ano en posición dorsal',
            'Boca rodeada de tentáculos'
        ],
        tieneClases: false
    },
    {
        id: 'arthropoda',
        nombre: 'Arthropoda',
        imagen: require('../../assets/images/filos/arthropoda.jpg'),
        imagenes: [
            require('../../assets/images/filos/arthropoda.jpg'),
        ],
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
                    imagen: require('../../assets/images/clases/calcarea.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/calcarea.jpg'),
                    ],
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
                    imagen: require('../../assets/images/clases/hexactinellida.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/hexactinellida.jpg'),
                        require('../../assets/images/clases/hexactinellida2.jpg'),
                    ],
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
                    imagen: require('../../assets/images/clases/demospongiae.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/demospongiae.jpg'),
                        require('../../assets/images/clases/demospongiae2.jpg'),
                    ],
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
                    imagen: require('../../assets/images/clases/homoscleromorpha.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/homoscleromorpha.jpg'),
                        require('../../assets/images/clases/homoscleromorpha2.jpg'),
                    ],
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
                    imagen: require('../../assets/images/clases/hydrozoa.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/hydrozoa.jpg'),
                        require('../../assets/images/clases/hydrozoa2.jpg'),
                        require('../../assets/images/clases/hydrozoa3.jpg'),
                        require('../../assets/images/clases/hydrozoa4.jpg')
                    ],
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
                    imagen: require('../../assets/images/clases/scyphozoa.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/scyphozoa.jpg'),
                    ],
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
                    imagen: require('../../assets/images/clases/cubozoa.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/cubozoa.jpg')
                    ],
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
                    imagen: require('../../assets/images/clases/staurozoa.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/staurozoa.jpg')
                    ],
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
                    imagen: require('../../assets/images/clases/anthozoa.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/anthozoa.jpg'),
                    ],
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
                    imagen: require('../../assets/images/clases/turbellaria.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/turbellaria.jpg')
                    ],
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
                    imagen: require('../../assets/images/clases/monogenea.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/monogenea.jpg'),
                        require('../../assets/images/clases/monogenea2.jpg')
                    ],
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
                    imagen: require('../../assets/images/clases/trematoda.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/trematoda.jpg'),
                        require('../../assets/images/clases/trematoda2.jpg')
                    ],
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
                    imagen: require('../../assets/images/clases/cestoda.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/cestoda.jpg'),
                    ],
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
                    imagen: require('../../assets/images/clases/anopla.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/anopla.jpg')
                    ],
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
                    imagen: require('../../assets/images/clases/enopla.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/enopla.jpg')
                    ],
                    caracteristicas: [
                        'Proboscis armada con estiletes',
                        'Boca y poro de la proboscis unidos generalmente en una abertura común',
                        'Boca localizada anterior al ganglio cerebral'
                    ],
                    tieneSubclases: false
                }
            ];
        case 'nematoda':
            return [
                {
                    id: 'adenophorea',
                    filoId: 'nematoda',
                    nombre: 'Adenophorea (=Aphasmida)',
                    imagen: require('../../assets/images/clases/adenophorea.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/adenophorea.jpg')
                    ],
                    caracteristicas: [
                        'Con anfidios de forma variable detrás de los labios',
                        'Sin fásmidos',
                        'Especies de vida libre fundamentalmente, algunas parásitas'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'secernentea',
                    filoId: 'nematoda',
                    nombre: 'Secernentea (=Phasmida)',
                    imagen: require('../../assets/images/clases/secernentea.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/secernentea.jpg')
                    ],
                    caracteristicas: [
                        'Con anfidios en forma de poro en los labios laterales',
                        'Con fásmidos (Suficiente)',
                        'Especies parásitas fundamentalmente, algunas terrestres de vida libre'
                    ],
                    tieneSubclases: false
                }
            ];
        case 'mollusca':
            return [
                {
                    id: 'aplacophora',
                    filoId: 'mollusca',
                    nombre: 'Aplacophora',
                    imagen: require('../../assets/images/clases/aplacophora.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/aplacophora.jpg')
                    ],
                    caracteristicas: [
                        'Vermiformes',
                        'Sin concha',
                        'Pie ausente o modificado en los rebordes del manto',
                        'Cavidad paleal en el extremo posterior',
                        'Con rádula'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'caudofoveata',
                    filoId: 'mollusca',
                    nombre: 'Caudofoveata',
                    imagen: require('../../assets/images/clases/caudofoveata.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/caudofoveata.jpg')
                    ],
                    caracteristicas: [
                        'Vermiformes',
                        'Sin concha',
                        'Sin pie',
                        'Con una cutícula quitinosa y espículas imbricadas, similares a escamas'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'monoplacophora',
                    filoId: 'mollusca',
                    nombre: 'Monoplacophora',
                    imagen: require('../../assets/images/clases/monoplacophora.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/monoplacophora.jpg')
                    ],
                    caracteristicas: [
                        'Concha de una pieza en forma de gorra frígea, siempre con simetría bilateral',
                        'Pie plano y ventral',
                        'Cavidad paleal en forma de surco',
                        'Con rádula y órgano subradular'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'polyplacophora',
                    filoId: 'mollusca',
                    nombre: 'Polyplacophora',
                    imagen: require('../../assets/images/clases/polyplacophora.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/polyplacophora.jpg')
                    ],
                    caracteristicas: [
                        'Concha con ocho placas transversales imbricadas',
                        'Pie ancho y plano, adaptado a la fijación',
                        'Cavidad paleal en forma de surco',
                        'Con rádula y órgano subradular'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'bivalvia',
                    filoId: 'mollusca',
                    nombre: 'Bivalvia',
                    imagen: require('../../assets/images/clases/bivalvia.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/bivalvia.jpg'),
                    ],
                    caracteristicas: [
                        'Concha con dos valvas con dientes, charnela y umbo; pueden ser iguales o no',
                        'Pie comprimido o ausente',
                        'Cavidad paleal con formación de sifones',
                        'Sin rádula'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'scaphopoda',
                    filoId: 'mollusca',
                    nombre: 'Scaphopoda',
                    imagen: require('../../assets/images/clases/scaphopoda.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/scaphopoda.jpg')
                    ],
                    caracteristicas: [
                        'Concha tubular cilíndrica, cónica y con ambos extremos abiertos',
                        'Pie en forma de cono para el anclaje',
                        'Gran cavidad del manto en región dorsal',
                        'Rádula desarrollada'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'cephalopoda',
                    filoId: 'mollusca',
                    nombre: 'Cephalopoda',
                    imagen: require('../../assets/images/clases/cephalopoda.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/cephalopoda.jpg'),
                    ],
                    caracteristicas: [
                        'Concha externa, interna o ausente. Cuando es externa, bien desarrollada y plano espiral simétrica',
                        'Pie modificado en brazos y tentáculos',
                        'Cavidad paleal',
                        'Rádula modificado como lengua'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'gastropoda',
                    filoId: 'mollusca',
                    nombre: 'Gastropoda (Gasteropoda)',
                    imagen: require('../../assets/images/clases/gastropoda.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/gastropoda.jpg'),
                    ],
                    caracteristicas: [
                        'Concha muy variada, cónica, asimétrica, plano espiral, reducida o ausente',
                        'Pie variable en forma y función',
                        'Cavidad paleal bien desarrollada',
                        'Presencia de rádula como condición primaria (a veces se pierde en el adulto) y sin órgano subradular'
                    ],
                    tieneSubclases: true
                }
            ];
        case 'annelida':
            return [
                {
                    id: 'polychaeta',
                    filoId: 'annelida',
                    nombre: 'Polychaeta',
                    imagen: require('../../assets/images/clases/polychaeta.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/polychaeta.jpg'),
                    ],
                    caracteristicas: [
                        'Generalmente marinos',
                        'Número de segmentos variable',
                        'Segmentos no subdivididos externamente',
                        'Sin clitelo',
                        'Con o sin gonoporos',
                        'Sin ventosas',
                        'Celoma amplio'
                    ],
                    tieneSubclases: false
                },
                {
                    id: 'clitellata',
                    filoId: 'annelida',
                    nombre: 'Clitellata',
                    imagen: require('../../assets/images/clases/clitellata.jpg'),
                    imagenes: [
                        require('../../assets/images/clases/clitellata.jpg')
                    ],
                    caracteristicas: [
                        'Sin parápodos',
                        'Setas muy reducidas o ausentes',
                        'Hermafroditas',
                        'Con clitelo en la época de reproducción',
                        'Desarrollo directo',
                        'Terrestres, dulceacuícolas o marinos'
                    ],
                    tieneSubclases: true
                }
            ];
        case 'arthropoda':
            return []; // No tiene clases directamente, sino subfilos
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
                imagen: require('../../assets/images/subclases/hydroidolina.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/hydroidolina.jpg')
                ],
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
                imagen: require('../../assets/images/subclases/trachylina.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/trachylina.jpg')
                ],
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
                imagen: require('../../assets/images/subclases/hexacorallia.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/hexacorallia.jpg')
                ],
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
                imagen: require('../../assets/images/subclases/octocorallia.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/octocorallia.jpg')
                ],
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
                imagen: require('../../assets/images/subclases/monopisthocotylea.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/monopisthocotylea.jpg'),
                    require('../../assets/images/subclases/monopisthocotylea2.jpg')
                ],
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
                imagen: require('../../assets/images/subclases/polyopisthocotylea.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/polyopisthocotylea.jpg'),
                    require('../../assets/images/subclases/polyopisthocotylea2.jpg')
                ],
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
                imagen: require('../../assets/images/subclases/digenea.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/digenea.jpg'),
                    require('../../assets/images/subclases/digenea2.jpg')
                ],
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
                imagen: require('../../assets/images/subclases/aspidogastrea.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/aspidogastrea.jpg')
                ],
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
                imagen: require('../../assets/images/subclases/cestodaria.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/cestodaria.jpg')
                ],
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
                imagen: require('../../assets/images/subclases/eucestoda.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/eucestoda.jpg')
                ],
                caracteristicas: [
                    'Cuerpo dividido en escólex, cuello y estróbilo (Suficiente)',
                    'Endoparásitos del digestivo de diferentes vertebrados'
                ],
                tieneOrdenes: false,
                tieneFamilias: true
            }
        ];
    } else if (filoId === 'mollusca' && claseId === 'gastropoda') {
        return [
            {
                id: 'prosobranchia',
                filoId: 'mollusca',
                claseId: 'gastropoda',
                nombre: 'Prosobranchia',
                imagen: require('../../assets/images/subclases/prosobranchia.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/prosobranchia.jpg')
                ],
                caracteristicas: [
                    'Con torsión',
                    'Cavidad paleal encima de la cabeza y desplazada lateralmente',
                    'Con concha',
                    'Pie con opérculo',
                    'Marinos o dulceacuícolas'
                ],
                tieneOrdenes: false
            },
            {
                id: 'opisthobranchia',
                filoId: 'mollusca',
                claseId: 'gastropoda',
                nombre: 'Opisthobranchia',
                imagen: require('../../assets/images/subclases/opisthobranchia.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/opisthobranchia.jpg')
                ],
                caracteristicas: [
                    'Con detorsión',
                    'Concha con tendencia a la reducción o desaparición',
                    'Marinos'
                ],
                tieneOrdenes: false
            },
            {
                id: 'pulmonata',
                filoId: 'mollusca',
                claseId: 'gastropoda',
                nombre: 'Pulmonata',
                imagen: require('../../assets/images/subclases/pulmonata.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/pulmonata.jpg')
                ],
                caracteristicas: [
                    'Torsión. Sistema nervioso con simetría bilateral secundaria por acortamiento de conectivo',
                    'Cavidad paleal transformada en estructuras respiratorias',
                    'Terrestres, dulceacuícolas y marinos'
                ],
                tieneOrdenes: false
            }
        ];
    } else if (filoId === 'annelida' && claseId === 'clitellata') {
        return [
            {
                id: 'oligochaeta',
                filoId: 'annelida',
                claseId: 'clitellata',
                nombre: 'Oligochaeta',
                imagen: require('../../assets/images/subclases/oligochaeta.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/oligochaeta.jpg')
                ],
                caracteristicas: [
                    'Número de segmentos variable',
                    'Segmentos no subdivididos externamente',
                    'Con gonoporos',
                    'Sin ventosas',
                    'Celoma amplio'
                ],
                tieneOrdenes: false
            },
            {
                id: 'hirudinoidea',
                filoId: 'annelida',
                claseId: 'clitellata',
                nombre: 'Hirudinoidea',
                imagen: require('../../assets/images/subclases/hirudinoidea.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/hirudinoidea.jpg')
                ],
                caracteristicas: [
                    'Con número fijo de segmentos',
                    'Segmentos subdivididos externamente',
                    'Con gonoporos',
                    'Con ventosas',
                    'Celoma reducido'
                ],
                tieneOrdenes: false
            }
        ];
    } else if (filoId === 'arthropoda' && claseId === 'chelicerata') {
        return [
            {
                id: 'merostomata',
                filoId: 'arthropoda',
                claseId: 'chelicerata',
                subfiloId: 'cheliceriformes',
                nombre: 'Merostomata',
                imagen: require('../../assets/images/subclases/merostomata.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/merostomata.jpg')
                ],
                caracteristicas: [
                    'Prosoma cubierto por un gran carapacho',
                    'Ojos compuestos usualmente reducidos',
                    'Pedipalpos como patas caminadoras',
                    'Opistosoma dividido en mesosoma y metasoma dividido o no',
                    'Apéndices en forma de aleta, como branquias en libro',
                    'Telson largo y puntiagudo'
                ],
                tieneOrdenes: true
            },
            {
                id: 'arachnida',
                filoId: 'arthropoda',
                claseId: 'chelicerata',
                subfiloId: 'cheliceriformes',
                nombre: 'Arachnida',
                imagen: require('../../assets/images/subclases/arachnida.jpg'),
                imagenes: [
                    require('../../assets/images/subclases/arachnida.jpg'),
                ],
                caracteristicas: [
                    'Quelicerados sin branquias en libro'
                ],
                tieneOrdenes: true
            }
        ];
    }
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
                imagen: require('../../assets/images/ordenes/anthoathecata.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/anthoathecata.jpg')
                ],
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
                imagen: require('../../assets/images/ordenes/leptothecata.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/leptothecata.jpg')
                ],
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
                imagen: require('../../assets/images/ordenes/siphonophorae.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/siphonophorae.jpg')
                ],
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
                imagen: require('../../assets/images/ordenes/actinulida.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/actinulida.jpg'),
                    require('../../assets/images/ordenes/actinulida2.jpg')
                ],
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
                imagen: require('../../assets/images/ordenes/limnomedusae.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/limnomedusae.jpg')
                ],
                caracteristicas: [
                    'Pólipo y/o medusa',
                    'Pólipos solitarios atecados, de pequeño tamaño, sin tentáculos orales',
                    'Medusa sin canales radiales'
                ]
            },
            {
                id: 'narcomedusae',
                filoId: 'cnidaria',
                claseId: 'hydrozoa',
                subclaseId: 'trachylina',
                nombre: 'Narcomedusae',
                imagen: require('../../assets/images/ordenes/narcomedusae.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/narcomedusae.jpg')
                ],
                caracteristicas: [
                    'Medusa solamente. Pólipo reducido o ausente',
                    'Campana aplanada con borde festonado',
                    'Tentáculos surgen de la exumbrela',
                    'Carece de manubrio',
                    'Gónadas en la base de la cavidad gastrovascular'
                ]
            },
            {
                id: 'trachymedusae',
                filoId: 'cnidaria',
                claseId: 'hydrozoa',
                subclaseId: 'trachylina',
                nombre: 'Trachymedusae',
                imagen: require('../../assets/images/ordenes/trachymedusae.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/trachymedusae.jpg'),
                    require('../../assets/images/ordenes/trachymedusae2.jpg'),
                    require('../../assets/images/ordenes/trachymedusae3.jpg')
                ],
                caracteristicas: [
                    'Medusa solamente. Pólipo ausente',
                    'Campana aplanada con el borde entero',
                    'Con 4, 6 u 8 canales radiales',
                    'Gónadas en los canales radiales'
                ]
            }
        ];
    } else if (filoId === 'cnidaria' && claseId === 'scyphozoa') {
        return [
            {
                id: 'coronatae',
                filoId: 'cnidaria',
                claseId: 'scyphozoa',
                nombre: 'Coronatae',
                imagen: require('../../assets/images/ordenes/coronatae.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/coronatae.jpg')
                ],
                caracteristicas: [
                    'Más de cuatro tentáculos marginales ',
                    'Campana con surco exumbrelar periférico (Suficiente)',
                    'Brazos orales no ramificados y boca presente',
                    'Sin canales radiales',
                    'Con tabiques en el adulto'
                ]
            },
            {
                id: 'semaeostomeae',
                filoId: 'cnidaria',
                claseId: 'scyphozoa',
                nombre: 'Semaeostomeae',
                imagen: require('../../assets/images/ordenes/semaeostomeae.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/semaeostomeae.jpg')
                ],
                caracteristicas: [
                    'Campana como plato',
                    'Numerosos tentáculos marginales',
                    'Brazos orales no ramificados y boca presente ',
                    'Con canales radiales',
                    'Sin tabiques en el adulto (Suficiente)'
                ]
            },
            {
                id: 'rhizostomeae',
                filoId: 'cnidaria',
                claseId: 'scyphozoa',
                nombre: 'Rhizostomeae',
                imagen: require('../../assets/images/ordenes/rhizostomeae.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/rhizostomeae.jpg')
                ],
                caracteristicas: [
                    'Campana como plato ',
                    'Sin tentáculos marginales (Suficiente) ',
                    'Brazos orales ramificados y boca obliterada (Suficiente) ',
                    'Con canales radiales ',
                    'Con tabiques en el adulto'
                ]
            },
            {
                id: 'stauromedusae',
                filoId: 'cnidaria',
                claseId: 'scyphozoa',
                nombre: 'Stauromedusae',
                imagen: require('../../assets/images/ordenes/stauromedusae.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/stauromedusae.jpg')
                ],
                caracteristicas: [
                    'Medusa sésil con pedúnculo',
                    'Tentáculos capitados en 8 grupos',
                    'Sin fase pólipo'
                ]
            }
        ];
    } else if (filoId === 'cnidaria' && claseId === 'cubozoa') {
        return [
            {
                id: 'carybdeida',
                filoId: 'cnidaria',
                claseId: 'cubozoa',
                nombre: 'Carybdeida',
                imagen: require('../../assets/images/ordenes/carybdeida.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/carybdeida.jpg')
                ],
                caracteristicas: [
                    'Campana cúbica ',
                    'Con cuatro tentáculos marginales o con grupos de dos o tres tentáculos',
                    'Sin sáculos gástricos'                    
                ]
            },
            {
                id: 'chirodropida',
                filoId: 'cnidaria',
                claseId: 'cubozoa',
                nombre: 'Chirodropida',
                imagen: require('../../assets/images/ordenes/chirodropida.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/chirodropida.jpg')
                ],
                caracteristicas: [
                    'Campana cúbica',
                    'Con cuatro grupos de muchos tentáculos marginales',
                    'Con sáculos gástricos'
                ]
            }
        ];
    } else if (filoId === 'cnidaria' && claseId === 'staurozoa') {
        return [
            {
                id: 'stauromedusida',
                filoId: 'cnidaria',
                claseId: 'staurozoa',
                nombre: 'Stauromedusida',
                imagen: require('../../assets/images/ordenes/stauromedusida.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/stauromedusida.jpg')
                ],
                caracteristicas: [
                    'Campana sésil con pedúnculo',
                    'Con ocho agrupaciones de tentáculos marginales capitados',
                    'Brazos orales no ramificados y boca presente',
                    'Sin canales radiales',
                    'Con tabiques en el adulto',
                    'Bentónicos'
                ]
            }
        ];
    } else if (filoId === 'cnidaria' && claseId === 'anthozoa' && subclaseId === 'hexacorallia') {
        return [
            {
                id: 'actiniaria',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                subclaseId: 'hexacorallia',
                nombre: 'Actiniaria',
                imagen: require('../../assets/images/ordenes/actiniaria.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/actiniaria.jpg')
                ],
                caracteristicas: [
                    'Solitarios',
                    'Sin esqueleto',
                    'Base del pólipo en forma de disco',
                    'Anémonas'
                ]
            },
            {
                id: 'antipatharia',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                subclaseId: 'hexacorallia',
                nombre: 'Antipatharia',
                imagen: require('../../assets/images/ordenes/antipatharia.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/antipatharia.jpg')
                ],
                caracteristicas: [
                    'Pólipos cortos ',
                    'Colonias erectas arborescentes ',
                    'Seis u ocho tentáculos (Suficiente) ',
                    'Con dos sifonoglifos ',
                    'Tabiques no hexámeros ',
                    'Tabiques completos e incompletos ',
                    'Endoesqueleto formado por un eje córneo con espinas y de color negro o pardo (Suficiente)'
                ]
            },
            {
                id: 'ceriantharia',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                subclaseId: 'hexacorallia',
                nombre: 'Ceriantharia',
                imagen: require('../../assets/images/ordenes/ceriantharia.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/ceriantharia.jpg')
                ],
                caracteristicas: [
                    'Solitarios',
                    'Sin esqueleto',
                    'Dos círculos de tentáculos',
                    'Viven en tubos membranosos'
                ]
            },
            {
                id: 'corallimorpharia',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                subclaseId: 'hexacorallia',
                nombre: 'Corallimorpharia',
                imagen: require('../../assets/images/ordenes/corallimorpharia.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/corallimorpharia.jpg')
                ],
                caracteristicas: [
                    'Solitarios o coloniales',
                    'Sin esqueleto',
                    'Tentáculos huecos',
                    'Disco oral amplio'
                ]
            },
            {
                id: 'scleractinia',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                subclaseId: 'hexacorallia',
                nombre: 'Scleractinia',
                imagen: require('../../assets/images/ordenes/scleractinia.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/scleractinia.jpg'),
                    require('../../assets/images/ordenes/scleractinia2.jpg'),
                ],
                caracteristicas: [
                    'Pólipo corto',
                    'Más de ocho tentáculos',
                    'Solitarios o coloniales',
                    'Sin sifonoglifos',
                    'Tabiques hexámeros',
                    'Tabiques completos e incompletos',
                    'Exoesqueleto calcáreo con escleroseptos (Suficiente)'
                ]
            },
            {
                id: 'zoantharia',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                subclaseId: 'hexacorallia',
                nombre: 'Zoantharia',
                imagen: require('../../assets/images/ordenes/zoantharia.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/zoantharia.jpg')
                ],
                caracteristicas: [
                    'Coloniales o solitarios',
                    'Con esqueleto incrustado de arena',
                    'Tentáculos dispuestos en dos círculos'
                ]
            }
        ];
    } else if (filoId === 'cnidaria' && claseId === 'anthozoa' && subclaseId === 'octocorallia') {
        return [
            {
                id: 'alcyonacea',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                subclaseId: 'octocorallia',
                nombre: 'Alcyonacea',
                imagen: require('../../assets/images/ordenes/alcyonacea.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/alcyonacea.jpg')
                ],
                caracteristicas: [
                    'Coloniales',
                    'Con esqueleto de espículas calcáreas',
                    'Corales blandos'
                ]
            },
            {
                id: 'gorgonacea',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                subclaseId: 'octocorallia',
                nombre: 'Gorgonacea',
                imagen: require('../../assets/images/ordenes/gorgonacea.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/gorgonacea.jpg')
                ],
                caracteristicas: [
                    'Coloniales',
                    'Con esqueleto córneo',
                    'Ramificados',
                    'Abanicos de mar'
                ]
            },
            {
                id: 'pennatulacea',
                filoId: 'cnidaria',
                claseId: 'anthozoa',
                subclaseId: 'octocorallia',
                nombre: 'Pennatulacea',
                imagen: require('../../assets/images/ordenes/pennatulacea.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/pennatulacea.jpg')
                ],
                caracteristicas: [
                    'Coloniales',
                    'Con esqueleto calcáreo',
                    'Forma de pluma',
                    'Plumas de mar'
                ]
            }
        ];
    } else if (filoId === 'arthropoda' && subclaseId === 'merostomata') {
        return [
            {
                id: 'xiphosura',
                filoId: 'arthropoda',
                claseId: 'chelicerata',
                subclaseId: 'merostomata',
                nombre: 'Xiphosura',
                imagen: require('../../assets/images/ordenes/xiphosura.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/xiphosura.jpg')
                ],
                caracteristicas: [
                    'Prosoma cubierto por un gran caparazón',
                    'Opistosoma sin segmentar',
                    'Telson largo y puntiagudo',
                    'Cangrejos herradura'
                ]
            }
        ];
    } else if (filoId === 'arthropoda' && subclaseId === 'arachnida') {
        return [
            {
                id: 'araneae',
                filoId: 'arthropoda',
                claseId: 'chelicerata',
                subclaseId: 'arachnida',
                nombre: 'Araneae',
                imagen: require('../../assets/images/ordenes/araneae.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/araneae.jpg')
                ],
                caracteristicas: [
                    'Prosoma y opistosoma unidos por un pedicelo',
                    'Quelíceros con uñas venenosas',
                    'Pedipalpos simples',
                    'Con glándulas productoras de seda',
                    'Arañas'
                ]
            },
            {
                id: 'scorpiones',
                filoId: 'arthropoda',
                claseId: 'chelicerata',
                subclaseId: 'arachnida',
                nombre: 'Scorpiones',
                imagen: require('../../assets/images/ordenes/scorpiones.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/scorpiones.jpg')
                ],
                caracteristicas: [
                    'Pedipalpos en forma de pinza',
                    'Opistosoma dividido en mesosoma y metasoma',
                    'Telson con aguijón venenoso',
                    'Alacranes o escorpiones'
                ]
            },
            {
                id: 'opiliones',
                filoId: 'arthropoda',
                claseId: 'chelicerata',
                subclaseId: 'arachnida',
                nombre: 'Opiliones',
                imagen: require('../../assets/images/ordenes/opiliones.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/opiliones.jpg')
                ],
                caracteristicas: [
                    'Prosoma y opistosoma ampliamente unidos',
                    'Pedipalpos simples',
                    'Patas muy largas',
                    'Segadoras'
                ]
            },
            {
                id: 'acari',
                filoId: 'arthropoda',
                claseId: 'chelicerata',
                subclaseId: 'arachnida',
                nombre: 'Acari',
                imagen: require('../../assets/images/ordenes/acari.jpg'),
                imagenes: [
                    require('../../assets/images/ordenes/acari.jpg')
                ],
                caracteristicas: [
                    'Prosoma y opistosoma fusionados',
                    'Quelíceros variables',
                    'Pedipalpos variables',
                    'Ácaros y garrapatas'
                ]
            }
        ];
    }
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
                imagen: require('../../assets/images/subfilos/cheliceriformes.jpg'),
                imagenes: [
                    require('../../assets/images/subfilos/cheliceriformes.jpg')
                ],
                caracteristicas: [
                    'Cuerpo dividido en prosoma y opistosoma',
                    'Primer par de apéndices modificados en quelíceros',
                    'Segundo par de apéndices modificados en pedipalpos',
                    'Sin antenas'
                ],
                tieneClases: true
            },
            {
                id: 'myriapoda',
                filoId: 'arthropoda',
                nombre: 'Myriapoda',
                imagen: require('../../assets/images/subfilos/myriapoda.jpg'),
                imagenes: [
                    require('../../assets/images/subfilos/myriapoda.jpg')
                ],
                caracteristicas: [
                    'Cuerpo dividido en cabeza y tronco',
                    'Cabeza con un par de antenas',
                    'Tronco con numerosos segmentos similares',
                    'Uno o dos pares de patas por segmento del tronco'
                ],
                tieneClases: true
            },
            {
                id: 'crustacea',
                filoId: 'arthropoda',
                nombre: 'Crustacea',
                imagen: require('../../assets/images/subfilos/crustacea.jpg'),
                imagenes: [
                    require('../../assets/images/subfilos/crustacea.jpg'),
                ],
                caracteristicas: [
                    'Cuerpo dividido en cefalotórax y abdomen',
                    'Dos pares de antenas',
                    'Apéndices birramosos',
                    'Respiración branquial'
                ],
                tieneClases: true
            },
            {
                id: 'hexapoda',
                filoId: 'arthropoda',
                nombre: 'Hexapoda',
                imagen: require('../../assets/images/subfilos/hexapoda.jpg'),
                imagenes: [
                    require('../../assets/images/subfilos/hexapoda.jpg')
                ],
                caracteristicas: [
                    'Cuerpo dividido en cabeza, tórax y abdomen',
                    'Un par de antenas',
                    'Tórax con tres pares de patas',
                    'Abdomen generalmente sin apéndices'
                ],
                tieneClases: true
            }
        ];
    }
    return [];
};

// Función para obtener clases por ID de subfilo
export const getClasesBySubfiloId = (filoId, subfiloId) => {
    if (filoId === 'arthropoda' && subfiloId === 'cheliceriformes') {
        return [
            {
                id: 'chelicerata',
                filoId: 'arthropoda',
                subfiloId: 'cheliceriformes',
                nombre: 'Chelicerata',
                imagen: require('../../assets/images/clases/chelicerata.jpg'),
                imagenes: [
                    require('../../assets/images/clases/chelicerata.jpg')
                ],
                caracteristicas: [
                    'Cuerpo dividido en prosoma y opistosoma',
                    'Prosoma con seis pares de apéndices',
                    'Primer par de apéndices modificados en quelíceros',
                    'Segundo par de apéndices modificados en pedipalpos',
                    'Sin antenas'
                ],
                tieneSubclases: true
            },
            {
                id: 'pycnogonida',
                filoId: 'arthropoda',
                subfiloId: 'cheliceriformes',
                nombre: 'Pycnogonida',
                imagen: require('../../assets/images/clases/pycnogonida.jpg'),
                imagenes: [
                    require('../../assets/images/clases/pycnogonida.jpg')
                ],
                caracteristicas: [
                    'Marinos',
                    'Cuerpo reducido',
                    'Cuatro pares de patas largas',
                    'Probóscide anterior',
                    'Arañas de mar'
                ],
                tieneSubclases: false
            }
        ];
    } else if (filoId === 'arthropoda' && subfiloId === 'myriapoda') {
        return [
            {
                id: 'chilopoda',
                filoId: 'arthropoda',
                subfiloId: 'myriapoda',
                nombre: 'Chilopoda',
                imagen: require('../../assets/images/clases/chilopoda.jpg'),
                imagenes: [
                    require('../../assets/images/clases/chilopoda.jpg')
                ],
                caracteristicas: [
                    'Cuerpo aplanado dorsoventralmente',
                    'Un par de patas por segmento',
                    'Primer par de apéndices del tronco modificado en forcípulas venenosas',
                    'Ciempiés'
                ],
                tieneSubclases: false
            },
            {
                id: 'diplopoda',
                filoId: 'arthropoda',
                subfiloId: 'myriapoda',
                nombre: 'Diplopoda',
                imagen: require('../../assets/images/clases/diplopoda.jpg'),
                imagenes: [
                    require('../../assets/images/clases/diplopoda.jpg')
                ],
                caracteristicas: [
                    'Cuerpo cilíndrico',
                    'Dos pares de patas por segmento aparente (diplosegmentos)',
                    'Milpiés'
                ],
                tieneSubclases: false
            },
            {
                id: 'pauropoda',
                filoId: 'arthropoda',
                subfiloId: 'myriapoda',
                nombre: 'Pauropoda',
                imagen: require('../../assets/images/clases/pauropoda.jpg'),
                imagenes: [
                    require('../../assets/images/clases/pauropoda.jpg')
                ],
                caracteristicas: [
                    'Cuerpo pequeño',
                    'Antenas ramificadas',
                    'Sin ojos',
                    'Nueve pares de patas'
                ],
                tieneSubclases: false
            },
            {
                id: 'symphyla',
                filoId: 'arthropoda',
                subfiloId: 'myriapoda',
                nombre: 'Symphyla',
                imagen: require('../../assets/images/clases/symphyla.jpg'),
                imagenes: [
                    require('../../assets/images/clases/symphyla.jpg')
                ],
                caracteristicas: [
                    'Cuerpo pequeño',
                    'Antenas largas y no ramificadas',
                    'Sin ojos',
                    'Doce pares de patas',
                    'Con cercos'
                ],
                tieneSubclases: false
            }
        ];
    } else if (filoId === 'arthropoda' && subfiloId === 'crustacea') {
        return [
            {
                id: 'branchiopoda',
                filoId: 'arthropoda',
                subfiloId: 'crustacea',
                nombre: 'Branchiopoda',
                imagen: require('../../assets/images/clases/branchiopoda.jpg'),
                imagenes: [
                    require('../../assets/images/clases/branchiopoda.jpg')
                ],
                caracteristicas: [
                    'Apéndices torácicos aplanados y lobulados',
                    'Función respiratoria y locomotora',
                    'Principalmente de agua dulce',
                    'Pulgas de agua'
                ],
                tieneSubclases: false
            },
            {
                id: 'maxillopoda',
                filoId: 'arthropoda',
                subfiloId: 'crustacea',
                nombre: 'Maxillopoda',
                imagen: require('../../assets/images/clases/maxillopoda.jpg'),
                imagenes: [
                    require('../../assets/images/clases/maxillopoda.jpg')
                ],
                caracteristicas: [
                    'Cuerpo con cabeza, tórax de 6 segmentos y abdomen sin apéndices',
                    'Copépodos, percebes y balanos'
                ],
                tieneSubclases: false
            },
            {
                id: 'malacostraca',
                filoId: 'arthropoda',
                subfiloId: 'crustacea',
                nombre: 'Malacostraca',
                imagen: require('../../assets/images/clases/malacostraca.jpg'),
                imagenes: [
                    require('../../assets/images/clases/malacostraca.jpg')
                ],
                caracteristicas: [
                    'Cuerpo con cabeza, tórax de 8 segmentos y abdomen de 6 segmentos con apéndices',
                    'Camarones, langostas, cangrejos'
                ],
                tieneSubclases: false
            }
        ];
    } else if (filoId === 'arthropoda' && subfiloId === 'hexapoda') {
        return [
            {
                id: 'entognatha',
                filoId: 'arthropoda',
                subfiloId: 'hexapoda',
                nombre: 'Entognatha',
                imagen: require('../../assets/images/clases/entognatha.jpg'),
                imagenes: [
                    require('../../assets/images/clases/entognatha.jpg')
                ],
                caracteristicas: [
                    'Piezas bucales encerradas en una cavidad cefálica',
                    'Sin alas',
                    'Colémbolos, proturos y dipluros'
                ],
                tieneSubclases: false
            },
            {
                id: 'insecta',
                filoId: 'arthropoda',
                subfiloId: 'hexapoda',
                nombre: 'Insecta',
                imagen: require('../../assets/images/clases/insecta.jpg'),
                imagenes: [
                    require('../../assets/images/clases/insecta.jpg'),
                ],
                caracteristicas: [
                    'Piezas bucales externas',
                    'Cuerpo dividido en cabeza, tórax y abdomen',
                    'Tres pares de patas',
                    'Generalmente con uno o dos pares de alas'
                ],
                tieneSubclases: false
            }
        ];
    }
    return [];
};

// Función para obtener familias por ID de subclase
export const getFamiliasBySubclaseId = (filoId, claseId, subclaseId) => {
    if (filoId === 'platyhelminthes' && claseId === 'trematoda' && subclaseId === 'digenea') {
        return [
            {
                id: 'schistosomatidae',
                filoId: 'platyhelminthes',
                claseId: 'trematoda',
                subclaseId: 'digenea',
                nombre: 'Schistosomatidae',
                imagen: require('../../assets/images/familias/schistosomatidae.jpg'),
                imagenes: [
                    require('../../assets/images/familias/schistosomatidae.jpg')
                ],
                caracteristicas: [
                    'Dioicos',
                    'Machos con canal ginecóforo donde se aloja la hembra',
                    'Parásitos de vasos sanguíneos',
                    'Esquistosomas'
                ]
            },
            {
                id: 'fasciolidae',
                filoId: 'platyhelminthes',
                claseId: 'trematoda',
                subclaseId: 'digenea',
                nombre: 'Fasciolidae',
                imagen: require('../../assets/images/familias/fasciolidae.jpg'),
                imagenes: [
                    require('../../assets/images/familias/fasciolidae.jpg')
                ],
                caracteristicas: [
                    'Hermafroditas',
                    'Cuerpo aplanado y ancho',
                    'Ventosa ventral cerca del extremo anterior',
                    'Parásitos de conductos biliares',
                    'Fasciolas'
                ]
            }
        ];
    } else if (filoId === 'platyhelminthes' && claseId === 'cestoda' && subclaseId === 'eucestoda') {
        return [
            {
                id: 'taeniidae',
                filoId: 'platyhelminthes',
                claseId: 'cestoda',
                subclaseId: 'eucestoda',
                nombre: 'Taeniidae',
                imagen: require('../../assets/images/familias/taeniidae.jpg'),
                imagenes: [
                    require('../../assets/images/familias/taeniidae.jpg')
                ],
                caracteristicas: [
                    'Escólex con cuatro ventosas y rostelo armado con ganchos',
                    'Proglótides más anchas que largas',
                    'Poros genitales alternos o unilaterales',
                    'Tenias'
                ]
            },
            {
                id: 'diphyllobothriidae',
                filoId: 'platyhelminthes',
                claseId: 'cestoda',
                subclaseId: 'eucestoda',
                nombre: 'Diphyllobothriidae',
                imagen: require('../../assets/images/familias/diphyllobothriidae.jpg'),
                imagenes: [
                    require('../../assets/images/familias/diphyllobothriidae.jpg')
                ],
                caracteristicas: [
                    'Escólex con dos surcos o botrios',
                    'Sin rostelo ni ganchos',
                    'Proglótides más anchas que largas',
                    'Poro genital y uterino en la superficie ventral',
                    'Difilobobrios'
                ]
            }
        ];
    }
    return [];
};

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
        pregunta: '¿El organismo es un pólipo, conjunto de pólipos o una medusa?',
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