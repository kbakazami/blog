export default function Textarea({name, placeholder, title, rows}){
    return (
        <div className="flex flex-col">
            <label className="text-white mb-2" htmlFor={name}>{title}</label>
            <textarea
                id={name}
                name={name}
                rows={rows}
                placeholder={placeholder}
                className="rounded p-1"
            />
        </div>
    )
}