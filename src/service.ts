import axios from 'axios';

const registerUrl = 'https://www.kataklop.com/INIT-API-0001/users/add';
type Users = {
	id: string;
	fullName: string;
	email: string;
	password: string;
};
const users: Users[] = [];
export async function register(fullName: string, email: string, password: string) {
	const userData = {
		id: Date.now().toString(),
		fullName,
		email,
		password,
		// refreshtoken: 'no',
	};

	const headers = {
		AppKey: '78gYUwQGWanX6cU7EBcjpFbJmnNbSgd5',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	};
	try {
		// const res = await axios.post(registerUrl, userData, { headers });
		// if (res) return res;
		users.push(userData);
		return userData;
	} catch (err) {
		return err;
	}
}

export async function login(email: string, password: string) {
	if (users.length === 0) {
		return { success: false };
	}
	let user = users.filter(user => {
		if (user.email === email && user.password === password) {
			return user;
		}
	});

	if (user.length > 0) {
		return { success: true, user };
	}
}
