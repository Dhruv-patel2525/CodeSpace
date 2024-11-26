import classes from "./page.module.css";

export default function Login() {
    return (
        <section className={classes.loginSection}>
            <h1 className={classes.title}>Login To Your Account</h1>
            <form action="/login" id="login-form" method="POST" className={classes.form}>
                <div className={classes.formGroup}>
                    <label htmlFor="email" className={classes.label}>Email:</label>
                    <input type="email" id="email" name="email" className={classes.input} required />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="password" className={classes.label}>Password:</label>
                    <input type="password" id="password" name="password" className={classes.input} required />
                </div>
                <div className={classes.formGroup}>
                    <input type="checkbox" className={classes.checkboxInput} id="remember" />
                    <label className={classes.label} htmlFor="remember">Remember Me</label>
                </div>
                <button type="submit" className={classes.button}>Login</button>
            </form>
            <div className={classes.links}>
                <a href="#" className={classes.link}>Forgot Password?</a>
                <a href="/signUp" className={classes.link}>Sign Up</a>
            </div>
        </section>
    );
}