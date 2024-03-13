import React from "react"
import { Link, useLoaderData, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

export function loader() {
    return getVans();  
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const vans = useLoaderData();

    const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = filteredVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
            >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    className={
                        `van-type simple ${typeFilter === "simple" ? 'selected' : ""}`
                    }
                    onClick={() => setSearchParams({ type: "simple" })}>simple</button>
                <button
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? 'selected' : ""}`
                    }
                    onClick={() => setSearchParams({ type: "rugged" })}>rugged</button>
                <button
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? 'selected' : ""}`
                    }
                    onClick={() => setSearchParams({ type: "luxury" })}>luxury</button>
                {
                    typeFilter &&
                    <button
                        className="van-type clear-filters"
                        onClick={() => setSearchParams({})}>clear</button>
                }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}