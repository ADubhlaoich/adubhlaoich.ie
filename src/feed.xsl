<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
	<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
    <head>
      <title>
        RSS Feed | <xsl:value-of select="/atom:feed/atom:title"/>
      </title>
      <link rel="stylesheet" href="/css/style.css"/>
    </head>
    <body>
      <p>
        This is the RSS feed for <a href="https://www.adubhlaoich.ie/">adubhlaoich.ie</a>.
      </p>
      <h2>Recent website entries</h2>
      <xsl:for-each select="/atom:feed/atom:entry">
        <a>
          <xsl:attribute name="href">
            <xsl:value-of select="atom:link/@href"/>
          </xsl:attribute>
          <xsl:value-of select="atom:title"/>
        </a>
        Last updated:
        <xsl:value-of select="atom:updated, 0, 11)" />
      </xsl:for-each>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
