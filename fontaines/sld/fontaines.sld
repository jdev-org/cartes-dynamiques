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
          <sld:PointSymbolizer>
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
                  <sld:CssParameter name="stroke-width">2</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>9</sld:Size>
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
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#aeffae</sld:CssParameter>
                  <sld:CssParameter name="fill-opacity">1</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                  <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
                  <sld:CssParameter name="stroke-width">2</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>9</sld:Size>
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
          <sld:PointSymbolizer>
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
                  <sld:CssParameter name="stroke-width">2</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
              <sld:Size>9</sld:Size>
              <sld:Rotation>0</sld:Rotation>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>        
        <sld:Rule>
          <sld:Name>Classe_35421</sld:Name>
          <sld:Title>Paris 1 - NON</sld:Title>
          <sld:MinScaleDenominator>15000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_indisponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>30</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_23791</sld:Name>
          <sld:Title>Paris 1 - Oui</sld:Title>
          <sld:MinScaleDenominator>15000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_disponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>30</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_65378</sld:Name>
          <sld:Title>Paris 1 - NON access</sld:Title>
          <sld:MinScaleDenominator>15000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>accessible</ogc:PropertyName>
              <ogc:Literal>Non</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_nonaccessible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>30</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
         <sld:Rule>
          <sld:Name>Classe_56378</sld:Name>
          <sld:Title>Paris 1 - Icône</sld:Title>
          <sld:MinScaleDenominator>15000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>30</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_34621</sld:Name>
          <sld:Title>Paris 2 non</sld:Title>
          <sld:MinScaleDenominator>7000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>15000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
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
          <sld:Name>Classe_45873</sld:Name>
          <sld:Title>Paris 2 oui</sld:Title>
          <sld:MinScaleDenominator>7000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>15000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_disponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>45</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_9632</sld:Name>
          <sld:Title>Paris 2 non access</sld:Title>
          <sld:MinScaleDenominator>7000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>15000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>accessible</ogc:PropertyName>
              <ogc:Literal>Non</ogc:Literal>
            </ogc:PropertyIsEqualTo>
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
          <sld:Name>Classe_743685</sld:Name>
          <sld:Title>Paris 2 icône</sld:Title>
          <sld:MinScaleDenominator>7000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>15000</sld:MaxScaleDenominator>
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
          <sld:Name>Classe_65712</sld:Name>
          <sld:Title>Paris 3 - Non</sld:Title>
          <sld:MinScaleDenominator>2000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>7000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_indisponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>60</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_32775</sld:Name>
          <sld:Title>Paris 3 - Oui</sld:Title>
          <sld:MinScaleDenominator>2000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>7000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_disponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>60</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_45276</sld:Name>
          <sld:Title>Paris 3 - Non access</sld:Title>
          <sld:MinScaleDenominator>2000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>7000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>accessible</ogc:PropertyName>
              <ogc:Literal>Non</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_nonaccessible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>60</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_4115</sld:Name>
          <sld:Title>Paris 3 - Icône</sld:Title>
          <sld:MinScaleDenominator>2000</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>7000</sld:MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>60</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_6574712</sld:Name>
          <sld:Title>Paris 4 - Non</sld:Title>
          <sld:MinScaleDenominator>500</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>2000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
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
          <sld:Name>Classe_353845</sld:Name>
          <sld:Title>Paris 4 - Oui</sld:Title>
          <sld:MinScaleDenominator>500</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>2000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_disponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>100</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_4527446</sld:Name>
          <sld:Title>Paris 4 - Non access</sld:Title>
          <sld:MinScaleDenominator>500</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>2000</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>accessible</ogc:PropertyName>
              <ogc:Literal>Non</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
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
          <sld:Name>Classe_4115455</sld:Name>
          <sld:Title>Paris 4 - Icône</sld:Title>
          <sld:MinScaleDenominator>500</sld:MinScaleDenominator>
          <sld:MaxScaleDenominator>2000</sld:MaxScaleDenominator>
          <sld:PointSymbolizer>
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
          <sld:Name>Classe_4245</sld:Name>
          <sld:Title>Paris 5 - Non</sld:Title>
          <sld:MaxScaleDenominator>500</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>NON</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_indisponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>200</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_3548</sld:Name>
          <sld:Title>Paris 5 - Oui</sld:Title>
          <sld:MaxScaleDenominator>500</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>dispo</ogc:PropertyName>
              <ogc:Literal>OUI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_disponible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>200</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_981</sld:Name>
          <sld:Title>Paris 5 - Non access</sld:Title>
          <sld:MaxScaleDenominator>500</sld:MaxScaleDenominator>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>accessible</ogc:PropertyName>
              <ogc:Literal>Non</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/fontaine_nonaccessible.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>200</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_855</sld:Name>
          <sld:Title>Paris 5 - Icônes</sld:Title>
          <sld:MaxScaleDenominator>500</sld:MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.jdev.fr/mviewer/apps/fontaines/img/${type_objet}.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>200</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>


