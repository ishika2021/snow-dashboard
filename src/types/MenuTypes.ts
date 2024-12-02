export interface MenuItem {
    subHeaderLabel: string;
    list: SubMenuItem[];
}

export interface SubMenuItem {
    listLabel?: string ;
    icon?: string;
    subList? : {
        subListLabel: string | undefined;
        action: ()=>{} | void;
    }[]
}