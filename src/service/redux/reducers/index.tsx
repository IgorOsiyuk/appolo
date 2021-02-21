import { Person, StateTypes } from "../../types/stateTypes";
import { AppActions, ListPerson, Modal } from "../../types/actions";

export const initialState: StateTypes = {
    personsList: [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: -37.3159,
                    lng: 81.1496
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        }
    ],
    filterBy: null,
    isLoading: false,
    isError: false,
    modal:{
        id:null,
        data:null,
        isOpen:false
    }
}

function personList(state = initialState, action: AppActions): StateTypes {
    switch (action.type) {
        case ListPerson.GET_LIST_PERSON: {
            return {
                ...state,
                personsList: action.payload,
                isLoading: false,
                isError: false
            }
        }
        case ListPerson.GET_LIST_PERSON_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case ListPerson.GET_LIST_PERSON_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case ListPerson.DELETE_PERSON: {
            return {
                ...state,
                personsList: state.personsList.filter((item: Person) => item.id !== action.payload)
            }
        }
        case ListPerson.FILTER_BY: {
            return {
                ...state,
                filterBy: action.payload !== '' ? action.payload : null
            }
        }

        case Modal.OPEN_MODAL: {
            return {
                ...state,
                modal:{
                    id:action.payload,
                    
                    data:{
                        adress: state.personsList.find(item => item.id === action.payload)?.address,
                        company: state.personsList.find(item => item.id === action.payload)?.company
                    },
                    isOpen:true
                }
            }
        }
        case Modal.CLOSE_MODAL: {
            return {
                ...state,
                modal: {
                    id:null,
                    data:null,
                    isOpen:false
                }
            }
        }

        default:
            return state;
    }
}

const rootReducer = personList

export default rootReducer;
