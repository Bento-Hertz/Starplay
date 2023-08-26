export default interface IContent {
    title: string;
    releaseDate: string;
    ageRestriction: string;
    trending: boolean;
    bookmarked: boolean;
    category: {
        name: string;
        icon: string;
    }
    images: {
        regular: string;
        trending?: {
            small: string;
            large: string;
        }
    }
}