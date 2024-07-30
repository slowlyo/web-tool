import {useEffect} from 'react'

const Loading = () => {
    useEffect(() => {
        document.getElementById('app-loader')?.remove()
    }, [])

    return (
        <div className="app-loader">
            <div className="loading"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
        </div>
    )
}

export default Loading
