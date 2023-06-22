BEGIN ;

-- commerce
TRUNCATE fontaine.commerce CASCADE;

INSERT INTO fontaine.commerce (id1, geom, id, id_fantoir, numero, rep, nom_voie, code_posta, code_insee, nom_commun, code_inse1, nom_ancien, lon, lat, alias, nom_ld, libelle_ac, nom_afnor, source_pos, source_nom)
SELECT id1, geom, id, id_fantoir, numero, rep, nom_voie, code_posta, code_insee, nom_commun, code_inse1, nom_ancien, lon, lat, alias, nom_ld, libelle_ac, nom_afnor, source_pos, source_nom
FROM fontaine.commerce_tmp;

DROP TABLE IF EXISTS fontaine.commerce_tmp;

COMMIT;