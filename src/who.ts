
export interface Who {
    name: String
}

export function getWho(name: String) : Who {
    return {
        name
    };
}