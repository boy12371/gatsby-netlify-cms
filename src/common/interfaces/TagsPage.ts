export interface TagsProps {
    fieldValue: string;
    totalCount: number;
}

export interface TagsPageTemplateProps {
    group?: TagsProps[];
}

export interface TagsPageProps {
    data: { allMarkdownRemark: { group: TagsProps[] } };
}
