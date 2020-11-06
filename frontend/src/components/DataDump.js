import React from 'react'
import { useQuery, gql } from '@apollo/client'

const DataDump = () => {
    const { loading, error, data } = useQuery(gql`
    {
        foodMany(filter: {}) {
            name
            products {
                name
            }
        }
    }`)

    console.log(`Data: ${data}`);
    
    if (loading) return <p>Loading...</p>
    if (error) {
        // console.log(error);
        return <p>Error</p>
    }

    return data.foodMany.map(({ name, products }) => {
        const renderedProducts = products.map(({ name }) => <li>{name}</li>)
        return (
            <div>
                <p>{name}</p>
                <ul>
                    {renderedProducts}
                </ul>
            </div>
        )
    })
}

export default DataDump
