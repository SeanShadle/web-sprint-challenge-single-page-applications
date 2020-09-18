import * as yup from "yup";

export default yup.object().shape({
    size: yup
        .string(),
    originalRed: yup
        .boolean(),
    garlicRanch: yup
        .boolean(),
    pesto: yup
        .boolean(),
    bbq: yup
        .boolean(),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    onion: yup
        .boolean(),
    olives: yup
        .boolean(),
    name: yup
        .string()
        .min(2, "Name must include 2 letters")
        .required("Name is required"),
    instructions: yup
        .string()
});