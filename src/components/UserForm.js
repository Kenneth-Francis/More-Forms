import {useState} from "react";

const UserForm = () => {

    // FIRST NAME
    const [firstName,      setFirstName]      = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const handleFirstName = (e) => {

        setFirstName(e.target.value);

        e.target.value.length === 0 ?
            setFirstNameError("First Name is required!")
        : (e.target.value.length > 0) && (e.target.value.length < 2) ?
            setFirstNameError("First Name must be at least 2 characters")
        : setFirstNameError("");
    }

    // LAST NAME
    const [lastName,      setLastName]      = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const handleLastName = (e) => {

        setLastName(e.target.value);
        
        e.target.value.length === 0 ?
            setLastNameError("Last Name is required!")
        : (e.target.value.length > 0) && (e.target.value.length < 2) ?
            setLastNameError("Last Name must be at least 2 characters")
        : setLastNameError("");
    }

    // EMAIL
    const [email,      setEmail]      = useState("");
    const [emailError, setEmailError] = useState("");
    const handleEmail = (e) => {

        setEmail(e.target.value);

        e.target.value.length === 0 ?
            setEmailError("Email is required!")
        : (e.target.value.length > 0) && (e.target.value.length < 5) ?
            setEmailError("Email must be at least 5 characters!")
        : setEmailError("");
    }

    // PASSWORD
    const [password, setPassword]           = useState("");
    const [passwordError, setPasswordError] = useState("");
    const handlePassword = (e) => {

        setPassword(e.target.value);

        e.target.value.length === 0 ?
            setPasswordError("Password is required!")
        : (e.target.value.length > 0) && (e.target.value.length < 8) ?
            setPasswordError("Password must be at least 8 characters!")
        : setPasswordError("");
    }

    // CONFIRM PASSWORD
    const [confirmPassword, setConfirmPassword]           = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const handleConfirmPassword = (e) => {

        setConfirmPassword(e.target.value);

        e.target.value.length === 0 ?
            setConfirmPasswordError("Confirm password.")
        : e.target.value !== password ?
            setConfirmPasswordError("Passwords must match!")
        : setConfirmPasswordError("");
    }

    // HAS BEEN SUBMITTED
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // FORM MESSAGE
    const formMessage = () => {
        return hasBeenSubmitted ?
            "Thank you for submitting the form!"
        : "Welcome, please submit the form.";
    }

    // HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( (firstNameError) || (lastNameError) || (emailError) || (passwordError) || (confirmPasswordError) ){
            alert("Invalid Form");
        } else {
            const newUser = {firstName, lastName, email, password, confirmPassword};
            console.log("Welcome", newUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setHasBeenSubmitted(true);
        }
    };


    return (
        <div className="container row m-auto">

            <div className="col">
                <div className="card shadow w-50 mt-5 m-auto">
                    <div className="card-header">
                        <h1 className="text-primary">Create User Account</h1>
                    </div>
                    <div className="card-body m-auto">

                        <h3>{formMessage()}</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">First Name: </label>
                                <input className="form-control" type="text" value={firstName}
                                        onChange={handleFirstName} />

                                {firstNameError ?
                                    <p className="text-warning">{firstNameError}</p> : null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">Last Name: </label>
                                <input className="form-control" type="text" value={lastName}
                                        onChange={handleLastName} />

                                {lastNameError ?
                                <p className="text-warning">{lastNameError}</p> : null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">Email Address: </label>
                                <input className="form-control" type="text" value={email}
                                        onChange={handleEmail} />

                                {emailError ?
                                <p className="text-warning">{emailError}</p> : null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">Password: </label>
                                <input className="form-control" type="password" value={password}
                                        onChange={handlePassword} />
                                
                                {passwordError ?
                                <p className="text-warning">{passwordError}</p> : null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">Confirm Password: </label>
                                <input className="form-control" type="password" value={confirmPassword}
                                        onChange={handleConfirmPassword} />
                                
                                {confirmPasswordError ?
                                <p className="text-warning">{confirmPasswordError}</p> : null}
                            </div>
                            <input className="btn btn-primary float-end" type="submit" value="Create User" />
                        </form>
                    </div>
                </div>
            </div>

            {/* <div className="col">
                <div className="card shadow mt-5">
                    <div className="card-body mt-5 ps-5 container-fluid d-flex flex-column">
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                First Name:</span> {firstName}</h3>
                        </div>
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                Last Name:</span> {lastName}</h3>
                        </div>
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                Email:</span> {email}</h3>
                        </div>
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                Password:</span> {password}</h3>
                        </div>
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                Confirm Password:</span> {confirmPassword}</h3>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default UserForm;
