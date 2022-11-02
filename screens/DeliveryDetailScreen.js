import React, {Component} from 'react';
import {Text, View} from "react-native";
import axios from "axios";

class DeliveryDetailScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apiLoaded: false,
            data: [],
        }
    }

    componentDidMount = () => {
        this.call_api();
    }

    call_api = () => {
        const id = 81;
        const uri = "https://marktestapp.pythonanywhere.com/api/my/delivery/" + id + "/";
        const access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NTAzNjQ1LCJpYXQiOjE2Njc0MTcyNDUsImp0aSI6IjJlNTQzNDk4OWFiZDQzOWI5NDVjMWU2NDRkYjFmN2NhIiwidXNlcl9pZCI6Ijc1ZGY1NDFlLTQ4NDMtNDZiYS1iMjg0LTAxNDAzNzI1NDZmZCJ9.HnPadPf-vi5S58WcoT69tEafxKDTGd-2xRaQWNPSYQg"

        axios.put(uri, {status: "com"}, {
            headers: {
                Authorization: "Bearer " + access
            }
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <View>
                <Text>
                    Deliver Detail screen
                </Text>
            </View>
        );
    }
}

export default DeliveryDetailScreen;
