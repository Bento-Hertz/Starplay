export default interface Movie {
    title: string;
    releaseDate: string;
    ageRestriction: string;
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
        trending?: {
            small: string;
            large: string;
        }
    }
}