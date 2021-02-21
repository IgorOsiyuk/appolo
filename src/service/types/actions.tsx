import { Person } from "./stateTypes";

export enum ListPerson {
    GET_LIST_PERSON = "GET_LIST_PERSON",
    GET_LIST_PERSON_REQUEST = "GET_LIST_PERSON_REQUEST",
    GET_LIST_PERSON_ERROR = "GET_LIST_PERSON_ERROR",
    DELETE_PERSON = "DELETE_PERSON",
    FILTER_BY = "FILTER_BY",
}
export enum Modal {
    OPEN_MODAL="OPEN_MODAL",
    CLOSE_MODAL="CLOSE_MODAL"
}

export interface getListPerson {
    type: typeof ListPerson.GET_LIST_PERSON;
    payload: Person[];
}
export interface getListPersonRequest {
    type: typeof ListPerson.GET_LIST_PERSON_REQUEST;
}
export interface getListPersonError {
    type: typeof ListPerson.GET_LIST_PERSON_ERROR;
}
export interface deletePerson {
    type: typeof ListPerson.DELETE_PERSON;
    payload: number
}
export interface filterBy {
    type: typeof ListPerson.FILTER_BY;
    payload: string
}

export interface openModal {
    type: typeof Modal.OPEN_MODAL;
    payload: number
}
export interface closeModal {
    type: typeof Modal.CLOSE_MODAL;
}

export type StateActionTypes =
    | getListPerson
    | getListPersonRequest
    | getListPersonError
    | deletePerson
    | filterBy
    | openModal
    | closeModal

export type AppActions = StateActionTypes;
