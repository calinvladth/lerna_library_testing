function App({text}: { text?: string }) {

    return (
        <>
            <p>Second Package</p>
            <p style={{color: 'blue'}}>
                {text}
            </p>
        </>
    )
}

export default App
