function Button (Props: {children: string}){
    return (
        <button className="mt-10 bg-violet-400 text-purple-50 rounded-lg p-3 hover:bg-violet-900 hover:text-violet-100 transition-colors duration-200" type="submit">
            {Props.children}
        </button>
    )
}
export default Button;