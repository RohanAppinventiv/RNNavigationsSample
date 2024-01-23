import { useEffect, useState } from "react"
import {SafeAreaView, StyleSheet} from "react-native"
import FormTextInput from "../components/FormTextInput"
import { Column, ColumnSurface } from "../components/Surface"
import OperationType from "../Utils/OperationType"
import { useDispatch, useSelector } from "react-redux"
import { isEmailValid, isEmpty, isNameValid, isPhoneValid } from "../Utils/Validations"
import { addContact, editContact } from "../store/slices/contactSlice"
import { FlatButton } from "../components/Buttons"


const FormScreen = ({ route, navigation }) => {
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({})
    const operationType = route?.params?.operationType
    const index = route?.params?.index
    const dispatch = useDispatch()

    const data = (operationType == OperationType.ADD) ? {
        name: '',
        email: '',
        phone: '',
        dob: '16/01/2000'

    } : useSelector((state) => state.contacts.data[index])

    useEffect(() => {
        setFormData(data)
    }, [])

    useEffect(() => {setButtonEnabled(isButtonEnabled()) }, [formData])

    const onChangeText = (value, key) => {
        const newData = { ...formData, [key]: value }
        setFormData(newData)
    }
    const isButtonEnabled = () => {
        if (isEmpty(formData?.name) || isEmpty(formData?.email) || isEmpty(formData?.phone) || isEmpty(formData?.dob))
            return false;

        return true;
    }
    function isAllFieldValid() {
        let newData = {}
        if (!isNameValid(formData.name)) {
            newData = {...newData, name: "Please enter a valid name"}
        }
        if (!isEmailValid(formData.email)) {
            newData = {...newData, email: "Please enter a valid email address"}
        }
        if (!isPhoneValid(formData.phone)) {
            newData = {...newData, phone: "Please enter a valid phone number"}
        }
        setErrors(newData)
        return (isEmpty(newData.name) && isEmpty(newData.email)  && isEmpty(newData.phone) && isEmpty(newData.dob))
    }

    function onSubmit(){
        if (isAllFieldValid()) {
            if (operationType == OperationType.ADD) {
                dispatch(addContact(formData))
            } else {
                dispatch(editContact({ formData: formData, index: index }))
            }
            navigation.goBack()
        }
    }

    const clearError = (key) => {
        const newError = { ...errors, [key]: "" }
        setErrors(newError)
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>

            <ColumnSurface style={styles.parentSurfac}>
                <FormTextInput onFocus={()=> clearError("name")} errorMessage={errors.name} initialValue={formData?.name} style={styles.inputLayout} placeholder={"Enter Name"} label={"Name"} onChangeText={(value) => onChangeText(value, "name")} />
                <FormTextInput onFocus={()=> clearError("email")} errorMessage={errors.email} initialValue={formData?.email} maxLength={40} style={styles.inputLayout} placeholder={"Enter Email"} label={"Email"} inputMode={"email"} onChangeText={(value) => onChangeText(value, "email")} />
                <FormTextInput onFocus={()=> clearError("phone")} errorMessage={errors.phone} initialValue={formData?.phone} maxLength={20} style={styles.inputLayout} placeholder={"Enter Phone"} label={"Phone"} inputMode={"numeric"} onChangeText={(value) => onChangeText(value, "phone")} />
                <FormTextInput onFocus={()=> clearError("dob")} errorMessage={errors.dob} initialValue={formData?.dob} style={styles.inputLayout} placeholder={"Select DOB"} label={"Date of Birth"} isEditable={false} onChangeText={(value) => onChangeText(value, "dob")} />
            </ColumnSurface>

            <Column style={styles.bottomSurface}>
                <FlatButton
                    disabled={!buttonEnabled}
                    style={buttonEnabled ? styles.buttonEnabledStyle : styles.buttonDisabledStyle}
                    text={operationType == OperationType.ADD ? 'Add' : 'Update'}
                    onPress={() => onSubmit()}
                />
            </Column>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1
    },
    parentSurfac: {
        padding: 20, justifyContent: "flex-start"
    },
    buttonEnabledStyle: {
        backgroundColor: 'teal'
    },
    buttonDisabledStyle: {
        backgroundColor: 'grey'
    },
    inputLayout: {
        marginBottom: 10
    },
    bottomSurface: { flexDirection: 'column-reverse' }

})

export default FormScreen;
