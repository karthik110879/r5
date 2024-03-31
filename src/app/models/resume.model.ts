export class Resume {
    Header?: {
        Item1: string;
        Item2: string;
        Item3: string;
        Item4: string;
        cvBtn: string;
        cvName: string;
    };
    Banner?: {
        Pretitle: string;
        Description: string;
        ActionBtn: string;
    };
    AboutMe?: {
        Title: string;
        Paragraphs: string[];
    };
    Experience?: {
        Title: string;
        Jobs: Jobs[];
    };
    FeatureProjects?: {
        Title: string;
        Label: string;
        Projects: Projects[];
    };
    OtherProjects?: {
        Title: string;
        Projects: Projects[];
    };
    Contact?: {
        Pretitle: string;
        Title: string;
        Content: string;
        Btn: string;
    };
}

interface Jobs {
    Tab: string;
    Title: string;
    Date: string;
    Description: string[];
}

interface Projects {
    Title: string;
    Description: string;
    imgs?: string[];
    ghLink?: string;
    demoLink?: string;
    Technologies: string[];
}