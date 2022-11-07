import React, {useState} from "react";
import {FlatList, Platform, StatusBar, View} from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListSeparator";
import BaseScreen from "../components/BaseScreen";


const initMessages = [
    {
        id: 1,
        title: "Search",
        description: "In search of exalters",
        image: require("../assets/images/logo-red-1000.png")
    },
    {
        id: 2,
        title: "Find",
        description: "Found some one on my way",
        image: require("../assets/images/logo-red-1000.png")
    },
    {
        id: 3,
        title: "Assign",
        description: "Swiper down to check them",
        image: require("../assets/images/logo-red-1000.png")
    },
]

function HistoryScreen(props) {
    const [messages, setMessages] = useState(initMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <BaseScreen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({item}) =>
                    <ListItem title={item.title} subtitle={item.description}
                              picture={item.image}
                              onPress={() => console.log("Press: ", item)}
                              onDelete={() => handleDelete(item)}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: "Saqib Khan",
                            description: "Dev Ops engineer",
                            image: require("../assets/images/logo-red-1000.png")
                        },
                        {
                            id: 2,
                            title: "Ikram Khan",
                            description: "Full Stack developer",
                            image: require("../assets/images/logo-red-1000.png")
                        },
                        {
                            id: 3,
                            title: "Anas Khan",
                            description: "MERN Stack developer",
                            image: require("../assets/images/logo-red-1000.png")
                        },
                        {
                            id: 4,
                            title: "Sheraz Bilbil",
                            description: "Flutter developer",
                            image: require("../assets/images/logo-red-1000.png")
                        },
                        {
                            id: 5,
                            title: "Waseem Badami",
                            description: "AI developer",
                            image: require("../assets/images/logo-red-1000.png")
                        },
                    ]);
                }}
            />
        </BaseScreen>
    );
}


export default HistoryScreen;