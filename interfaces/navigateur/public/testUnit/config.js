version=new Date().getTime();

require.config({
    baseUrl: "/igo_navigateur/",
    urlArgs: "version="+version,
    paths: {
       analyseurConfig: 'js/app/analyseur/analyseurConfig',
        analyseurGML: 'js/app/analyseur/analyseurGML',
        analyseurGeoJSON: 'js/app/analyseur/analyseurGeoJSON',
        contexteMenu: 'js/app/contexteMenu/contexteMenu',
        contexteMenuArborescence: 'js/app/contexteMenu/contexteMenuArborescence',
        contexteMenuCarte: 'js/app/contexteMenu/contexteMenuCarte',
        contexteMenuTable: 'js/app/contexteMenu/contexteMenuTable',
        gestionCouches: 'js/app/couche/gestionCouches',    
        OSM: 'js/app/couche/protocole/OSM',
        TMS: 'js/app/couche/protocole/TMS',
        WMS: 'js/app/couche/protocole/WMS',
        blanc: 'js/app/couche/protocole/blanc',
        couche: 'js/app/couche/protocole/couche',
        google: 'js/app/couche/protocole/google',
        marqueurs: 'js/app/couche/protocole/marqueurs',
        vecteur: 'js/app/couche/protocole/vecteur',
        ligne: 'js/app/occurence/geometrie/ligne',
        limites: 'js/app/occurence/geometrie/limites',
        multiPoint: 'js/app/occurence/geometrie/multiPoint',
        multiLigne: 'js/app/occurence/geometrie/multiLigne',
        multiPolygone: 'js/app/occurence/geometrie/multiPolygone',
        occurence: 'js/app/occurence/occurence',
        point: 'js/app/occurence/geometrie/point',
        polygone: 'js/app/occurence/geometrie/polygone',
        style: 'js/app/occurence/style',
        aide: 'js/app/helper/aide',
        browserDetect: 'js/app/helper/browserDetect',
    	contexte: 'js/app/helper/contexte',
        evenement: 'js/app/helper/evenement',
        fonctions: 'js/app/helper/fonctions',
        metadonnee: 'js/app/helper/metadonnee',
        requireAide: 'js/app/helper/requireAide',      
        arborescence: 'js/app/menu/arborescence',    
        googleItineraire: 'js/app/menu/googleItineraire',   
        googleStreetView: 'js/app/menu/googleStreetView',
        impression: 'js/app/menu/impression',
        itineraire: 'js/app/menu/itineraire',
        localisation: 'js/app/menu/localisation',
        recherche: 'js/app/menu/recherche/recherche',
        rechercheAdresse: 'js/app/menu/recherche/rechercheAdresse',
        rechercheBorne: 'js/app/menu/recherche/rechercheBorne',
        rechercheCadastreReno: 'js/app/menu/recherche/rechercheCadastreReno',
        rechercheGPS: 'js/app/menu/recherche/rechercheGPS',
        rechercheHQ: 'js/app/menu/recherche/rechercheHQ',
        rechercheLieu: 'js/app/menu/recherche/rechercheLieu',
        outil: 'js/app/outil/outil',
        outilAide: 'js/app/outil/outilAide',
        outilAjoutWMS: 'js/app/outil/outilAjoutWMS',
        outilAnalyseSpatiale: 'js/app/outil/outilAnalyseSpatiale',
        outilControleMenu: 'js/app/outil/outilControleMenu',
        outilDeplacement: 'js/app/outil/outilDeplacement',
        outilDeplacerCentre: 'js/app/outil/outilDeplacerCentre',
        outilDessin: 'js/app/outil/outilDessin',
        outilEdition: 'js/app/outil/outilEdition',
        outilHistoriqueNavigation: 'js/app/outil/outilHistoriqueNavigation',
        outilInfo: 'js/app/outil/outilInfo',
        outilItineraire: 'js/app/outil/outilItineraire',
        outilMenu: 'js/app/outil/outilMenu',
        outilMesure: 'js/app/outil/outilMesure',
        outilPartagerCarte: 'js/app/outil/outilPartagerCarte',
        outilRapporterBogue: 'js/app/outil/outilRapporterBogue',
        outilSaaq: 'js/app/outil/outilSaaq',
        outilZoomEtendueMaximale: 'js/app/outil/outilZoomEtendueMaximale',
        outilZoomPreselection: 'js/app/outil/outilZoomPreselection',        
        outilZoomRectangle: 'js/app/outil/outilZoomRectangle',
        panneau: 'js/app/panneau/panneau',
        panneauAccordeon: 'js/app/panneau/panneauAccordeon',
        panneauCarte: 'js/app/panneau/panneauCarte',
        panneauEntete: 'js/app/panneau/panneauEntete',
        panneauInfo: 'js/app/panneau/panneauInfo',
        panneauMenu: 'js/app/panneau/panneauMenu',
        panneauOnglet: 'js/app/panneau/panneauOnglet',
        panneauTable: 'js/app/panneau/panneauTable',
        barreOutils: 'js/app/barreOutils',
        carte: 'js/app/carte',
        navigateur: 'js/app/navigateur',   
        css: 'libs/require/src/css',
        async : "libs/require/src/async",
        noAMD : "libs/require/src/noAMD",
        proj4js: 'libs/proj/Proj4js',
        epsgDef: 'libs/proj/epsgDef'    
    }, 
    shim: {
        build: {
            deps: ['requireAide']
        },
        EPSG3857: {
            deps: ['proj4js']
        },
        EPSG32198: {
            deps: ['proj4js']
        }
    }
});



require(['requireAide',
        /*//'testUnit/app/carte',
        'testUnit/app/couche/OSM',
        /'testUnit/app/couche/WMS',
        //'testUnit/app/couche/TMS',
        //'testUnit/app/couche/google',
        'testUnit/app/couche/vecteur',
        'testUnit/app/couche/couche',*/
        'testUnit/app/geometrie/limites',
        'testUnit/app/geometrie/point',
        'testUnit/app/geometrie/ligne',
        'testUnit/app/geometrie/polygone',
        'testUnit/app/geometrie/multiPolygone',
        'testUnit/app/geometrie/occurence',
        /*'testUnit/app/navigateur',
        'testUnit/app/panneau/panneau',
        'testUnit/app/panneau/panneauCarte',
        'testUnit/app/panneau/panneauInfo',
        'testUnit/app/panneau/panneauMenu',
        //'testUnit/app/helper/message',
        //'testUnit/app/helper/require',
        'testUnit/app/helper/aide',
        //'testUnit/app/menu/menu',
        'testUnit/app/menu/arborescence',
        'testUnit/app/outil/outil',
        'testUnit/app/barreOutils',*/
        ], function () {
});