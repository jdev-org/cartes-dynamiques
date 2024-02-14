<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>fontaines</sld:Name>
    <sld:UserStyle>
      <sld:FeatureTypeStyle>      
        <sld:Rule>
          <sld:Name>Classe_210193</sld:Name>
          <sld:Title>Paris 0 - Non</sld:Title>
          <sld:MinScaleDenominator>25000</sld:MinScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#ffc896</sld:CssParameter>
                  <sld:CssParameter name="fill-opacity">1</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                  <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
                  <sld:CssParameter name="stroke-width">30</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>120</sld:Size>
              <sld:Rotation>0</sld:Rotation>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_90126</sld:Name>
          <sld:Title>Paris 0 - Oui</sld:Title>
          <sld:MinScaleDenominator>25000</sld:MinScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#002DDC</sld:CssParameter>
                  <sld:CssParameter name="fill-opacity">1</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                  <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
                  <sld:CssParameter name="stroke-width">30</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>120</sld:Size>
              <sld:Rotation>0</sld:Rotation>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_214375</sld:Name>
          <sld:Title>Paris 0 - Non access</sld:Title>
          <sld:MinScaleDenominator>25000</sld:MinScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>accessible</ogc:PropertyName>
              <ogc:Literal>Non</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#d8d8d8</sld:CssParameter>
                  <sld:CssParameter name="fill-opacity">1</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                  <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
                  <sld:CssParameter name="stroke-width">30</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>120</sld:Size>
              <sld:Rotation>0</sld:Rotation>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>        
        <sld:Rule>
          <sld:Name>Classe_35421</sld:Name>
          <sld:Title>Paris 1 - NON</sld:Title>
          <sld:MinScaleDenominator>4000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_indisponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>100</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_23791</sld:Name>
          <sld:Title>Paris 1 - Oui</sld:Title>
          <sld:MinScaleDenominator>4000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_disponible2.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>100</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_65378</sld:Name>
          <sld:Title>Paris 1 - NON access</sld:Title>
          <sld:MinScaleDenominator>4000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>accessible</ogc:PropertyName>
              <ogc:Literal>Non</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_nonaccessible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>100</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
         <sld:Rule>
          <sld:Name>Classe_56378</sld:Name>
          <sld:Title>Paris 1 - Icône white</sld:Title>
          <sld:MinScaleDenominator>4000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}_white.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>100</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_56378</sld:Name>
          <sld:Title>Paris 1 - Icône blue</sld:Title>
          <sld:MinScaleDenominator>4000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>100</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_34621</sld:Name>
          <sld:Title>Paris 2 non</sld:Title>
          <sld:MinScaleDenominator>800</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>4000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_indisponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>80</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_45873</sld:Name>
          <sld:Title>Paris 2 oui</sld:Title>
          <sld:MinScaleDenominator>800</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>4000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_disponible2.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>80</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_9632</sld:Name>
          <sld:Title>Paris 2 non access</sld:Title>
          <sld:MinScaleDenominator>800</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>4000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>accessible</ogc:PropertyName>
              <ogc:Literal>Non</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_nonaccessible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>80</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_963785</sld:Name>
          <sld:Title>Paris 2 - Icône white</sld:Title>
          <sld:MinScaleDenominator>800</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>4000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}_white.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>80</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_367458</sld:Name>
          <sld:Title>Paris 2 - Icône blue</sld:Title>
          <sld:MinScaleDenominator>800</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>4000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>80</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_65712</sld:Name>
          <sld:Title>Paris 3 - Non</sld:Title>
          <sld:MaxScaleDenominator>800</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_indisponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>40</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_32775</sld:Name>
          <sld:Title>Paris 3 - Oui</sld:Title>
          <sld:MaxScaleDenominator>800</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_disponible2.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>40</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_45276</sld:Name>
          <sld:Title>Paris 3 - Non access</sld:Title>
          <sld:MaxScaleDenominator>800</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>accessible</ogc:PropertyName>
              <ogc:Literal>Non</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_nonaccessible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>40</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_963785</sld:Name>
          <sld:Title>Paris 2 - Icône white</sld:Title>
          <sld:MaxScaleDenominator>800</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}_white.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>40</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_367458</sld:Name>
          <sld:Title>Paris 2 - Icône blue</sld:Title>
          <sld:MaxScaleDenominator>800</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>40</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>        
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>


