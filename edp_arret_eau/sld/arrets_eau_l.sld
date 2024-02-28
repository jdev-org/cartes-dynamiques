<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>arret_eau_l</sld:Name>
    <sld:UserStyle>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:Name>Classe_365</sld:Name>
          <sld:Title>EN COURS</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>statut</ogc:PropertyName>
              <ogc:Literal>EN COURS</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:LineSymbolizer>
            <sld:Stroke>
              <sld:CssParameter name="stroke">#FF647D</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
              <sld:CssParameter name="stroke-width">4</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Classe_706</sld:Name>
          <sld:Title>PREVU</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>statut</ogc:PropertyName>
              <ogc:Literal>PREVU</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:LineSymbolizer>
            <sld:Stroke>
              <sld:CssParameter name="stroke">#FFC896</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
              <sld:CssParameter name="stroke-width">4</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>


