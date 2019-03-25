export interface LayoutProps {
    name?: string;
    title?: string;
    description?: string;
    keywords?: string;
    isHeader?: boolean;
    isFooter?: boolean;
    children?: React.ReactNode;
}
