export default function validateInfo(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = 'name required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }



    if (!values.phoneNumber) {
        errors.phoneNumber = 'phoneNumber required';
    } else if (values.phoneNumber.length !== 8) {
        errors.phoneNumber = 'phoneNumber number invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }
    return errors;
}