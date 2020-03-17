import * as React from 'react';
import * as PropTypes from 'prop-types';
import { savePDF } from '../savePDF';
import { PDFExportProps } from '../PDFExportProps';
/**
 * The props of the GridPDFExport component
 * ([more information and examples in the documentation on PDF export]({% slug overview_pdfexport_grid %})).
 */
export interface GridPDFExportProps extends PDFExportProps {
}
/**
 * A React component which facilitates the PDF export of the Grid.
 */
export declare class GridPDFExport extends React.Component<GridPDFExportProps, {}> {
    /**
     * @hidden
     */
    static propTypes: {
        author: PropTypes.Requireable<any>;
        avoidLinks: PropTypes.Requireable<any>;
        forcePageBreak: PropTypes.Requireable<any>;
        keepTogether: PropTypes.Requireable<any>;
        creator: PropTypes.Requireable<any>;
        date: PropTypes.Requireable<any>;
        imageResolution: PropTypes.Requireable<any>;
        fileName: PropTypes.Requireable<any>;
        forceProxy: PropTypes.Requireable<any>;
        keywords: PropTypes.Requireable<any>;
        landscape: PropTypes.Requireable<any>;
        margin: PropTypes.Requireable<any>;
        pageTemplate: PropTypes.Requireable<any>;
        paperSize: PropTypes.Requireable<any>;
        repeatHeaders: PropTypes.Requireable<any>;
        scale: PropTypes.Requireable<any>;
        proxyData: PropTypes.Requireable<any>;
        proxyURL: PropTypes.Requireable<any>;
        proxyTarget: PropTypes.Requireable<any>;
        producer: PropTypes.Requireable<any>;
        subject: PropTypes.Requireable<any>;
        title: PropTypes.Requireable<any>;
    };
    /**
     * @hidden
     */
    saveGridPDF: any;
    constructor(props: any);
    /**
     * @hidden
     */
    render(): any;
    /**
     * Saves the content of the Grid as a PDF file.
     *
     * @param data - The data can be different from the currently displayed data in the Grid.
     * Can be used to export all Grid pages.
     * @param callback - The callback that will be executed after the PDF is saved.
     */
    save(data?: any[], callback?: () => void): void;
    protected getSavePDF(): typeof savePDF;
    private getGrid;
    private getCustomColumns;
}
