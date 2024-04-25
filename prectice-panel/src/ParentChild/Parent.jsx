import React, { useState, useEffect } from 'react';
import "./ParentChild.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Child from "./Child"
// import UserJson from "./../UserJson.json"

function Parent() {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({ firstName: '', middleName: '', lastName: '', uniqueId: '' });
    const notify = (value) => {
        toast.success(value, {
            // position: toast.POSITION.TOP_RIGHT,
            autoClose: 0.6 ,// Adjust as needed
            toastClassName: 'custom-toast'
        });
    }


    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCreate = () => {
        if (formData.firstName == '') {
            notify('first Name Is Empty')
        } else if (formData.middleName == '') {
            notify('Middel Name Is Empty')
        } else if (formData.lastName == '') {
            notify('Last Name Is Empty')
        } else {
            if (formData.uniqueId == '') {
                formData.uniqueId = 'ID' + Math.random().toString(36).toUpperCase().substr(2, 10)
                const newItem = { ...formData };
                setItems([...items, newItem]);
                handleReset();
            } else {
                items.forEach(element => {
                    console.log(formData.uniqueId, formData.firstName, formData.middleName, formData.lastName);
                    if (element['uniqueId'] == formData.uniqueId) {
                        element['firstName'] = formData.firstName;
                        element['middleName'] = formData.middleName;
                        element['lastName'] = formData.lastName;
                        setItems([...items]);
                        handleReset();
                    }
                });
            }
        }
    };

    const handleUpdate = index => {
        console.log(index);
        // setFormData({ firstName: formData[index].firstName, middleName: formData[index].middleName, lastName: formData[index].lastName , uniqueId: formData[index].uniqueId});
        // formData.firstName = formData[index].firstName;
        // formData.middleName = formData[index].middleName;
        // formData.lastName = formData[index].lastName;
        // formData.uniqueId = formData[index].uniqueId;
        console.log(items[index].firstName);
        setFormData({ firstName: items[index].firstName, middleName: items[index].middleName, lastName: items[index].lastName, uniqueId: items[index].uniqueId });
        console.log(formData);
        // const updatedItems = [...items];
        // updatedItems[index] = updatedItem;
        // setItems(updatedItems);
    };

    const handleDelete = index => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        handleReset();
    };

    const handleReset = () => {
        setFormData({ firstName: '', middleName: '', lastName: '', uniqueId: '' });
    }

    return (
        <div>
            <div>
                <ToastContainer />
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleInputChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                <button onClick={handleCreate}> {formData.uniqueId == '' ? 'Createdwdw' : 'Update'}</button>
                <button onClick={handleReset}> Reset</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.firstName} {item.middleName && <span>{item.middleName} </span>}
                        {item.lastName}
                        <button onClick={() => handleUpdate(index)}>Update</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Parent;
