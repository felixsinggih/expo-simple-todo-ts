import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";
import { Button, FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { employeeStyles } from '../styles/employees';

const apiUrl = 'http://192.168.100.13:3001'

type employee = {
    id: string,
    name: string,
    email: string,
    role: string,
    password: string
}

export default function EmployeePage() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isModalEditVisible, setIsModalEditVisible] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const [employees, SetEmployee] = useState<employee[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiUrl}/employees/`);
            const data = await response.json();
            SetEmployee(data);
            console.log(data)
        };
        fetchData();
    }, []);

    const addEmployee = () => {
        fetch(`${apiUrl}/employees/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, role, password }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setIsModalVisible(false);
                SetEmployee([...employees, data]);
                setName('');
                setEmail('');
                setRole('');
                setPassword('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const editEmployee = (id: string) => {
        fetch(`${apiUrl}/employees/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, role, password }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setIsModalEditVisible(false);

                const itemIndex = employees.findIndex(currItem => currItem.id === id);
                if (itemIndex !== -1) {
                    const updatedEmployees = [...employees];
                    updatedEmployees[itemIndex] = { ...updatedEmployees[itemIndex], name, email, role };
                    SetEmployee(updatedEmployees);
                }

                setId('');
                setName('');
                setEmail('');
                setRole('');
                setPassword('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const deleteEmployee = (id: string) => {
        fetch(`${apiUrl}/employees/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                SetEmployee(employees.filter(employee => employee.id !== id));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const addButton = () => {
        return (
            <TouchableOpacity style={employeeStyles.addIcon} onPress={() => setIsModalVisible(true)} >
                <Ionicons name="add" size={24} color="black" />
            </TouchableOpacity>
        );
    };

    const setEditEmployee = (employee: employee) => {
        setId(employee.id)
        setName(employee.name)
        setEmail(employee.email)
        setRole(employee.role)
        setIsModalEditVisible(true)
    }

    const listItem = (item: employee) => {
        return (
            <View style={employeeStyles.item}>
                <Text style={employeeStyles.itemText}>{item.name}</Text>
                <View style={employeeStyles.itemButtonArea}>
                    <Pressable onPress={() => setEditEmployee(item)} >
                        <Ionicons style={employeeStyles.itemButton} name="pencil" size={16} color="white" />
                    </Pressable>
                    <Pressable onPress={() => deleteEmployee(item.id)}>
                        <Ionicons style={[employeeStyles.itemButton, { backgroundColor: 'red' }]} name="trash" size={16} color="white" />
                    </Pressable>
                </View>
            </View>
        )
    }

    return (
        <View style={employeeStyles.container}>

            <Modal visible={isModalVisible} transparent={true} onRequestClose={() => setIsModalVisible(!isModalVisible)}>
                <View style={employeeStyles.centeredView}>
                    <View style={employeeStyles.modalView}>
                        <TextInput style={employeeStyles.input} placeholder='Name' onChangeText={setName} value={name} />
                        <TextInput style={employeeStyles.input} placeholder='Email' onChangeText={setEmail} value={email} />
                        <TextInput style={employeeStyles.input} placeholder='Role' onChangeText={setRole} value={role} />
                        <TextInput style={employeeStyles.input} placeholder='Password' onChangeText={setPassword} value={password} />
                        <Button title='Add Employee' onPress={addEmployee} />
                    </View>
                </View>
            </Modal>

            <Modal visible={isModalEditVisible} transparent={true} onRequestClose={() => setIsModalEditVisible(!isModalEditVisible)}>
                <View style={employeeStyles.centeredView}>
                    <View style={employeeStyles.modalView}>
                        <TextInput style={employeeStyles.input} placeholder='Name' onChangeText={setName} value={name} />
                        <TextInput style={employeeStyles.input} placeholder='Email' onChangeText={setEmail} value={email} />
                        <TextInput style={employeeStyles.input} placeholder='Role' onChangeText={setRole} value={role} />
                        <TextInput style={employeeStyles.input} placeholder='Password' onChangeText={setPassword} value={password} />
                        <Button title='Edit Employee' onPress={() => editEmployee(id)} />
                    </View>
                </View>
            </Modal>

            <FlatList
                style={employeeStyles.list}
                data={employees}
                renderItem={({ item }) => listItem(item)}
                keyExtractor={item => item.id}
                ListFooterComponent={addButton}
            />
        </View>
    )
}
