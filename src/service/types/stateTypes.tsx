export interface Person {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}
export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

export interface Geo {
    lat: number | string,
    lng: number | string
}
export interface Modal {
    id: number | null,
    data: {
        adress: Address | undefined
        company: Company | undefined
    } | null
    isOpen: boolean
}
export interface StateTypes {
    personsList: Person[],
    filterBy: string | null,
    isLoading: boolean,
    isError: boolean
    modal: Modal
}
