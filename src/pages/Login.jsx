import { Form, redirect, useActionData, useLoaderData, useNavigate, useNavigation } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email")
    const password = formData.get("password")
    
    try{
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", JSON.stringify(true))
        const redirectUrl = new URL(request.url).searchParams.get("redirectTo") || "/host"
        return redirect(redirectUrl)
    } catch(error) {
        return error.message
    }
}

export default function Login() {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation();

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {errorMessage && <h3 className="red">{errorMessage}</h3>}
            {message && <h3 className="red">{message}</h3>}
            <Form method="post" replace className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )

}