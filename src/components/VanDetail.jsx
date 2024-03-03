import { Component } from "react";
import withRouter from "../../withRouter";

class VanDetail extends Component {
    state = {
        van: null
    }
    componentDidMount() {
        fetch(`/api/vans/${this.props.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({van: data.vans})
            })
    }
    render() {
        const van = this.state.van;
        return(
            <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
        )
    }
}

export default withRouter(VanDetail)