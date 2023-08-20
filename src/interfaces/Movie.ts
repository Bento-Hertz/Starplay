export default interface Movie {
    title: string;
    releaseDate: string;
    ageRestriction: string;
    trending: boolean;
    category: {
        name: string;
        icon: string;
    }
    images: {
        regular: {
            small: string;
            medium: string;
            large: string;
        }
        trending: {
            small: string;
            large: string;
        }
    }
}