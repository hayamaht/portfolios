interface WorkItemSchema {
    name: string;
    cover: string;
    description: string;
    tech: string[];
    cat: string;
    images?: string[] | undefined;
    client?: string | undefined;
    date?: Date | undefined;
    url?: string | undefined;
}

export default WorkItemSchema;