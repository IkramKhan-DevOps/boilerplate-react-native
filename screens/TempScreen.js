import React, {Component} from "react";
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";

function Untitled1(props) {
    return (
        <SafeAreaView>
            <View className="flex">
                <View className="bg-green-200 w-full">
                    <Text></Text>
                </View>
                <View className="bg-green-200 w-full">
                    <Text></Text>
                </View>
            </View>
            <View className="bg-green-100 w-full p-4 ">
                <View className="flex flex-row">
                    <View className="">
                        <Icon
                            size={30}
                            name='user'
                            type='antdesign'
                            color='#517fa4'
                        />
                    </View>
                    <View className="">
                        <Text className="font-bold pl-2 ">Ikram Khan</Text>
                        <Text className="pl-2">ikram.khan0762@gmail.com</Text>
                    </View>
                    <View className="flex-1">

                    </View>
                </View>
            </View>
            <View>
                <View className="flex m-4">
                    <Text className="font-bold text-lg mb-2">Active Orders</Text>
                    <View className="bg-green-200 p-4">
                        <View className={"flex flex-row"}>
                            <View className={"flex-1"}>

                                <Text>
                                    Order ID: 88
                                </Text>
                            </View>
                            <View className={"flex"}>
                                <TouchableOpacity>
                                    <Text className={"font-bold"}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/*<View className="flex flex-row relative">*/}
            {/*    <View className="flex-1 bg-red-100 p-4">*/}
            {/*        <Text className={"text-center"}>1</Text>*/}
            {/*    </View>*/}
            {/*    <View className="flex-1 bg-lime-100 p-4">*/}
            {/*        <Text className={"text-center"}>1</Text>*/}
            {/*    </View>*/}
            {/*    <View className="flex-1 bg-pink-100 p-4">*/}
            {/*        <Text className={"text-center"}>1</Text>*/}
            {/*    </View>*/}
            {/*    <View className="flex-1 bg-orange-100 p-4">*/}
            {/*        <Text className={"text-center"}>1</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}
        </SafeAreaView>
    );
}

export default Untitled1;
