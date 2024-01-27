export function signup_validators({
    name = "",
    email = "",
    password = "",
    phone = "",
    address = ""
}) {
    //all fields
    if (name == "" || email == "" || password == "" || phone == "" || address == "") {
        return [true, "all fields are required"]
    }
    //name
    if (name.length < 6) return [true, "username length must be greater than 6"]
    if (password.length < 6) return [true, "password length must be greater than 6"]
    if (phone.length < 10 || Number(phone) == NaN) return [true, "invalid phone number"]
    return [false, "success"]

}