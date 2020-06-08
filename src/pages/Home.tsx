import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import { heart } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonContent>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Ionic Login App</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div className='Wrapper'>
					<div>
						<div className='Circle1'>
							<div className='Circle'>
								<div className='Heart'>
									<IonIcon style={{ color: '#fff', fontSize: '48px' }} icon={heart} />
								</div>
							</div>
						</div>
					</div>
					<IonButton routerLink='/register'>Register</IonButton>
					<IonButton routerLink='/login' color='secondary'>
						Login
					</IonButton>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Home;
