import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';
const Banner = ({title}) => (
    <>
        <h1>{title}</h1>
        <div><AuthButton/></div>
    </>
    
);

const SignInButton = () => (
    <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>Sign in</button>
  );
  
  const SignOutButton = () => (
    <button className="ms-auto btn btn-dark" onClick={signOut}>Sign out</button>
  );
  
  const AuthButton = () => {
    const [user] = useAuthState();
    return user ? <SignOutButton /> : <SignInButton />;
  };

export default Banner;