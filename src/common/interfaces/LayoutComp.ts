export interface LayoutProps {
    title: string;
    name?: string;
    description?: string;
    keywords?: string;
    isHeader?: boolean;
    isCrumb?: boolean;
    tags?: string[];
    isFooter?: boolean;
    children?: React.ReactNode;
}
