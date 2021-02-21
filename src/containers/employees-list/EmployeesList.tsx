import React, { Component } from "react";
import { connect } from "react-redux";
import Employee from "../../components/employee";

import appActions from "../../service/redux/action";
import { AppActions } from "../../service/types/actions";
import { Person, StateTypes } from "../../service/types/stateTypes";


interface IProps {
    personsList: Person[];
    filterBy: string | null
    getListPerson_service: () => Promise<void>
    deletePerson: (id: number) => AppActions
    openModal: (id: number) => AppActions
}
interface IState {
    persons: Person[]
    filterBy: string | null
}

class EmployeesList extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            persons: this.props.personsList,
            filterBy: this.props.filterBy
        }
    }
    componentDidMount() {
        const { getListPerson_service } = this.props
        getListPerson_service().then(() => {
            this.setState({
                persons: this.props.personsList
            })
        })

    }
    componentDidUpdate(prevProps: { personsList: Person[], filterBy: string | null }) {
        if (this.props.personsList !== prevProps.personsList
            || this.props.filterBy !== prevProps.filterBy) {
            const { filterBy, personsList } = this.props
            filterBy !== null ?
                this.setState({
                    persons: personsList.filter(
                        (item: Person) =>
                            item.name.includes(filterBy) ||
                            item.username.includes(filterBy) ||
                            item.email.includes(filterBy)
                    ),
                    filterBy: filterBy
                })
                : this.setState({
                    persons: personsList,
                    filterBy: filterBy
                })
        }
    }

    render() {
        const { deletePerson, openModal } = this.props
        return (
            <div className="person-list">
                {
                    this.state.persons.map((item: Person, index) => {
                        return (
                            <Employee key={index}
                                person={item}
                                action={deletePerson}
                                filterBy={this.state.filterBy}
                                openModal={openModal}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state: StateTypes) => {
    return {
        personsList: state.personsList,
        filterBy: state.filterBy
    };
};
const mapDispatchToProps = {
    getListPerson_service: appActions.getListPerson_service,
    deletePerson: appActions.deletePerson,
    openModal: appActions.openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);
