import classes from './login.module.css';
import { useRef } from 'react';
export default function Login(props:any)
{
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const submitHandler=((e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const email = emailRef.current?.value || '';
        const password = passwordRef.current?.value || '';
        props.onHandleLogin(email,password);
        if (emailRef.current) emailRef.current.value = '';
        if (passwordRef.current) passwordRef.current.value = '';

    });
    return <>
     <section className={classes.loginSection}>
            <h1 className={classes.title}>Login To Your Account</h1>
            <form onSubmit={submitHandler} id="login-form" method="POST" className={classes.form}>
                <div className={classes.formGroup}>
                    <label htmlFor="email" className={classes.label}>Email:</label>
                    <input type="email" id="email" name="email" className={classes.input} ref={emailRef} required />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="password" className={classes.label}>Password:</label>
                    <input type="password" id="password" name="password" className={classes.input} ref={passwordRef} required />
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
    </>
}