import 'firebase/auth';
import auth from './firebase';

export const register = async ({ email, password }) => {
    const responseRegister = await auth.createUserWithEmailAndPassword(email, password);
    return responseRegister.user;
}

export const login = async ({ email, password }) => {
    const responseLogin = await auth.signInWithEmailAndPassword(email, password);
    // return responseLogin.user;
    return 'hhhhhhh';
}


