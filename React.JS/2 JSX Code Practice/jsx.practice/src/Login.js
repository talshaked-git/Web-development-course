import Input from "./Input";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <Input type="text" placeHolder="Username" />
                <Input type="password" placeHolder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;