import React, { useState } from 'react';
import classes from './Register.module.css';
import { IonContent, IonPage, IonButton, IonLoading } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from '../toast';

import { register } from '../service';

const Register: React.FC = () => {
	const history = useHistory();
	const [busy, setBusy] = useState(false);
	const [fullName, setFullName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [cPassword, setcPassword] = useState<string>('');

	const submitHandler = async (event: any) => {
		setBusy(true);
		event.preventDefault();
		if (fullName === '' || email === '' || password === '' || cPassword === '') {
			return toast('Please fill all fields');
		}
		if (password !== cPassword) {
			return toast('Password did not match');
		}

		const res = await register(fullName, email, password);
		if (res) {
			console.log(res);
		}
		setBusy(false);
		setFullName('');
		setEmail('');
		setPassword('');
		setcPassword('');
		history.replace('/login');
	};
	return (
		<IonPage className={classes.Page}>
			<IonLoading isOpen={busy} />
			<IonContent className={`${classes.Content}`}>
				<div className={`ion-padding ${classes.Content}`}>
					<h2>Register</h2>
					<form noValidate onSubmit={submitHandler}>
						<div className={classes.InputWrapper}>
							<div className={classes.Label}>Full Name</div>
							<input type='text' className={classes.Input} value={fullName} onChange={(e: any) => setFullName(e.target.value)} />
						</div>
						<div className={classes.InputWrapper}>
							<div className={classes.Label}>Email</div>
							<input type='email' className={classes.Input} value={email} onChange={(e: any) => setEmail(e.target.value)} />
						</div>
						<div className={classes.InputWrapper}>
							<div className={classes.Label}>Password</div>
							<input type='password' className={classes.Input} value={password} onChange={(e: any) => setPassword(e.target.value)} />
						</div>
						<div className={classes.InputWrapper}>
							<div className={classes.Label}>Confirm Passwrod</div>
							<input type='password' className={classes.Input} value={cPassword} onChange={(e: any) => setcPassword(e.target.value)} />
						</div>
						<IonButton type='submit' expand='full'>
							Register
						</IonButton>
					</form>
					<span className={classes.Footer}>
						<span className='ion-padding ion-text-center'>
							Already have an account? <Link to='/login'>Login</Link>
						</span>
					</span>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Register;
