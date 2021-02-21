import React, { Component } from 'react';
import { connect } from 'react-redux';

import ModalWindow from '../../components/modalWindow';
import appActions from '../../service/redux/action';
import { AppActions } from '../../service/types/actions';
import { Address, Company, StateTypes } from '../../service/types/stateTypes';

interface IProps {
    adress: Address | undefined,
    company: Company | undefined,
    isOpen: boolean,
    closeModal: () => AppActions
}
interface IState {
    isOpen: boolean
}

class ModalContainer extends Component<IProps, IState>{
    render() {
        const { adress, company, isOpen, closeModal } = this.props
        return (
            isOpen && (
                <ModalWindow
                    adress={adress}
                    company={company}
                    closeModal={closeModal}
                    isOpen={isOpen}
                />
            )
        )
    }
}

const mapStateToProps = (state: StateTypes) => {
    return {
        adress: state.modal.data?.adress,
        company: state.modal.data?.company,
        isOpen: state.modal.isOpen
    }
}
const mapDispatchToProps = {
    closeModal: appActions.closeModal
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)