BEGIN ;

-- fontaine
TRUNCATE fontaine.fontaine CASCADE;

INSERT INTO fontaine.fontaine (ogc_fid, dispo, gid, type_objet, no_voirie_pair, no_voirie_impair, nom_commune, nom_voie, nature_reseau, date_indispo, date_remise_en_service, motif, accessible, type_objet_lib, code_udi, autre_info, url_jeu_vp, wkb_geometry)
SELECT ogc_fid, dispo, gid, type_objet, no_voirie_pair, no_voirie_impair, nom_commune, nom_voie, nature_reseau, date_indispo, date_remise_en_service, motif, accessible, type_objet_lib, code_udi, autre_info, url_jeu_vp, wkb_geometry
FROM fontaine.fontaine_tmp;

DROP TABLE IF EXISTS fontaine.fontaine_tmp;

COMMIT;