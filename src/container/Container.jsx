export default function Container({children}) {
    return (
        <div style = {{border: "1px solid", padding: "1rem 1rem 1rem 1rem"}}>
            {children}
        </div>
    )
}