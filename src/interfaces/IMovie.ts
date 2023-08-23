export default interface IMovie {
    title: string;
    releaseDate: string;
    ageRestriction: string;
    trending: boolean;
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