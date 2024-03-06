import { useEffect, useState } from "react";
import { Link, Outlet, NavLink, useParams } from "react-router-dom";

export default function HostVanDetail() {
    const [currentVan, setCurrentVan] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        className={({ isActive }) => isActive ? 'active-link' : ""}>
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        className={({ isActive }) => isActive ? 'active-link' : ""}>
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        className={({ isActive }) => isActive ? 'active-link' : ""}>
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}