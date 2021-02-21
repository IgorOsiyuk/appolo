import { Dispatch } from "react";
import { AppState } from "../../..";
import Service from "../../api/api-service";
import { AppActions, ListPerson, Modal } from "../../types/actions";
import { Person } from "../../types/stateTypes";

export function getListPerson(payload: Person[]): AppActions {
    return {
        type: ListPerson.GET_LIST_PERSON,
        payload
    };
}
export function getListPersonRequest(): AppActions {
    return {
        type: ListPerson.GET_LIST_PERSON_REQUEST
    };
}
export function getListPersonError(): AppActions {
    return {
        type: ListPerson.GET_LIST_PERSON_ERROR
    };
}

export function deletePerson(payload: number): AppActions {
    return {
        type: ListPerson.DELETE_PERSON,
        payload
    };
}
export function filterBy(payload: string): AppActions {
    return {
        type: ListPerson.FILTER_BY,
        payload
    };
}
export function openModal(payload: number): AppActions {
    return {
        type: Modal.OPEN_MODAL,
        payload
    };
}
export function closeModal(): AppActions {
    return {
        type: Modal.CLOSE_MODAL,
    };
}

const service = new Service()

export function getListPerson_service() {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(getListPersonRequest())
        return service.getPersonList()
            .then((res: Person[]) => {
                dispatch(getListPerson(res))
            })
            .catch(() => {
                dispatch(getListPersonError())
            })
    }
}


const appActions = {
    getListPerson,
    getListPersonRequest,
    getListPersonError,
    getListPerson_service,
    deletePerson,
    filterBy,
    openModal,
    closeModal
};

export default appActions;
