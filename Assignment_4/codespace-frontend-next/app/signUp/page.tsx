"use client"
import classes from "./page.module.css";

export default function SignUp() {
    return (
        <section className={classes.signupSection}>
            <h1 className={classes.title}>Create Your Account</h1>
            <form action="/signup" id="signup-form" method="POST" className={classes.form}>
                <div className={classes.formGroup}>
                    <label htmlFor="name" className={classes.label}>Name:</label>
                    <input type="text" id="name" name="name" className={classes.input} required />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="email" className={classes.label}>Email:</label>
                    <input type="email" id="email" name="email" className={classes.input} required />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="role" className={classes.label}>Select Role:</label>
                    <select id="role" name="role" className={classes.input} required defaultValue="">
                        <option value="" disabled>Select your role</option>
                        <option value="coder">Coder</option>
                        <option value="instructor">Instructor</option>
                    </select>
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="password" className={classes.label}>Password:</label>
                    <input type="password" id="password" name="password" className={classes.input} required />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="confirm-password" className={classes.label}>Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" className={classes.input} required />
                </div>
                <button type="submit" className={classes.button}>Sign Up</button>
            </form>
            <div className={classes.links}>
                <a href="/login" className={classes.link}>Already have an account? Login</a>
            </div>
        </section>
    );
}