import React from "react";
import { AppActions } from "../../service/types/actions";
import { Person } from "../../service/types/stateTypes";
import "./employee.scss";

const Employee = (props: {
    person: Person,
    action: (id: number) => AppActions,
    openModal: (id: number) => AppActions,

    filterBy: string | null
}) => {
    const { person, action, filterBy, openModal } = props;

    function coloredFun(data: string, colorValue: string | null) {
        let value
        if (!colorValue) {
            value = data
        } else {
            if (!data.includes(colorValue)) {
                value = data
            } else {
                let coloredPart = React.createElement('span', { className: 'red', key: (Math.random() * 100) }, data.slice(data.search(colorValue), data.search(colorValue) + colorValue.length))
                let firstPart = React.createElement('span', { key: (Math.random() * 100) }, data.slice(0, data.search(colorValue)))
                let endPart = React.createElement('span', { key: (Math.random() * 100) }, data.slice(data.search(colorValue) + colorValue.length))
                value = React.createElement('span', { key: (Math.random() * 100) }, [firstPart, coloredPart, endPart])
            }
        }
        return value
    }

    function openWindow(e: React.MouseEvent<HTMLDivElement>) {
        openModal(person.id)
    }

    return (
        <div className="person-list_item ">
            <div className="person-item" onClick={openWindow}>
                <div className="person-item_info username">
                    <div className="person-item_info-capt">
                        Username
                    </div>
                    {coloredFun(person.username, filterBy)}
                </div>
                <div className="person-item_info name">
                    <div className="person-item_info-capt">
                        Name
                    </div>
                    {coloredFun(person.name, filterBy)}
                </div>
                <div className="person-item_info email">
                    <div className="person-item_info-capt">
                        Email
                    </div>
                    {coloredFun(person.email, filterBy)}
                </div>
            </div>
            <div className="person-item_btn">
                <button onClick={() => {
                    action(person.id)
                }}>Delete Person</button>
            </div>
        </div>
    );
};

export default Employee;
