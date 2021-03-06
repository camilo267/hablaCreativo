import React from 'react'
import { useSelector } from 'react-redux'
import PokemonElement from './PokemonElement'

const TableInfo = () => {
    const {details} = useSelector(store => store.pokemons)
    const {name, types, weight, height} = details

    return (
        <table className="pokeDetail_tableInfo">
            <tbody>
                <tr className="pokeDetail_tableRow">
                    <td className="pokeDetail_tableRowName">
                        Name
                    </td>
                    <td className="pokeDetail_tableRowValue">
                        {name}
                    </td>
                </tr>
                <tr className="pokeDetail_tableRow">
                    <td className="pokeDetail_tableRowName">
                        Height
                    </td>
                    <td className="pokeDetail_tableRowValue">
                        {height/10} Mts.
                    </td>
                </tr>
                <tr className="pokeDetail_tableRow">
                    <td className="pokeDetail_tableRowName">
                        Weight
                    </td>
                    <td className="pokeDetail_tableRowValue">
                        {weight/10} Kgs.
                    </td>
                </tr>
                <tr className="pokeDetail_tableRow">
                    <td className="pokeDetail_tableRowName">
                        Types
                    </td>
                    <td className="pokeDetail_tableRowValue">
                        {
                            types.map(type => (
                                <PokemonElement key={type.type.name} name={type.type.name}/>
                            ))
                        }
                    </td>
                </tr>
            </tbody>
        </table>

    )
}

export default TableInfo
