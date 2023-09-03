function App({text}: { text?: string }) {

    return (
        <section style={{width: '100%', height: '200px', border: '1px solid blue'}}>
            <p>Second Package: {text}</p>
        </section>
    )
}

export default App
