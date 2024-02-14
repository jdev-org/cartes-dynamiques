<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>fontaines</sld:Name>
    <sld:UserStyle>
      <sld:FeatureTypeStyle>      
        <sld:Rule>
          <sld:Name>Classe_759</sld:Name>
          <sld:Title>Sans titre 759</sld:Title>
          <ogc:Filter>
          <ogc:And>
            <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_objet</ogc:PropertyName>
                <ogc:Literal>FONTNE_WALLACE</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:And>  
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_indisponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>45</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_1081</sld:Name>
          <sld:Title>Sans titre 1081</sld:Title>
          <ogc:Filter>
          <ogc:And>
            <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_objet</ogc:PropertyName>
                <ogc:Literal>FONTNE_WALLACE</ogc:Literal>
            </ogc:PropertyIsEqualTo>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>            
          </ogc:And>  
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_disponible2.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>45</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_1422</sld:Name>
          <sld:Title>Sans titre 1422</sld:Title>
          <ogc:Filter>
          <ogc:And>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_objet</ogc:PropertyName>
                <ogc:Literal>FONTNE_WALLACE</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsNull>
                <ogc:PropertyName>url_jeu_vp</ogc:PropertyName>
              </ogc:PropertyIsNull>
          </ogc:And>    
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_nonaccessible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>45</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>        
        <sld:Rule>
          <sld:Name>Classe_1952</sld:Name>
          <sld:Title>Sans titre 1952</sld:Title>
          <ogc:Filter>
          <ogc:And>
            <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_objet</ogc:PropertyName>
                <ogc:Literal>FONTNE_WALLACE</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:And>  
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>45</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_69375</sld:Name>
          <sld:Title>Sans titre 69375</sld:Title>
          <ogc:Filter>
          <ogc:And>
            <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>type_objet</ogc:PropertyName>
                <ogc:Literal>FONTNE_WALLACE</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:And>  
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}_white.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>45</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>


