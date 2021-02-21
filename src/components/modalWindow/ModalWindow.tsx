import React from 'react';
import { AppActions } from '../../service/types/actions';
import { Address, Company } from '../../service/types/stateTypes';

import "./modal-window.scss"

const ModalWindow = (props: {
    adress: Address | undefined,
    company: Company | undefined,
    isOpen:boolean,
    closeModal: () => AppActions
}) => {
    const { adress, company, closeModal ,isOpen } = props
    return (
        <React.Fragment>        
            <div className="modalScroll" style={{ animation: `${isOpen && "fadeIn"} 1s` }} >
                <div className="modal">
                    <div className="modal-wrapper">
                        <div className="info">
                            <div className="info_adress">
                                <div className="info_mainCaption">
                                    Adress
                                </div>
                                <div className="info_item">
                                    <span className='info_caption'>city</span>
                                    <span className='info_data'>{adress?.city}</span>
                                </div>
                                <div className="info_item">
                                    <span className='info_caption'>street</span>
                                    <span className='info_data'>{adress?.street}</span>
                                </div>
                                <div className="info_item">
                                    <span className='info_caption'>suite</span>
                                    <span className='info_data'>{adress?.suite}</span>
                                </div>
                                <div className="info_item">
                                    <span className='info_caption'>zipcode</span>
                                    <span className='info_data'>{adress?.zipcode}</span>
                                </div>
                                <div className="info_item geo">
                                    <span className='info_caption'>geo</span>
                                    <span className='info_data'>lat:{adress?.geo.lat}</span>
                                    <span className='info_data'>lng{adress?.geo.lng}</span>
                                </div>
                            </div>
                            <div className="info_company">
                                <div className="info_mainCaption">
                                    Company
                                </div>
                                <div className="info_item">
                                    <span className='info_caption'>name</span>
                                    <span className='info_data'>{company?.name}</span>
                                </div>
                                <div className="info_item">
                                    <span className='info_caption'>catchPhrase</span>
                                    <span className='info_data'>{company?.catchPhrase}</span>
                                </div>
                                <div className="info_item">
                                    <span className='info_caption'>bs</span>
                                    <span className='info_data'>{company?.bs}</span>
                                </div>
                            </div>
                            <span className="closeModal" onClick={closeModal}>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay" style={{ animation: `${isOpen && "fadeIn"} 1s` }}></div>
        </React.Fragment>
    )
}

export default ModalWindow