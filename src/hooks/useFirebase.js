import { useState, useEffect } from "react";
import firebaseInitialization from "../pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";

// initialize firebase app
firebaseInitialization();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    // New user registration method
    const registerUser = (email, password, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                // Save user to Database
                saveUser(email, name);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    //User Login method
    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setUser(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // User logout method
    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError('');
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setLoading(false));
    };

    // Save user to Database method
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://pure-wave-29914.herokuapp.com/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    //Check the user is admin or not
    useEffect(() => {
        fetch(`https://pure-wave-29914.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
            setLoading(false);
        });

        return () => unsubscribe;

    }, [auth])

    return {
        user,
        loading,
        error,
        admin,
        registerUser,
        loginUser,
        logout,
    }

}

export default useFirebase;