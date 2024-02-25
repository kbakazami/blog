export default function Input({name, placeholder, title}){
    return(
        <div className="flex flex-col">
            <label className="text-white mb-2" htmlFor={name}>{title}</label>
            <input
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                className="rounded p-1"
            />
        </div>
    )
}