import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../components/search';
import appActions from '../../service/redux/action';
import { AppActions } from '../../service/types/actions';
import { Person, StateTypes } from '../../service/types/stateTypes';


export interface IProps{
    personsList:Person[],
    filterBy:(payload:string)=> AppActions
}

export interface IState{
    
}
class SearchContainer extends Component<IProps,IState> {
    
    render() {
        const {filterBy} = this.props
        return (
           <Search filterBy={filterBy}/>
        )
    }
}
const mapStateToProps = (state:StateTypes) => {
    return {
        personsList: state.personsList
    }
}
const mapDispatchToProps = {
    filterBy:appActions.filterBy 
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)