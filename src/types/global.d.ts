declare global {
    interface ListItem {
        id: number;
        icon: string;
        title: string;
        time?: string;
        avatar: string;
        alt: string;
        value?: string;
        change?: string;
    }
    
    interface Title {
        title: string;
    }
}

export {}

