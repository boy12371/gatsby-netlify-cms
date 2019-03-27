export interface LayoutProps {
    name?: string;
    title?: string;
    description?: string;
    keywords?: string;
    isHeader?: boolean;
    tags?: string[];
    isFooter?: boolean;
    children?: React.ReactNode;
}
