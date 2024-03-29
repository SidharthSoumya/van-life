import {
    Link,
    Outlet,
    NavLink,
    useLoaderData,
    defer,
    Await
} from "react-router-dom";
import { Suspense } from "react";
import { getVan } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
    await requireAuth(request)
    return defer({ vanDetails: getVan(params.id) })
}

export default function HostVanDetail() {
    const vanPromise = useLoaderData()

    function renderVanDetails(currentVan) {
        return (
            <>
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
            </>
        )
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <Suspense fallback={<h2>Loading Host Van Details...</h2>}>
                    <Await resolve={vanPromise.vanDetails}>
                        {renderVanDetails}
                    </Await>
                </Suspense>
            </div>

        </section>
    )
}