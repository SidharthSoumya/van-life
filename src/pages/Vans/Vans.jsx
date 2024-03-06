import { Component } from "react";
import { Link } from "react-router-dom";

export default class Vans extends Component {
    state = {
        vans: []
    }

    componentDidMount() {
        fetch("api/vans")
            .then(res => res.json())
            .then(data => {
                this.setState(({ vans: data.vans }))
            })
    }

    render() {
        const vanElements = this.state.vans.map(van => (
            <div key={van.id} className="van-tile">
                <Link
                    to={`/vans/${van.id}`}
                    aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
                >
                    <img src={van.imageUrl} alt={`Image of ${van.name}`} />
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
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        )
    }
}