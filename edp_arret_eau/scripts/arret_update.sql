BEGIN ;

-- arrondissement
UPDATE edp.arrondissement t1 
SET geom = ST_Force3D(t2.geom)
FROM edp.arrondissement_tmp t2
WHERE t1.insee = t2.insee;

-- arret_eau_l
TRUNCATE edp.arret_eau_l CASCADE;

INSERT INTO edp.arret_eau_l (geom, gid, nature_res, type_arret, motif, adresse, arrondisse, statut, prevu_deb, prevu_fin, exec_deb, exec_fin, quartier)
SELECT ST_Force3D(geom), gid, nature_res, type_arret, motif, adresse, arrondisse, statut, prevu_deb, prevu_fin, exec_deb, exec_fin, quartier 
FROM edp.arret_eau_l_tmp;

-- arret_eau_p
TRUNCATE edp.arret_eau_p CASCADE;

INSERT INTO edp.arret_eau_p (geom, gid, nature_res, type_arret, motif, adresse, arrondisse, statut, prevu_deb, prevu_fin, exec_deb, exec_fin, quartier)
SELECT ST_Force3D(geom), gid, nature_res, type_arret, motif, adresse, arrondisse, statut, prevu_deb, prevu_fin, exec_deb, exec_fin, quartier 
FROM edp.arret_eau_p_tmp;

-- udi
TRUNCATE edp.udi CASCADE;

INSERT INTO edp.udi (geom, gid, code, nom)
SELECT ST_Force3D(geom), gid, code, nom
FROM edp.udi_tmp;

-- non_udi
TRUNCATE edp.non_udi CASCADE;

INSERT INTO edp.non_udi (id, gid, code, nom, geom)
(
	-- Fusion des UDI en un polygone
	WITH fusion AS (
		SELECT
			row_number() over() as id,
			st_makepolygon(st_exteriorring(st_union(geom))) as geom
		FROM edp.udi
	),

	-- Enveloppe de 50 km autour de la fusion des UDI
	 enveloppe AS (
		SELECT
			id,
			st_expand(st_envelope(geom),50000) as geom
		FROM fusion
	)

	-- Création d'une zone non UDI (différence entre l'enveloppe et la fusion des UDI)
	SELECT
		5 as id,
		5 as gid,
		'V' as code,
		'Vide' as nom,
		st_difference(e.geom,f.geom) as geom
	FROM enveloppe e, fusion f
);

SET LC_TIME = 'fr_FR.utf8';
UPDATE edp.arret_eau_maj SET datemaj = to_char(current_timestamp, 'TMDay DD TMMonth YYYY à HH24:MI');


DROP TABLE IF EXISTS edp.arrondissement_tmp;

DROP TABLE IF EXISTS edp.arret_eau_l_tmp;

DROP TABLE IF EXISTS edp.arret_eau_p_tmp;

DROP TABLE IF EXISTS edp.udi_tmp;

COMMIT;