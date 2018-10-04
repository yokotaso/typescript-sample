export interface Who {
    name: string
}

export function getWho(name: string) : Who {
    return {
        name
    };
}
