import axios from "axios";
import React, {useEffect} from 'react'
import { View, Text } from 'react-native'

const SearchData = () => {

    useEffect(() => {
        axios.get(`https://www.reddit.com/search/.json?q=india`).then(response => console.log(response))
    }, [])
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default SearchData
