import React from "react";
import { PDFViewer, Document, Page, Text, View } from "@react-pdf/renderer";
import pdfstyles from "./pdfStyles";

// Create Document Component
const PDFPreview = ({ title }) => (
  <PDFViewer className="viewer" style={pdfstyles.viewer}>
    <Document>
      <Page size="A4" style={pdfstyles.page}>
        <View style={pdfstyles.section}>
          <Text style={pdfstyles.title}>{title}</Text>
          <Text>This is a text in a generated PDF file.</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PDFPreview;


