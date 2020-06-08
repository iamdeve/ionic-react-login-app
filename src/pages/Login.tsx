import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import classes from './Login.module.css';
import { toast } from '../toast';
import { login } from '../service';
const Login: React.FC = () => {
	const history = useHistory();
	const [busy, setBusy] = useState(false);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const submitHandler = async (event: any) => {
		setBusy(true);
		event.preventDefault();
		if (email === '' || password === '') {
			return toast('Please fill all fields');
		}

		const res: any = await login(email, password);
		if (!res.success) {
			console.log(res);
			return toast('No User Exist');
		}
		setBusy(false);
		setEmail('');
		setPassword('');
		history.replace('/home');
	};

	return (
		<IonPage className={classes.Page}>
			<IonContent className={`${classes.Content}`}>
				<div className={`ion-padding ${classes.Content}`}>
					<h2>Login</h2>
					<form noValidate onSubmit={submitHandler}>
						<div className={classes.InputWrapper}>
							<div className={classes.Label}>Member Id</div>
							<input type='email' className={classes.Input} onChange={(e: any) => setEmail(e.target.value)} />
						</div>
						<div className={classes.InputWrapper}>
							<div className={classes.Label}>
								Password
								<div className={classes.ForgotWrapper}>
									<Link to='/' className={classes.ForgotLink}>
										Forgot Password ?
									</Link>
								</div>
							</div>
							<input type='password' className={classes.Input} onChange={(e: any) => setPassword(e.target.value)} />
						</div>

						<IonButton type='submit' expand='full'>
							Login
						</IonButton>
					</form>
					<span className={classes.Footer}>
						<span className='ion-padding ion-text-center'>
							Don't have account? <Link to='/register'>Creaet an account</Link>
						</span>
					</span>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Login;
