type Props = {
    title: string,
    description?: string
};
function MyComponent({title, description}: Props) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
// const MyComponent = (arg: string) => (<p>{arg}</p>)
export default MyComponent