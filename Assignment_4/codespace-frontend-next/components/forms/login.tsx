import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import classes from './login.module.css';
export default function Login(props:any)
{
    const submitHandler=((e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email=formData.get('email')as string;
        const password=formData.get('password') as string;
        props.onHandleLogin(email,password);
    });
    return <>
     <section className={classes.loginSection}>
            <h1 className={classes.title}>Login To Your Account</h1>
            <form onSubmit={submitHandler} id="login-form" method="POST" className={classes.form}>
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
    </>
}