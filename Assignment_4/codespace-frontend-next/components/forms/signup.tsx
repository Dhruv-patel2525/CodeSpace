import React, { useRef } from "react";
import classes from "./signup.module.css";
export default function SignUp(props:any)
{
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const roleRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const submitHandler=((e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const name = nameRef.current?.value || '';
        const email = emailRef.current?.value || '';
        const role = roleRef.current?.value || '';
        const password = passwordRef.current?.value || '';
        const confirmPassword = confirmPasswordRef.current?.value || '';
        const signUpdata={
            userId:2,
            name:name,
            email:email,
            role:role,
            password:password,
            confirmPassword:confirmPassword,
        }
        props.onHandleSignUp(signUpdata);
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (roleRef.current) roleRef.current.value = '';
        if (passwordRef.current) passwordRef.current.value = '';
        if (confirmPasswordRef.current) confirmPasswordRef.current.value = '';
        
    });
    return <section className={classes.signupSection}>
    <h1 className={classes.title}>Create Your Account</h1>
    <form onSubmit={submitHandler} id="signup-form" method="POST" className={classes.form}>
        <div className={classes.formGroup}>
            <label htmlFor="name" className={classes.label}>Name:</label>
            <input type="text" id="name" name="name" className={classes.input} ref={nameRef} required />
        </div>
        <div className={classes.formGroup}>
            <label htmlFor="email" className={classes.label}>Email:</label>
            <input type="email" id="email" name="email" className={classes.input} ref={emailRef} required />
        </div>
        <div className={classes.formGroup}>
            <label htmlFor="role" className={classes.label}>Select Role:</label>
            <select id="role" name="role" className={classes.input} required defaultValue="" >
                <option value="" disabled>Select your role</option>
                <option value="coder">Coder</option>
                <option value="instructor">Instructor</option>
            </select>
        </div>
        <div className={classes.formGroup}>
            <label htmlFor="password" className={classes.label}>Password:</label>
            <input type="password" id="password" name="password" className={classes.input} ref={passwordRef} required />
        </div>
        <div className={classes.formGroup}>
            <label htmlFor="confirm-password" className={classes.label}>Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" className={classes.input} ref={confirmPasswordRef}required />
        </div>
        <button type="submit" className={classes.button}>Sign Up</button>
    </form>
    <div className={classes.links}>
        <a href="/login" className={classes.link}>Already have an account? Login</a>
    </div>
</section>
}