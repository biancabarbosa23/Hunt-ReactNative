import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import api from '../services/api'

export default function Main({ navigation }) {
    const [docsProduct, setDocsProduct] = useState([])
    const [productInfo, setProductInfo] = useState({})
    const [page, setPage] = useState(1)

    useEffect(() => {
        loadProduct()
    }, [])

    async function loadProduct(page = 1) {
        const response = await api.get(`/products?page=${page}`)

        const { docs, ...info } = response.data
        setProductInfo(info)
        setDocsProduct([...docsProduct, ...docs])
        setPage(page)

    }

    function loadMore() {
        if (page === productInfo.pages) return

        const pageNumber = page + 1
        loadProduct(pageNumber)
    }

    function renderItem({ item }) {
        return (
            <View style={styles.productContainer}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Product', { product: item }) }} style={styles.productButton}>
                    <Text style={styles.productButtonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                data={docsProduct}
                keyExtractor={item => item._id}
                renderItem={item => renderItem(item)}
                onEndReached={loadMore}
                onEndReachedThreshold={0.1}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    list: {
        padding: 20,
    },
    productContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#333'
    },
    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#da552f',
        backgroundColor: 'transparent',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: '#da552f',
        fontWeight: 'bold'
    }
})