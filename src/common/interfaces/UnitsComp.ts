export interface UnitsTemplateProps {
    currency?: string;
    weight?: string;
}

export interface UnitsSettingsProps {
    data: {
        markdownRemark: {
            frontmatter: {
                currency: string;
                weight: string;
            };
        };
    };
}

export interface UnitsQueryData {
    allMarkdownRemark: {
        edges: [
            {
                node: {
                    frontmatter: {
                        currency: string;
                        weight: string;
                    };
                };
            }
        ];
    };
}
