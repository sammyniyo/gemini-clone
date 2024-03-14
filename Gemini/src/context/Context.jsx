import { createContext, useState } from "react";
import runChat from "../config/gemini";


export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState(""); 
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResults,setshowResults] = useState([false]);
    const [loading,setLoading] = useState([false]);
    const [resultData,setResultData] = useState("");

    const onSent = async (prompt) =>{
        setResultData("")
        setLoading(true)
        setshowResults(true)
        const response = await runChat(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        loading,
        resultData,
        input,
        setInput
    }
    return(
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
    )
}
export default ContextProvider