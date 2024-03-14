import { Link, defer, useLoaderData, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

export async function loader({ request }) {
    await requireAuth(request);
    return defer({ hostVans: getHostVans() })
}

export default function HostVans() {
    const vansPromise = useLoaderData()

    function renderHostVansList(vans) {
        const hostVansEls = vans.map(van => (
            <Link
                to={van.id}
                key={van.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={van.id}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        ))
        return (
            <section>
                {hostVansEls}
            </section>
        )
    }

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                <Suspense fallback={<h2>Loading Host Vans...</h2>}>
                    <Await resolve={vansPromise.hostVans}>
                        {renderHostVansList}
                    </Await>
                </Suspense>
            </div>
        </section>
    )
}